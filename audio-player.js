// Audio Player Component for Multilingual TTS
// Supports English, Hinglish, and Marathi audio explanations

class AudioPlayer {
  constructor() {
    this.currentAudio = null;
    this.isPlaying = false;
    this.cache = new Map(); // Cache audio instances
  }

  // Play audio from URL or generate TTS
  async play(text, language, audioUrl = null) {
    // Stop current audio if playing
    this.stop();

    try {
      if (audioUrl) {
        // Use pre-recorded audio
        await this.playFromUrl(audioUrl);
      } else {
        // Generate TTS
        await this.playTTS(text, language);
      }
    } catch (error) {
      console.error('Audio playback error:', error);
      this.showError('Audio playback failed');
    }
  }

  async playFromUrl(url) {
    // Check cache
    if (this.cache.has(url)) {
      this.currentAudio = this.cache.get(url);
    } else {
      this.currentAudio = new Audio(url);
      this.cache.set(url, this.currentAudio);
    }

    this.currentAudio.play();
    this.isPlaying = true;

    this.currentAudio.onended = () => {
      this.isPlaying = false;
      this.notifyPlaybackEnd();
    };
  }

  async playTTS(text, language) {
    // Use Web Speech API for TTS
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set voice based on language
      utterance.lang = this.getLanguageCode(language);
      utterance.rate = 0.9; // Slightly slower for clarity
      utterance.pitch = 1.0;
      
      // Try to find appropriate voice
      const voices = speechSynthesis.getVoices();
      const voice = this.selectVoice(voices, language);
      if (voice) utterance.voice = voice;

      utterance.onstart = () => {
        this.isPlaying = true;
        this.notifyPlaybackStart();
      };

      utterance.onend = () => {
        this.isPlaying = false;
        this.notifyPlaybackEnd();
      };

      utterance.onerror = (error) => {
        console.error('TTS error:', error);
        this.isPlaying = false;
        this.showError('Text-to-speech failed');
      };

      speechSynthesis.speak(utterance);
    } else {
      this.showError('Text-to-speech not supported in this browser');
    }
  }

  stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }
    
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
    
    this.isPlaying = false;
    this.notifyPlaybackEnd();
  }

  pause() {
    if (this.currentAudio) {
      this.currentAudio.pause();
    }
    
    if ('speechSynthesis' in window) {
      speechSynthesis.pause();
    }
    
    this.isPlaying = false;
  }

  resume() {
    if (this.currentAudio) {
      this.currentAudio.play();
    }
    
    if ('speechSynthesis' in window) {
      speechSynthesis.resume();
    }
    
    this.isPlaying = true;
  }

  getLanguageCode(language) {
    const codes = {
      english: 'en-US',
      hinglish: 'hi-IN', // Use Hindi voice for Hinglish
      marathi: 'mr-IN'
    };
    return codes[language] || 'en-US';
  }

  selectVoice(voices, language) {
    const langCode = this.getLanguageCode(language);
    
    // Try to find exact match
    let voice = voices.find(v => v.lang === langCode);
    
    // Fallback to language family
    if (!voice) {
      const langFamily = langCode.split('-')[0];
      voice = voices.find(v => v.lang.startsWith(langFamily));
    }
    
    // Prefer Google voices if available
    if (!voice) {
      voice = voices.find(v => v.name.includes('Google') && v.lang.startsWith(langCode.split('-')[0]));
    }
    
    return voice;
  }

  notifyPlaybackStart() {
    window.dispatchEvent(new CustomEvent('audioPlaybackStart'));
  }

  notifyPlaybackEnd() {
    window.dispatchEvent(new CustomEvent('audioPlaybackEnd'));
  }

  showError(message) {
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 px-5 py-3 bg-red-500/90 text-white rounded-xl shadow-xl text-sm font-semibold z-50';
    toast.textContent = '🔇 ' + message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  // Preload voices (call on page load)
  static preloadVoices() {
    if ('speechSynthesis' in window) {
      // Trigger voice loading
      speechSynthesis.getVoices();
      
      // Some browsers need this event
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => {
          speechSynthesis.getVoices();
        };
      }
    }
  }
}

// Global instance
const audioPlayer = new AudioPlayer();

// Preload voices on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    AudioPlayer.preloadVoices();
  });
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AudioPlayer, audioPlayer };
}
