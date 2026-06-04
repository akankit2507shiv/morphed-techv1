/**
 * RAG index — loads Morphed Tech course content into searchable chunks.
 * Uses lightweight keyword scoring (no vector DB required).
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const MAX_CHUNK = 1400;

const CONTENT_MODULES = [
  { file: 'sql-content.js', varName: 'sqlContent', module: 'sql' },
  { file: 'python-content.js', varName: 'pythonContent', module: 'python' },
  { file: 'pyspark-content.js', varName: 'pysparkContent', module: 'pyspark' },
  { file: 'aws-content.js', varName: 'awsContent', module: 'aws' },
  { file: 'databricks-content.js', varName: 'databricksContent', module: 'databricks' },
  { file: 'git-content.js', varName: 'gitContent', module: 'git' },
  { file: 'projects-content.js', varName: 'projectsContent', module: 'projects' }
];

const MODULE_LABELS = {
  sql: 'SQL Mastery',
  python: 'Python for DE',
  pyspark: 'PySpark',
  aws: 'AWS for DE',
  databricks: 'Databricks',
  git: 'Git & GitHub',
  projects: 'Real Projects'
};

let chunks = [];
let indexReady = false;
let indexError = null;

function loadJsContent(filePath, varName) {
  const src = fs.readFileSync(filePath, 'utf8');
  const sandbox = { module: { exports: {} }, exports: {} };
  const fn = new Function(
    'module',
    'exports',
    `${src}\nmodule.exports = typeof ${varName} !== 'undefined' ? ${varName} : null;`
  );
  fn(sandbox.module, sandbox.exports);
  return sandbox.module.exports;
}

function splitText(text, maxLen = MAX_CHUNK) {
  if (!text || text.length <= maxLen) return [text].filter(Boolean);
  const parts = [];
  let start = 0;
  while (start < text.length) {
    let end = Math.min(start + maxLen, text.length);
    if (end < text.length) {
      const breakAt = text.lastIndexOf('\n\n', end);
      if (breakAt > start + maxLen * 0.4) end = breakAt;
    }
    parts.push(text.slice(start, end).trim());
    start = end;
  }
  return parts.filter(Boolean);
}

function collectStrings(value, out = []) {
  if (typeof value === 'string') {
    const t = value.replace(/\s+/g, ' ').trim();
    if (t.length > 30) out.push(t);
  } else if (Array.isArray(value)) {
    value.forEach(v => collectStrings(v, out));
  } else if (value && typeof value === 'object') {
    Object.values(value).forEach(v => collectStrings(v, out));
  }
  return out;
}

function indexTopicObject(module, topicId, topic) {
  if (!topic || typeof topic !== 'object') return;
  const title = topic.title || topic.project_name || topic.projectName || topicId;

  const directFields = ['description', 'comic', 'deepDive', 'types', 'summary', 'tagline', 'subtitle'];
  for (const field of directFields) {
    if (typeof topic[field] === 'string' && topic[field].trim()) {
      for (const part of splitText(`${title}\n${topic[field]}`)) {
        chunks.push({
          module,
          moduleLabel: MODULE_LABELS[module] || module,
          topicId,
          title,
          section: field,
          text: part
        });
      }
    }
  }

  if (Array.isArray(topic.qa)) {
    topic.qa.forEach((item, i) => {
      const block = [
        item.q && `Question: ${item.q}`,
        item.answer && `Answer: ${item.answer}`,
        item.explanation && `Explanation: ${item.explanation}`,
        item.hint && `Hint: ${item.hint}`
      ].filter(Boolean).join('\n');
      if (block.length > 20) {
        chunks.push({
          module,
          moduleLabel: MODULE_LABELS[module] || module,
          topicId,
          title,
          section: `qa-${i + 1}`,
          text: `${title}\n${block}`
        });
      }
    });
  }

  const nested = collectStrings(topic.content || topic.syllabus || topic.project_info || topic.deep_dive, []);
  nested.forEach((text, i) => {
    for (const part of splitText(`${title}\n${text}`)) {
      chunks.push({
        module,
        moduleLabel: MODULE_LABELS[module] || module,
        topicId,
        title,
        section: `nested-${i + 1}`,
        text: part
      });
    }
  });
}

function walkJsonContent(module, data, topicId = null) {
  if (!data) return;
  if (data.id || data.title) {
    indexTopicObject(module, data.id || topicId, data);
    return;
  }
  if (typeof data === 'object' && !Array.isArray(data)) {
    for (const [key, val] of Object.entries(data)) {
      if (val && typeof val === 'object') {
        indexTopicObject(module, val.id || key, val);
      }
    }
  }
}

function loadJsonDir(dirPath, module) {
  if (!fs.existsSync(dirPath)) return;
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      loadJsonDir(full, entry.name);
    } else if (entry.name.endsWith('.json') && entry.name !== 'content-schema.json') {
      try {
        const data = JSON.parse(fs.readFileSync(full, 'utf8'));
        walkJsonContent(module, data, path.basename(entry.name, '.json'));
      } catch (e) {
        console.warn('RAG: skip JSON', full, e.message);
      }
    }
  }
}

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
}

const STOP_WORDS = new Set([
  'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our',
  'out', 'day', 'get', 'has', 'him', 'his', 'how', 'its', 'may', 'new', 'now', 'old', 'see', 'two',
  'way', 'who', 'boy', 'did', 'let', 'put', 'say', 'she', 'too', 'use', 'what', 'when', 'with', 'this',
  'that', 'from', 'have', 'will', 'your', 'about', 'into', 'than', 'them', 'then', 'they', 'been', 'also'
]);

function loadBonusTopics() {
  const filePath = path.join(ROOT, 'bonus-de-topics.js');
  if (!fs.existsSync(filePath)) return {};
  try {
    const src = fs.readFileSync(filePath, 'utf8');
    const sandbox = { module: { exports: {} } };
    const fn = new Function(
      'module',
      `${src}\nmodule.exports = typeof BonusDETopics !== 'undefined' ? BonusDETopics : {};`
    );
    fn(sandbox.module);
    return sandbox.module.exports || {};
  } catch (e) {
    console.warn('RAG: bonus topics load failed', e.message);
    return {};
  }
}

function buildIndex() {
  chunks = [];
  indexError = null;
  const bonusAll = loadBonusTopics();

  for (const spec of CONTENT_MODULES) {
    const filePath = path.join(ROOT, spec.file);
    if (!fs.existsSync(filePath)) continue;
    try {
      const data = loadJsContent(filePath, spec.varName);
      if (!data || typeof data !== 'object') continue;
      const bonusTopics = bonusAll[spec.varName] || {};
      const merged = { ...data, ...bonusTopics };
      for (const [topicId, topic] of Object.entries(merged)) {
        indexTopicObject(spec.module, topicId, topic);
      }
    } catch (e) {
      console.warn('RAG: failed to load', spec.file, e.message);
    }
  }

  loadJsonDir(path.join(ROOT, 'content'), 'content');

  // Platform / DE career basics (always searchable)
  chunks.push({
    module: 'general',
    moduleLabel: 'Morphed Tech',
    topicId: 'platform',
    title: 'Data Engineering Learning Path',
    section: 'overview',
    text: `Morphed Tech LMS teaches Data Engineering: SQL, Python, PySpark, AWS, Databricks, Git, and Real Projects. 
Students build interview-ready skills with comic stories, deep dives, coding challenges, and AI mock interviews (Rahul/Priya).
Typical Indian DE interview topics: SQL joins, window functions, ETL pipelines, Spark, S3, Airflow, STAR method for projects.
DFQ motto: Discipline, Focus, Quality.`
  });

  indexReady = true;
  console.log(`📚 RAG index ready: ${chunks.length} chunks`);
  return chunks.length;
}

function ensureIndex() {
  if (!indexReady) buildIndex();
  return indexReady;
}

function search(query, { modules = null, topK = 6 } = {}) {
  ensureIndex();
  const qTokens = tokenize(query);
  if (!qTokens.length) return [];

  const allowed = modules && modules.length ? new Set(modules) : null;

  const scored = [];
  for (const chunk of chunks) {
    if (allowed && !allowed.has(chunk.module)) continue;

    const hay = chunk.text.toLowerCase();
    const title = (chunk.title || '').toLowerCase();
    const topicId = (chunk.topicId || '').toLowerCase();
    let score = 0;

    for (const token of qTokens) {
      if (title.includes(token)) score += 4;
      if (topicId.includes(token)) score += 3;
      if (hay.includes(token)) {
        score += (hay.match(new RegExp(token, 'g')) || []).length;
      }
    }

    if (score > 0) {
      scored.push({ chunk, score });
    }
  }

  scored.sort((a, b) => b.score - a.score);

  const seen = new Set();
  const results = [];
  for (const { chunk } of scored) {
    const key = `${chunk.module}:${chunk.topicId}:${chunk.section}:${chunk.text.slice(0, 80)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    results.push(chunk);
    if (results.length >= topK) break;
  }
  return results;
}

function getStats() {
  ensureIndex();
  const byModule = {};
  for (const c of chunks) {
    byModule[c.module] = (byModule[c.module] || 0) + 1;
  }
  return { totalChunks: chunks.length, byModule, moduleLabels: MODULE_LABELS };
}

module.exports = {
  buildIndex,
  ensureIndex,
  search,
  getStats,
  MODULE_LABELS,
  get indexReady() { return indexReady; },
  get indexError() { return indexError; }
};
