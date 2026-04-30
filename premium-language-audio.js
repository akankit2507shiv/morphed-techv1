// Premium Multilingual & Audio System - FULLY FUNCTIONAL
// Dropdowns work, language changes content, audio plays

(function() {
  'use strict';

  console.log('🚀 Loading Premium System...');

  class PremiumSystem {
    constructor() {
      this.currentLanguage = localStorage.getItem('preferredLanguage') || 'hinglish';
      this.isPlaying = false;
      this.currentUtterance = null;
      
      this.languages = {
        english: { label: 'English', icon: '🇬🇧', code: 'en-US', rate: 0.9 },
        hinglish: { label: 'Hinglish', icon: '🇮🇳', code: 'hi-IN', rate: 0.85 },
        marathi: { label: 'मराठी', icon: '🚩', code: 'mr-IN', rate: 0.85 }
      };
      
      // Wait for DOM
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.initialize());
      } else {
        this.initialize();
      }
    }

    initialize() {
      console.log('✨ Initializing Premium System...');
      this.loadVoices();
      this.createUI();
      this.setupEventListeners();
      console.log('✅ Premium System Ready!');
    }

    loadVoices() {
      if ('speechSynthesis' in window) {
        // Load voices immediately
        const voices = speechSynthesis.getVoices();
        console.log('🔊 Initial voices loaded:', voices.length);
        
        // Also listen for voices changed event
        speechSynthesis.onvoiceschanged = () => {
          const updatedVoices = speechSynthesis.getVoices();
          console.log('🔊 Voices updated:', updatedVoices.length);
          
          // Log available voices for debugging
          updatedVoices.forEach((voice, i) => {
            if (i < 5) { // Show first 5 voices
              console.log(`  ${i + 1}. ${voice.name} (${voice.lang})`);
            }
          });
        };
        
        // Trigger voice loading
        speechSynthesis.getVoices();
      } else {
        console.error('❌ Speech Synthesis not supported in this browser');
      }
    }

    // ═══════════════════════════════════════════════════════════
    // CREATE UI
    // ═══════════════════════════════════════════════════════════

    createUI() {
      // Remove existing
      const existing = document.getElementById('premiumControls');
      if (existing) existing.remove();

      // Create HTML
      const html = `
        <style>
          #premiumControls {
            position: fixed;
            top: 5rem;
            right: 1.5rem;
            z-index: 99999;
            display: flex;
            gap: 0.75rem;
            font-family: 'Inter', sans-serif;
          }

          .premium-wrapper {
            position: relative;
          }

          .premium-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.625rem 1rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 0.75rem;
            color: white;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            user-select: none;
          }

          .premium-btn:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(124, 58, 237, 0.5);
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(124, 58, 237, 0.3);
          }

          .premium-btn:active {
            transform: translateY(0);
          }

          .premium-menu {
            position: absolute;
            top: calc(100% + 0.5rem);
            right: 0;
            min-width: 220px;
            background: rgba(30, 27, 75, 0.98);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 0.75rem;
            padding: 0.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            display: none;
            z-index: 100000;
          }

          .premium-menu.active {
            display: block;
            animation: slideDown 0.2s ease-out;
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .menu-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.625rem 0.875rem;
            border-radius: 0.5rem;
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.875rem;
            cursor: pointer;
            transition: all 0.15s;
            user-select: none;
          }

          .menu-item:hover {
            background: rgba(124, 58, 237, 0.25);
            color: white;
          }

          .menu-item:active {
            background: rgba(124, 58, 237, 0.4);
          }

          .menu-item .check {
            margin-left: auto;
            color: #10b981;
            font-weight: bold;
            font-size: 1rem;
          }

          .menu-divider {
            height: 1px;
            background: rgba(255, 255, 255, 0.1);
            margin: 0.5rem 0;
          }

          .menu-label {
            padding: 0.5rem 0.875rem 0.25rem;
            font-size: 0.7rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.5);
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .toast {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            padding: 0.875rem 1.25rem;
            background: rgba(30, 27, 75, 0.98);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(124, 58, 237, 0.4);
            border-radius: 0.75rem;
            color: white;
            font-size: 0.875rem;
            font-weight: 500;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            z-index: 100001;
            animation: slideUp 0.3s ease-out;
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            #premiumControls {
              top: 4.5rem;
              right: 1rem;
              gap: 0.5rem;
            }
            .premium-btn span:nth-child(2) {
              display: none;
            }
          }
        </style>

        <div id="premiumControls">
          <!-- Language Control -->
          <div class="premium-wrapper">
            <button class="premium-btn" id="langBtn">
              <span>🌐</span>
              <span>Language</span>
              <span style="font-size: 0.7rem; opacity: 0.7;">▼</span>
            </button>
            <div class="premium-menu" id="langMenu">
              <div class="menu-item" data-action="lang" data-value="english">
                <span>🇬🇧</span>
                <span>English</span>
                <span class="check" id="check-english"></span>
              </div>
              <div class="menu-item" data-action="lang" data-value="hinglish">
                <span>🇮🇳</span>
                <span>Hinglish</span>
                <span class="check" id="check-hinglish">✓</span>
              </div>
              <div class="menu-item" data-action="lang" data-value="marathi">
                <span>🚩</span>
                <span>मराठी</span>
                <span class="check" id="check-marathi"></span>
              </div>
            </div>
          </div>

          <!-- Audio Control -->
          <div class="premium-wrapper">
            <button class="premium-btn" id="audioBtn">
              <span>🎧</span>
              <span>Audio</span>
              <span style="font-size: 0.7rem; opacity: 0.7;">▼</span>
            </button>
            <div class="premium-menu" id="audioMenu">
              <div class="menu-item" id="playItem">
                <span>▶️</span>
                <span>Play Section</span>
              </div>
              <div class="menu-item" id="pauseItem" style="display: none;">
                <span>⏸️</span>
                <span>Pause</span>
              </div>
              <div class="menu-item" id="stopItem" style="display: none;">
                <span>⏹️</span>
                <span>Stop</span>
              </div>
              <div class="menu-divider"></div>
              <div class="menu-label">Voice Language</div>
              <div class="menu-item" data-action="voice" data-value="english">
                <span>🔊</span>
                <span>English</span>
                <span class="check" id="voice-english"></span>
              </div>
              <div class="menu-item" data-action="voice" data-value="hinglish">
                <span>🔊</span>
                <span>Hinglish</span>
                <span class="check" id="voice-hinglish">✓</span>
              </div>
              <div class="menu-item" data-action="voice" data-value="marathi">
                <span>🔊</span>
                <span>मराठी</span>
                <span class="check" id="voice-marathi"></span>
              </div>
              <div class="menu-divider"></div>
              <div class="menu-item" id="testVoice" style="background: rgba(124, 58, 237, 0.15);">
                <span>🎵</span>
                <span>Test Voice</span>
              </div>
            </div>
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', html);
      this.updateCheckmarks();
    }

    // ═══════════════════════════════════════════════════════════
    // EVENT LISTENERS
    // ═══════════════════════════════════════════════════════════

    setupEventListeners() {
      // Language button
      const langBtn = document.getElementById('langBtn');
      const langMenu = document.getElementById('langMenu');
      
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('🌐 Language button clicked');
        this.toggleMenu(langMenu);
      });

      // Audio button
      const audioBtn = document.getElementById('audioBtn');
      const audioMenu = document.getElementById('audioMenu');
      
      audioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('🎧 Audio button clicked');
        this.toggleMenu(audioMenu);
      });

      // Language items
      document.querySelectorAll('[data-action="lang"]').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          const lang = item.dataset.value;
          console.log('🌐 Changing language to:', lang);
          this.changeLanguage(lang);
          this.closeAllMenus();
        });
      });

      // Voice items
      document.querySelectorAll('[data-action="voice"]').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          const voice = item.dataset.value;
          console.log('🔊 Changing voice to:', voice);
          this.changeLanguage(voice);
          this.updateCheckmarks();
        });
      });

      // Play
      document.getElementById('playItem').addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('▶️ Play clicked');
        this.playAudio();
        this.closeAllMenus();
      });

      // Pause
      document.getElementById('pauseItem').addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('⏸️ Pause clicked');
        this.pauseAudio();
      });

      // Stop
      document.getElementById('stopItem').addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('⏹️ Stop clicked');
        this.stopAudio();
        this.closeAllMenus();
      });

      // Test Voice
      document.getElementById('testVoice').addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('🎵 Test voice clicked');
        this.testVoice();
      });

      // Close menus when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('#premiumControls')) {
          this.closeAllMenus();
        }
      });

      // Stop audio when changing tabs
      setTimeout(() => {
        document.querySelectorAll('.tab-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            if (this.isPlaying) this.stopAudio();
          });
        });
      }, 500);
    }

    toggleMenu(menu) {
      const isActive = menu.classList.contains('active');
      this.closeAllMenus();
      if (!isActive) {
        menu.classList.add('active');
        console.log('✅ Menu opened');
      }
    }

    closeAllMenus() {
      document.querySelectorAll('.premium-menu').forEach(m => {
        m.classList.remove('active');
      });
    }

    // ═══════════════════════════════════════════════════════════
    // LANGUAGE MANAGEMENT
    // ═══════════════════════════════════════════════════════════

    changeLanguage(lang) {
      this.currentLanguage = lang;
      localStorage.setItem('preferredLanguage', lang);
      this.updateCheckmarks();
      this.updatePageContent();
      this.showToast(`Language: ${this.languages[lang].label}`);
    }

    updateCheckmarks() {
      // Language checkmarks
      ['english', 'hinglish', 'marathi'].forEach(lang => {
        const check = document.getElementById(`check-${lang}`);
        if (check) {
          check.textContent = lang === this.currentLanguage ? '✓' : '';
        }
      });

      // Voice checkmarks
      ['english', 'hinglish', 'marathi'].forEach(lang => {
        const check = document.getElementById(`voice-${lang}`);
        if (check) {
          check.textContent = lang === this.currentLanguage ? '✓' : '';
        }
      });
    }

    updatePageContent() {
      console.log('📝 Updating content to:', this.currentLanguage);
      
      // Get topic data
      if (typeof topic === 'undefined') {
        console.warn('⚠️ Topic not found');
        return;
      }

      // Update each section
      const sections = {
        comicContent: topic.comic,
        deepDiveContent: topic.deepDive,
        typesContent: topic.types,
        memoryContent: topic.memory,
        interviewContent: topic.interview,
        revisionContent: topic.revision
      };

      Object.entries(sections).forEach(([id, content]) => {
        const element = document.getElementById(id);
        if (element && content) {
          const text = this.getContent(content);
          element.textContent = text;
          console.log(`✅ Updated ${id}`);
        }
      });

      // Dispatch event for custom handlers
      window.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language: this.currentLanguage }
      }));
    }

    getContent(contentObj) {
      if (!contentObj) return '';
      if (typeof contentObj === 'string') return contentObj;
      
      // Try current language
      let content = contentObj[this.currentLanguage];
      
      // Fallback to English
      if (!content) content = contentObj.english;
      
      // If still object, get nested content
      if (content && typeof content === 'object') {
        return content.simple || content.explanation || content.deep || '';
      }
      
      return content || '';
    }

    // ═══════════════════════════════════════════════════════════
    // AUDIO PLAYBACK
    // ═══════════════════════════════════════════════════════════

    playAudio() {
      const activePanel = document.querySelector('.tab-panel.active');
      if (!activePanel) {
        this.showToast('No content visible');
        return;
      }

      const contentEl = activePanel.querySelector('[id$="Content"]');
      if (!contentEl) {
        this.showToast('No content found');
        return;
      }

      let text = contentEl.textContent || '';
      text = this.cleanTextForSpeech(text);

      if (!text || text.length < 10) {
        this.showToast('No text to read');
        return;
      }

      console.log('🔊 Playing audio:', text.substring(0, 50) + '...');
      this.speak(text);
    }

    cleanTextForSpeech(text) {
      text = text.trim();
      text = text.replace(/```[\s\S]*?```/g, '');
      text = text.replace(/`[^`]+`/g, '');
      text = text.replace(/\./g, '... ');
      text = text.replace(/,/g, ', ');
      text = text.replace(/[→←↑↓✓✗✅❌🎯🔗💡]/g, '');
      text = text.replace(/\s+/g, ' ');
      return text.trim();
    }

    speak(text) {
      if (!('speechSynthesis' in window)) {
        this.showToast('Speech not supported');
        return;
      }

      this.stopAudio();

      // Ensure voices are loaded
      const voices = speechSynthesis.getVoices();
      console.log('🎤 Available voices:', voices.length);
      
      if (voices.length === 0) {
        // Voices not loaded yet, wait and retry
        console.log('⏳ Waiting for voices to load...');
        setTimeout(() => this.speak(text), 100);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      const config = this.languages[this.currentLanguage];
      
      utterance.lang = config.code;
      utterance.rate = config.rate;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      // Select best voice for language
      const langCode = config.code.split('-')[0];
      
      // Try to find Google voice first (best quality)
      let voice = voices.find(v => 
        v.name.includes('Google') && v.lang.startsWith(langCode)
      );
      
      // Fallback to any voice matching language
      if (!voice) {
        voice = voices.find(v => v.lang.startsWith(langCode));
      }
      
      // Fallback to any voice with similar language
      if (!voice) {
        voice = voices.find(v => v.lang.includes(langCode));
      }
      
      // Last resort: use default voice
      if (!voice) {
        voice = voices[0];
      }
      
      if (voice) {
        utterance.voice = voice;
        console.log('🎤 Using voice:', voice.name, '|', voice.lang);
      } else {
        console.warn('⚠️ No voice found, using default');
      }

      utterance.onstart = () => {
        this.isPlaying = true;
        this.updateAudioButtons();
        this.showToast('🔊 Playing...');
        console.log('▶️ Audio started');
      };

      utterance.onend = () => {
        this.isPlaying = false;
        this.updateAudioButtons();
        console.log('✅ Audio finished');
      };

      utterance.onerror = (e) => {
        console.error('❌ Speech error:', e.error, e);
        this.isPlaying = false;
        this.updateAudioButtons();
        this.showToast('❌ Audio failed: ' + e.error);
      };

      this.currentUtterance = utterance;
      
      // Start speaking
      try {
        speechSynthesis.speak(utterance);
        console.log('🔊 Speech synthesis started');
      } catch (error) {
        console.error('❌ Failed to start speech:', error);
        this.showToast('Failed to play audio');
      }
    }

    pauseAudio() {
      if ('speechSynthesis' in window && this.isPlaying) {
        speechSynthesis.pause();
        this.isPlaying = false;
        this.updateAudioButtons();
        this.showToast('Paused');
      }
    }

    stopAudio() {
      if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        this.isPlaying = false;
        this.currentUtterance = null;
        this.updateAudioButtons();
      }
    }

    testVoice() {
      const testMessages = {
        english: 'Hello! This is a test of the English voice. SQL Joins combine data from multiple tables.',
        hinglish: 'Namaste! Yeh English aur Hindi mix voice ka test hai. SQL Joins multiple tables ko combine karta hai.',
        marathi: 'नमस्कार! ही मराठी voice ची चाचणी आहे. SQL Joins अनेक tables ला एकत्र करते.'
      };

      const message = testMessages[this.currentLanguage];
      console.log('🎵 Testing voice with:', message);
      this.speak(message);
    }

    updateAudioButtons() {
      const play = document.getElementById('playItem');
      const pause = document.getElementById('pauseItem');
      const stop = document.getElementById('stopItem');

      if (this.isPlaying) {
        play.style.display = 'none';
        pause.style.display = 'flex';
        stop.style.display = 'flex';
      } else {
        play.style.display = 'flex';
        pause.style.display = 'none';
        stop.style.display = 'none';
      }
    }

    // ═══════════════════════════════════════════════════════════
    // NOTIFICATIONS
    // ═══════════════════════════════════════════════════════════

    showToast(message) {
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = message;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 300);
      }, 2000);
    }
  }

  // Initialize
  window.premiumSystem = new PremiumSystem();

})();
