/**
 * RAG Study Bot — answers using Morphed Tech course content + Gemini
 */
const { GoogleGenerativeAI } = require('@google/generative-ai');
const ragIndex = require('./rag-index');

const MODULE_ACCESS_MAP = {
  sql_access: 'sql',
  python_access: 'python',
  pyspark_access: 'pyspark',
  aws_access: 'aws',
  databricks_access: 'databricks',
  git_access: 'git',
  projects_access: 'projects'
};

function getClient() {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error('GEMINI_API_KEY not configured on server');
  return new GoogleGenerativeAI(key);
}

function allowedModulesFromAccess(syllabusAccess, role) {
  if (role === 'admin') {
    return [...Object.values(MODULE_ACCESS_MAP), 'general', 'content'];
  }
  const modules = ['general'];
  if (!syllabusAccess) return modules;
  for (const [key, mod] of Object.entries(MODULE_ACCESS_MAP)) {
    if (syllabusAccess[key]) modules.push(mod);
  }
  return modules;
}

function formatSources(chunks) {
  return chunks.map(c => ({
    module: c.module,
    moduleLabel: c.moduleLabel,
    topicId: c.topicId,
    title: c.title,
    section: c.section
  }));
}

const FALLBACK_MODELS = [
  'gemini-2.0-flash',
  'gemini-1.5-flash',
  'gemini-2.5-flash'
];

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function parseRetrySeconds(message) {
  const m = (message || '').match(/retry in ([\d.]+)s/i);
  return m ? Math.min(Math.ceil(parseFloat(m[1])), 120) : 0;
}

function isQuotaError(err) {
  return /429|quota|rate limit|too many requests/i.test(err?.message || '');
}

async function withGeminiFallback(fn) {
  const preferred = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
  const models = [preferred, ...FALLBACK_MODELS.filter(m => m !== preferred)];
  let lastError;
  for (const modelName of models) {
    try {
      return await fn(modelName);
    } catch (e) {
      lastError = e;
      const retryable = /429|404|quota|not found|rate limit/i.test(e.message || '');
      if (!retryable) throw e;
      const waitSec = parseRetrySeconds(e.message);
      if (waitSec > 0 && waitSec <= 120) {
        await delay(waitSec * 1000);
        try {
          return await fn(modelName);
        } catch (e2) {
          lastError = e2;
        }
      }
    }
  }
  throw lastError;
}

function formatGeminiError(err) {
  if (isQuotaError(err)) {
    const usedLite = /flash-lite/i.test(process.env.GEMINI_MODEL || '');
    const hint = usedLite
      ? ' On Render, change GEMINI_MODEL from gemini-2.0-flash-lite to gemini-2.0-flash and redeploy.'
      : ' On Render: Environment → GEMINI_MODEL = gemini-2.0-flash. Free quota resets daily.';
    return 'Gemini free quota exceeded. Wait ~1 minute and retry, or switch model.' + hint + ' Usage: https://ai.dev/rate-limit';
  }
  return err?.message || 'AI request failed';
}

async function ask(question, { syllabusAccess, role = 'student', history = [] } = {}) {
  const trimmed = (question || '').trim();
  if (!trimmed) throw new Error('Question is required');
  if (trimmed.length > 2000) throw new Error('Question too long (max 2000 characters)');

  ragIndex.ensureIndex();
  const modules = allowedModulesFromAccess(syllabusAccess, role);
  let chunks = ragIndex.search(trimmed, { modules, topK: 4 });

  // If no module access, still search general + content JSON for helpful answers
  if (!chunks.length && modules.length <= 1) {
    chunks = ragIndex.search(trimmed, { modules: ['general', 'content'], topK: 3 });
  }

  let contextBlock = chunks.length
    ? chunks.map((c, i) =>
        `[Source ${i + 1} | ${c.moduleLabel} | ${c.title} (${c.topicId})]\n${c.text}`
      ).join('\n\n---\n\n')
    : 'No matching course material found for this student\'s unlocked modules.';

  if (contextBlock.length > 12000) {
    contextBlock = contextBlock.slice(0, 12000) + '\n...[truncated for API limits]';
  }

  const historyText = (history || [])
    .slice(-6)
    .map(m => `${m.role === 'user' ? 'Student' : 'Bot'}: ${m.content}`)
    .join('\n');

  const system = `You are Morphed Tech Study Bot — a friendly Data Engineering tutor for Indian students (Morphed Tech LMS).

RULES:
- Answer using the COURSE CONTEXT below first. Be practical and interview-focused.
- Use simple English. Indian company examples (Flipkart, Amazon India, Swiggy) when helpful.
- If context has the answer, cite the topic name (e.g. "From SQL Joins topic...").
- If context is insufficient, say what you know briefly and suggest which module/topic to study.
- Never invent specific code or facts not supported by context unless clearly marked as general DE knowledge.
- Keep answers concise (3–8 sentences) unless student asks for step-by-step.
- Do not mention you are an AI unless asked.`;

  const prompt = `${system}

COURSE CONTEXT:
${contextBlock}

${historyText ? `RECENT CHAT:\n${historyText}\n\n` : ''}STUDENT QUESTION:
${trimmed}

Answer helpfully:`;

  const answer = await withGeminiFallback(async (modelName) => {
    const model = getClient().getGenerativeModel({ model: modelName });
    const result = await model.generateContent(prompt);
    return result.response.text().trim();
  });

  return {
    answer,
    sources: formatSources(chunks),
    modulesSearched: modules
  };
}

module.exports = {
  ask,
  allowedModulesFromAccess,
  getStats: () => ragIndex.getStats(),
  formatGeminiError,
  isQuotaError
};
