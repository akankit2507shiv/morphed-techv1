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
  const modelName = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
  const generationConfig = jsonMode ? { responseMimeType: 'application/json' } : {};
  return getClient().getGenerativeModel({ model: modelName, generationConfig });
}

const FALLBACK_MODELS = ['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-2.5-flash'];

async function withGeminiFallback(fn) {
  const preferred = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
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
- Do NOT say you are an AI.
- After ${MAX_QUESTIONS} questions total, say exactly: "Thank you. That concludes our interview. Please click End Interview to receive your detailed feedback report."
- Use Indian company context when helpful (Flipkart, Amazon, Swiggy, etc.) but keep it professional.
- Speak naturally like a real human interviewer — conversational Indian English (not American accent words).
- Use the candidate's first name when greeting (never write placeholders like [Candidate's Name]).
- After EVERY candidate answer you will give brief teacher-style coaching feedback, then the next question.`;
}

function toCoachHistory(messages) {
  const turns = messages
    .filter(m => ['interviewer', 'coach', 'student'].includes(m.role))
    .map(m => ({
      role: m.role === 'student' ? 'user' : 'model',
      text: m.role === 'coach' ? `[Coach feedback] ${m.content}` : m.content
    }));

  // Gemini requires alternating roles; merge consecutive same-role turns
  const merged = [];
  for (const turn of turns) {
    const last = merged[merged.length - 1];
    if (last && last.role === turn.role) {
      last.text += '\n\n' + turn.text;
    } else {
      merged.push({ role: turn.role, text: turn.text });
    }
  }

  // History must start with 'user', not 'model'
  if (merged.length && merged[0].role === 'model') {
    merged.unshift({ role: 'user', text: '[Mock interview session started.]' });
  }

  return merged.map(m => ({ role: m.role, parts: [{ text: m.text }] }));
}

function firstName(fullName) {
  if (!fullName || typeof fullName !== 'string') return 'there';
  return fullName.trim().split(/\s+/)[0];
}

async function generateFirstQuestion(interviewer, experienceLevel, interviewType, studentName) {
  const name = firstName(studentName);
  const system = buildSystemPrompt(interviewer, experienceLevel, interviewType);
  return withGeminiFallback(async (modelName) => {
    const model = getClient().getGenerativeModel({ model: modelName, systemInstruction: system });
    const chat = model.startChat({ history: [] });
    const result = await chat.sendMessage(
      `Begin the mock interview now. Greet ${name} warmly in natural Indian English (one short sentence), then ask your first interview question only. Speak like a real Bangalore/Mumbai office interviewer — not robotic.`
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
  const isLast = qCount >= MAX_QUESTIONS;

  if (isLast) {
    return {
      teacher_feedback: 'Good effort today. Click End Interview below to get your full score report with detailed improvement areas.',
      content: 'Thank you. That concludes our interview. Please click End Interview to receive your detailed feedback report.',
      done: true
    };
  }

  const persona = INTERVIEWERS[session.interviewer];
  const system = buildSystemPrompt(session.interviewer, session.experience_level, session.interview_type);
  const history = toCoachHistory(messages.slice(0, -1));

  const prompt = `The candidate just answered:
"""
${studentMsg.content}
"""

You are ${persona.name}, acting as both interviewer AND supportive coach (like a teacher in India).

Step 1 — teacher_feedback (2-4 sentences, spoken naturally):
- Start with one thing they did well (if any)
- Clearly say what to improve in THIS answer (missing metrics, vague tools, no STAR structure, weak SQL, etc.)
- Give one concrete tip: what to say next time

Step 2 — next_question: Ask ONE new interview question only (short, realistic Indian DE interview style).

Return ONLY valid JSON:
{
  "teacher_feedback": "...",
  "next_question": "...",
  "done": false
}`;

  const raw = await withGeminiFallback(async (modelName) => {
    const model = getClient().getGenerativeModel({
      model: modelName,
      systemInstruction: system,
      generationConfig: { responseMimeType: 'application/json' }
    });
    const chat = model.startChat({ history });
    const result = await chat.sendMessage(prompt);
    return result.response.text();
  });

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    const match = raw.match(/\{[\s\S]*\}/);
    parsed = match ? JSON.parse(match[0]) : { teacher_feedback: 'Focus on adding metrics and your exact role.', next_question: raw, done: false };
  }

  const nextQ = (parsed.next_question || '').trim();
  const done = parsed.done === true || nextQ.toLowerCase().includes('end interview');

  return {
    teacher_feedback: (parsed.teacher_feedback || 'Try to add numbers, tools, and your personal contribution.').trim(),
    content: nextQ || 'Tell me about another data engineering project you worked on.',
    done
  };
}

async function generateFeedback(session, studentName) {
  const transcript = (session.messages || [])
    .map(m => {
      const label = m.role === 'interviewer' ? 'Interviewer' : m.role === 'coach' ? 'Coach' : 'Candidate';
      return `${label}: ${m.content}`;
    })
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

async function transcribeAudio(buffer, mimeType = 'audio/webm') {
  if (!buffer?.length) throw new Error('Empty audio recording');
  const safeMime = mimeType && mimeType.startsWith('audio/') ? mimeType.split(';')[0] : 'audio/webm';

  return withGeminiFallback(async (modelName) => {
    const model = getClient().getGenerativeModel({ model: modelName });
    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: safeMime,
          data: Buffer.from(buffer).toString('base64')
        }
      },
      {
        text: 'Transcribe this interview answer to English text. The speaker may have an Indian accent. Return ONLY the spoken words — no labels, quotes, or commentary.'
      }
    ]);
    return result.response.text().trim().replace(/^["']|["']$/g, '');
  });
}

module.exports = {
  INTERVIEWERS,
  INTERVIEW_TYPES,
  MAX_QUESTIONS,
  generateFirstQuestion,
  generateNextQuestion,
  generateFeedback,
  transcribeAudio
};
