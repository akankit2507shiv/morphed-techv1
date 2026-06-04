/**
 * AI Mock Interview — Google Gemini (free tier)
 * Models: gemini-2.0-flash | gemini-1.5-flash (set GEMINI_MODEL in .env)
 */
const { GoogleGenerativeAI } = require('@google/generative-ai');

const MAX_QUESTIONS = 7;

const INTERVIEWERS = {
  rahul: {
    id: 'rahul',
    name: 'Rahul Sharma',
    title: 'Data Engineering Manager',
    company: 'Amazon',
    avatar: '👨‍💼',
    style: 'Strict but fair. Focuses on SQL depth, pipeline design, and measurable outcomes.'
  },
  priya: {
    id: 'priya',
    name: 'Priya Mehta',
    title: 'Senior Data Engineer',
    company: 'Flipkart',
    avatar: '👩‍💼',
    style: 'Professional and warm. Probes project stories, ownership, and real-world trade-offs.'
  }
};

const INTERVIEW_TYPES = {
  full: 'Full Data Engineering round (intro, project, SQL, Python, scenario, behavioral)',
  sql: 'SQL-heavy round (joins, window functions, optimization, live query thinking)',
  python: 'Python-heavy round (collections, ETL logic, error handling, coding mindset)',
  project: 'Project deep-dive round (architecture, your role, challenges, metrics, impact)'
};

function getClient() {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error('GEMINI_API_KEY not configured on server');
  return new GoogleGenerativeAI(key);
}

function getModel(jsonMode = false) {
  const modelName = process.env.GEMINI_MODEL || 'gemini-2.0-flash-lite';
  const generationConfig = jsonMode ? { responseMimeType: 'application/json' } : {};
  return getClient().getGenerativeModel({ model: modelName, generationConfig });
}

const FALLBACK_MODELS = ['gemini-2.0-flash-lite', 'gemini-2.0-flash', 'gemini-2.5-flash'];

async function withGeminiFallback(fn) {
  const preferred = process.env.GEMINI_MODEL || 'gemini-2.0-flash-lite';
  const models = [preferred, ...FALLBACK_MODELS.filter(m => m !== preferred)];
  let lastError;
  for (const modelName of models) {
    try {
      return await fn(modelName);
    } catch (e) {
      lastError = e;
      const retryable = /429|404|quota|not found/i.test(e.message || '');
      if (!retryable) throw e;
    }
  }
  throw lastError;
}

function buildSystemPrompt(interviewer, experienceLevel, interviewType) {
  const persona = INTERVIEWERS[interviewer];
  const typeDesc = INTERVIEW_TYPES[interviewType] || INTERVIEW_TYPES.full;
  return `You are ${persona.name}, ${persona.title} at ${persona.company}, conducting a realistic Data Engineering job interview in India.

Your style: ${persona.style}
Candidate level: ${experienceLevel}
Interview focus: ${typeDesc}

RULES:
- Ask ONE question at a time. Keep questions short (1-3 sentences), like a real interviewer.
- Listen to the candidate's last answer and ask a relevant follow-up when needed.
- Mix: introduction, project deep-dive, SQL, Python, scenario, and behavioral (STAR).
- Do NOT give answers, hints, or feedback during the interview.
- Do NOT say you are an AI.
- After ${MAX_QUESTIONS} questions total, say exactly: "Thank you. That concludes our interview. Please click End Interview to receive your detailed feedback report."
- Use Indian company context when helpful (Flipkart, Amazon, Swiggy, etc.) but keep it professional.`;
}

function toGeminiHistory(messages) {
  return messages
    .filter(m => m.role === 'interviewer' || m.role === 'student')
    .map(m => ({
      role: m.role === 'interviewer' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));
}

async function generateFirstQuestion(interviewer, experienceLevel, interviewType) {
  const system = buildSystemPrompt(interviewer, experienceLevel, interviewType);
  return withGeminiFallback(async (modelName) => {
    const model = getClient().getGenerativeModel({ model: modelName, systemInstruction: system });
    const chat = model.startChat({ history: [] });
    const result = await chat.sendMessage(
      'Begin the mock interview now. Greet briefly (one line) then ask your first question only.'
    );
    return result.response.text().trim();
  });
}

async function generateNextQuestion(session) {
  const messages = session.messages || [];
  const studentMsg = messages[messages.length - 1];
  if (!studentMsg || studentMsg.role !== 'student') {
    throw new Error('Expected student message');
  }

  const qCount = messages.filter(m => m.role === 'interviewer').length;
  if (qCount >= MAX_QUESTIONS) {
    return {
      content: 'Thank you. That concludes our interview. Please click **End Interview** to receive your detailed feedback report.',
      done: true
    };
  }

  const system = buildSystemPrompt(session.interviewer, session.experience_level, session.interview_type);
  const history = toGeminiHistory(messages.slice(0, -1));

  const text = await withGeminiFallback(async (modelName) => {
    const model = getClient().getGenerativeModel({ model: modelName, systemInstruction: system });
    const chat = model.startChat({ history });
    const result = await chat.sendMessage(studentMsg.content);
    return result.response.text().trim();
  });

  const done = qCount + 1 >= MAX_QUESTIONS || text.includes('End Interview');
  return { content: text, done };
}

async function generateFeedback(session, studentName) {
  const transcript = (session.messages || [])
    .map(m => `${m.role === 'interviewer' ? 'Interviewer' : 'Candidate'}: ${m.content}`)
    .join('\n\n');

  const prompt = `Analyze this Data Engineering mock interview transcript for candidate "${studentName || 'Student'}".

TRANSCRIPT:
${transcript}

Return ONLY valid JSON with this exact structure:
{
  "overall_score": <number 0-100>,
  "verdict": "<Not Ready|Needs Practice|Interview Ready>",
  "scores": {
    "communication": <0-100>,
    "technical_depth": <0-100>,
    "project_story": <0-100>,
    "sql": <0-100>,
    "python": <0-100>,
    "confidence": <0-100>,
    "structure": <0-100>
  },
  "strengths": ["...", "...", "..."],
  "weaknesses": ["...", "...", "..."],
  "what_went_wrong": ["specific mistake 1", "specific mistake 2", "..."],
  "where_to_scale": [
    {"topic": "...", "reason": "...", "link": "student-dashboard.html or sql-module.html or python-syllabus.html etc"}
  ],
  "action_items_7_days": ["...", "...", "...", "...", "..."]
}`;

  const raw = await withGeminiFallback(async (modelName) => {
    const model = getClient().getGenerativeModel({
      model: modelName,
      generationConfig: { responseMimeType: 'application/json' }
    });
    const result = await model.generateContent(prompt);
    return result.response.text();
  });

  try {
    return JSON.parse(raw);
  } catch (e) {
    const match = raw.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error('Failed to parse AI feedback');
  }
}

module.exports = {
  INTERVIEWERS,
  INTERVIEW_TYPES,
  MAX_QUESTIONS,
  generateFirstQuestion,
  generateNextQuestion,
  generateFeedback
};
