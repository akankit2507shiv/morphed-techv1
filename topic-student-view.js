/**
 * Student-friendly formatting for all module topic pages.
 * Improves readability without rewriting every content file.
 */
const TopicStudentView = (() => {
  const MODULE_TIPS = {
    sql: 'SQL rounds eliminate 60%+ of DE candidates — master one topic per day.',
    python: 'Python DE interviews focus on collections, ETL logic, and error handling — not algorithms.',
    pyspark: 'Explain transformations vs actions — interviewers love this distinction.',
    aws: 'Connect each AWS service to a pipeline stage: ingest → store → process → serve.',
    databricks: 'Delta Lake + Medallion (Bronze/Silver/Gold) is the #1 Databricks interview story.',
    git: 'Git questions test real teamwork — always mention branch → PR → merge flow.',
    projects: 'Use STAR: Situation, Task, Action, Result — with numbers (GB/day, % faster).'
  };

  function escapeHtml(s) {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function firstParagraph(text) {
    if (!text || typeof text !== 'string') return '';
    const chunk = text.replace(/\n+/g, ' ').trim();
    const sent = chunk.match(/[^.!?]+[.!?]+/);
    return sent ? sent[0].trim() : chunk.slice(0, 220);
  }

  function buildGuide(topic, moduleKey) {
    const custom = topic.studentGuide || {};
    const title = topic.title || topic.project_name || 'this topic';
    const qa0 = (topic.qa || topic.interactiveQA || [])[0];

    return {
      simple: custom.simple
        || firstParagraph(topic.description || topic.deepDive || topic.comic || topic.tagline)
        || `${title} is a core Data Engineering skill — learn the concept first, then practice on real examples.`,
      why: custom.why
        || `Companies like Flipkart, Swiggy, and Amazon India expect DE candidates to explain ${title} clearly in interviews and use it in pipelines.`,
      steps: custom.steps || [
        'Read the Comic story — understand the problem first',
        'Study Deep Dive — learn definitions + real company use cases',
        'Try Q&A — answer aloud before revealing solutions',
        'Complete Coding challenges — write code yourself',
        'Review Interview + Memory tabs — 60-second explanation ready'
      ],
      interviewTip: custom.interviewTip
        || (qa0 ? `Practice answering: "${qa0.q}"` : `Explain ${title} with one metric from your project (rows/day, latency, cost saved).`),
      mustRemember: custom.mustRemember || topic.memory || qa0?.memory || '',
      moduleTip: MODULE_TIPS[moduleKey] || ''
    };
  }

  function formatInline(line) {
    let s = escapeHtml(line);
    s = s.replace(/`([^`]+)`/g, '<code class="student-code">$1</code>');
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white">$1</strong>');
    return s;
  }

  function formatRichText(text) {
    if (!text || !String(text).trim()) {
      return '<p class="text-gray-400 italic">Content loading — check back soon or ask Study Bot.</p>';
    }

    const lines = String(text).split('\n');
    const parts = [];

    for (const raw of lines) {
      const line = raw.trim();
      if (!line) continue;
      if (line === '---' || line.startsWith('---')) {
        parts.push('<hr class="border-white/10 my-4">');
        continue;
      }
      if (/^[👉📌💡✅❌🎯🏢🔑⚡🎭📚]/.test(line) || /^Step \d/i.test(line)) {
        parts.push(`<div class="student-callout">${formatInline(line)}</div>`);
        continue;
      }
      if (/^\d+️⃣/.test(line) || /^\d+\.\s/.test(line)) {
        parts.push(`<div class="student-step">${formatInline(line)}</div>`);
        continue;
      }
      if (line.endsWith(':') && line.length < 80) {
        parts.push(`<h4 class="student-subhead">${formatInline(line)}</h4>`);
        continue;
      }
      parts.push(`<p class="student-para">${formatInline(line)}</p>`);
    }

    return parts.join('') || `<p class="student-para">${escapeHtml(text)}</p>`;
  }

  function renderGuideHtml(guide) {
    return `
      <div class="student-guide-inner">
        <div class="flex items-center gap-2 mb-4">
          <span class="text-2xl">🎓</span>
          <h2 class="text-lg font-bold text-white">Start Here — Student Learning Path</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div class="student-guide-box">
            <p class="text-xs font-bold text-accent uppercase tracking-wide mb-1">In simple words</p>
            <p class="text-sm text-gray-200 leading-relaxed">${escapeHtml(guide.simple)}</p>
          </div>
          <div class="student-guide-box">
            <p class="text-xs font-bold text-primary uppercase tracking-wide mb-1">Why DE interviews ask this</p>
            <p class="text-sm text-gray-200 leading-relaxed">${escapeHtml(guide.why)}</p>
          </div>
        </div>
        <div class="student-guide-box mb-4">
          <p class="text-xs font-bold text-secondary uppercase tracking-wide mb-2">Recommended order (30–45 min)</p>
          <ol class="space-y-1">${guide.steps.map(s => `<li class="text-sm text-gray-300">${escapeHtml(s)}</li>`).join('')}</ol>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="student-guide-box border-l-4 border-l-amber-400">
            <p class="text-xs font-bold text-amber-300 mb-1">🎤 Interview tip</p>
            <p class="text-sm text-gray-200">${escapeHtml(guide.interviewTip)}</p>
          </div>
          ${guide.mustRemember ? `
          <div class="student-guide-box border-l-4 border-l-lime-400">
            <p class="text-xs font-bold text-lime-300 mb-1">🧠 Must remember</p>
            <p class="text-sm text-gray-200">${escapeHtml(guide.mustRemember)}</p>
          </div>` : `
          <div class="student-guide-box border-l-4 border-l-cyan-400">
            <p class="text-xs font-bold text-cyan-300 mb-1">💡 Module tip</p>
            <p class="text-sm text-gray-200">${escapeHtml(guide.moduleTip)}</p>
          </div>`}
        </div>
      </div>`;
  }

  function injectStyles() {
    if (document.getElementById('topic-student-view-styles')) return;
    const style = document.createElement('style');
    style.id = 'topic-student-view-styles';
    style.textContent = `
      .student-guide-card {
        background: linear-gradient(135deg, rgba(124,60,255,0.12), rgba(0,212,255,0.08));
        border: 1px solid rgba(124,60,255,0.35);
        border-radius: 1rem;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .student-guide-box {
        background: rgba(0,0,0,0.25);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 0.75rem;
        padding: 1rem;
      }
      .student-callout {
        background: rgba(255,61,129,0.08);
        border-left: 3px solid #ff3d81;
        padding: 0.65rem 1rem;
        border-radius: 0 0.5rem 0.5rem 0;
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
        color: #e2e8f0;
        line-height: 1.55;
      }
      .student-step {
        padding: 0.35rem 0 0.35rem 0.5rem;
        font-size: 0.95rem;
        color: #cbd5e1;
        border-left: 2px solid rgba(0,212,255,0.4);
        margin-bottom: 0.35rem;
        padding-left: 0.75rem;
      }
      .student-subhead {
        font-weight: 700;
        color: #00d4ff;
        margin: 1rem 0 0.35rem;
        font-size: 0.95rem;
      }
      .student-para {
        margin-bottom: 0.65rem;
        line-height: 1.65;
        color: #d1d5db;
        font-size: 0.95rem;
      }
      .student-code {
        background: rgba(0,0,0,0.45);
        padding: 0.1rem 0.35rem;
        border-radius: 0.25rem;
        color: #86efac;
        font-family: ui-monospace, monospace;
        font-size: 0.85em;
      }
      .syllabus-student-banner {
        background: linear-gradient(135deg, rgba(255,61,129,0.1), rgba(124,60,255,0.12));
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 1rem;
        padding: 1.25rem 1.5rem;
        margin-bottom: 1.5rem;
      }
    `;
    document.head.appendChild(style);
  }

  function applyToTopicPage(topic, moduleKey) {
    injectStyles();
    const guide = buildGuide(topic, moduleKey);
    const panel = document.getElementById('studentGuidePanel');
    if (panel) panel.innerHTML = renderGuideHtml(guide);

    const fieldMap = [
      ['comicContent', topic.comic || topic.analogy?.story],
      ['deepDiveContent', topic.deepDive],
      ['typesContent', topic.types],
      ['comicContainer', null],
      ['deepDiveContainer', null]
    ];

    for (const [id, raw] of fieldMap) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (id === 'comicContainer' || id === 'deepDiveContainer') {
        el.querySelectorAll('p').forEach(p => {
          if (p.textContent && !p.querySelector('code, strong, div')) {
            p.innerHTML = formatRichText(p.textContent);
          }
        });
        continue;
      }
      const text = raw ?? el.textContent;
      if (text) el.innerHTML = formatRichText(text);
    }
  }

  function renderSyllabusBanner(moduleKey, title, topicCount) {
    injectStyles();
    const tips = {
      sql: { goal: 'Master SQL from zero to interview-ready in 15–20 sessions.', focus: 'Joins, GROUP BY, window functions, and real scenarios.' },
      python: { goal: 'Learn Python the way Data Engineers use it — not competitive programming.', focus: 'Collections, functions, file/ETL logic, exceptions.' },
      pyspark: { goal: 'Understand how Spark processes TB-scale data in clusters.', focus: 'DataFrame API, transformations vs actions, joins, optimization.' },
      aws: { goal: 'Map AWS services to a real DE pipeline end-to-end.', focus: 'S3, IAM, Glue, Lambda, Redshift, Athena.' },
      databricks: { goal: 'Learn lakehouse + Delta Lake — what companies use in 2025.', focus: 'Notebooks, Delta, Medallion architecture, Spark SQL.' },
      git: { goal: 'Git is non-negotiable for every DE team — learn the daily workflow.', focus: 'Commit, branch, merge, PR, resolve conflicts.' },
      projects: { goal: 'Build stories you can tell in interviews with metrics.', focus: 'ETL, incremental loads, SCD2, medallion, analytics.' }
    };
    const t = tips[moduleKey] || { goal: 'Learn step by step.', focus: 'Theory + practice + interview.' };
    return `
      <div class="syllabus-student-banner">
        <div class="flex flex-wrap items-start gap-4">
          <span class="text-3xl">🎓</span>
          <div class="flex-1 min-w-[200px]">
            <h2 class="text-lg font-bold text-white mb-1">How to study ${escapeHtml(title)}</h2>
            <p class="text-sm text-gray-300 mb-2">${escapeHtml(t.goal)}</p>
            <p class="text-xs text-accent"><strong>Focus areas:</strong> ${escapeHtml(t.focus)}</p>
            <p class="text-xs text-gray-500 mt-2">${topicCount} items · Open each topic → read <strong>Start Here</strong> box → follow tabs left to right</p>
          </div>
        </div>
      </div>`;
  }

  return { buildGuide, formatRichText, renderGuideHtml, applyToTopicPage, renderSyllabusBanner, injectStyles };
})();

if (typeof module !== 'undefined') module.exports = TopicStudentView;
