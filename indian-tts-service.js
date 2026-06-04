/**
 * Natural Indian English TTS — Microsoft Edge Neural voices (free, no API key)
 * Voices: en-IN-PrabhatNeural (male), en-IN-NeerjaNeural (female)
 */
const { EdgeTTS } = require('node-edge-tts');
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');

const VOICES = {
  rahul: {
    voice: 'en-IN-PrabhatNeural',
    lang: 'en-IN',
    label: 'Prabhat (Indian English, Male)'
  },
  priya: {
    voice: 'en-IN-NeerjaNeural',
    lang: 'en-IN',
    label: 'Neerja (Indian English, Female)'
  }
};

function cleanForSpeech(text) {
  if (!text) return '';
  return text
    .replace(/\*\*/g, '')
    .replace(/\[Candidate'?s Name\]/gi, '')
    .replace(/\[Your Name\]/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 2500);
}

async function synthesize(text, interviewerId = 'rahul', mode = 'interview') {
  const cleaned = cleanForSpeech(text);
  if (!cleaned) throw new Error('Empty text for speech');

  const profile = VOICES[interviewerId] || VOICES.rahul;
  const rate = mode === 'coach' ? '-10%' : '-5%';
  const pitch = mode === 'coach' ? '-2Hz' : '+0Hz';

  const tts = new EdgeTTS({
    voice: profile.voice,
    lang: profile.lang,
    rate,
    pitch,
    outputFormat: 'audio-24khz-48kbitrate-mono-mp3',
    timeout: 20000
  });

  const tmpFile = path.join(os.tmpdir(), `morphed-tts-${crypto.randomBytes(8).toString('hex')}.mp3`);
  try {
    await tts.ttsPromise(cleaned, tmpFile);
    const buffer = fs.readFileSync(tmpFile);
    if (!buffer.length) throw new Error('TTS produced empty audio');
    return buffer;
  } finally {
    fs.unlink(tmpFile, () => {});
  }
}

function getVoiceLabel(interviewerId) {
  return (VOICES[interviewerId] || VOICES.rahul).label;
}

module.exports = { synthesize, getVoiceLabel, VOICES };
