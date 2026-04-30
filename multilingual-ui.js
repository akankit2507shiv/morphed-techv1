// UI Components for Multilingual Support
// Language Toggle and Audio Controls

// Language Toggle Component
function createLanguageToggle() {
  const container = document.createElement('div');
  container.className = 'language-toggle flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-1';
  container.id = 'languageToggle';

  LANGUAGE_CONFIG.supported.forEach(lang => {
    const btn = document.createElement('button');
    btn.className = `lang-btn px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
      languageManager.getCurrentLanguage() === lang 
        ? 'bg-primary text-white' 
        : 'text-gray-400 hover:text-white hover:bg-white/5'
    }`;
    btn.setAttribute('data-lang', lang);
    btn.innerHTML = `${LANGUAGE_CONFIG.icons[lang]} ${LANGUAGE_CONFIG.labels[lang]}`;
    
    btn.onclick = () => {
      languageManager.setLanguage(lang);
      updateLanguageToggleUI();
    };
    
    container.appendChild(btn);
  });

  return container;
}

// Update language toggle UI when language changes
function updateLanguageToggleUI() {
  const buttons = document.querySelectorAll('.lang-btn');
  const currentLang = languageManager.getCurrentLanguage();
  
  buttons.forEach(btn => {
    const lang = btn.getAttribute('data-lang');
    if (lang === currentLang) {
      btn.className = 'lang-btn px-3 py-1.5 rounded-md text-sm font-medium transition-all bg-primary text-white';
    } else {
      btn.className = 'lang-btn px-3 py-1.5 rounded-md text-sm font-medium transition-all text-gray-400 hover:text-white hover:bg-white/5';
    }
  });
}

// Audio Control Component
function createAudioControls(sectionId, contentObj) {
  const container = document.createElement('div');
  container.className = 'audio-controls flex items-center gap-2 mt-3 mb-2';
  container.id = `audio-${sectionId}`;

  const label = document.createElement('span');
  label.className = 'text-xs text-gray-400 mr-2';
  label.textContent = '🎧 Listen:';
  container.appendChild(label);

  LANGUAGE_CONFIG.supported.forEach(lang => {
    const btn = document.createElement('button');
    btn.className = 'audio-btn px-3 py-1.5 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-lg text-xs font-medium text-gray-300 hover:text-primary transition-all flex items-center gap-1.5';
    btn.innerHTML = `<span class="text-base">🔊</span> ${LANGUAGE_CONFIG.labels[lang]}`;
    
    btn.onclick = async () => {
      // Get content for this language
      const text = getContentForLanguage(contentObj, lang);
      
      if (!text) {
        showToast('⚠️ Content not available in this language');
        return;
      }

      // Check if audio URL exists
      const audioUrl = contentObj.audio && contentObj.audio[lang] ? contentObj.audio[lang] : null;
      
      // Show loading state
      btn.innerHTML = `<span class="animate-pulse">⏳</span> Playing...`;
      btn.disabled = true;
      
      try {
        await audioPlayer.play(text, lang, audioUrl);
      } catch (error) {
        console.error('Audio error:', error);
      }
      
      // Reset button after playback
      setTimeout(() => {
        btn.innerHTML = `<span class="text-base">🔊</span> ${LANGUAGE_CONFIG.labels[lang]}`;
        btn.disabled = false;
      }, 1000);
    };
    
    container.appendChild(btn);
  });

  // Stop button
  const stopBtn = document.createElement('button');
  stopBtn.className = 'audio-btn px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 rounded-lg text-xs font-medium text-red-300 hover:text-red-200 transition-all';
  stopBtn.innerHTML = '⏹️ Stop';
  stopBtn.onclick = () => {
    audioPlayer.stop();
  };
  container.appendChild(stopBtn);

  return container;
}

// Helper function to get content for specific language
function getContentForLanguage(contentObj, language) {
  if (!contentObj) return '';
  
  // Handle string content (old format)
  if (typeof contentObj === 'string') return contentObj;
  
  // Handle multilingual object
  if (contentObj[language]) {
    // If it's an object with simple/deep structure
    if (typeof contentObj[language] === 'object') {
      return contentObj[language].simple || contentObj[language].deep || '';
    }
    return contentObj[language];
  }
  
  // Fallback to English
  if (contentObj.english) {
    if (typeof contentObj.english === 'object') {
      return contentObj.english.simple || contentObj.english.deep || '';
    }
    return contentObj.english;
  }
  
  return '';
}

// Toast notification helper
function showToast(message, type = 'info') {
  const colors = {
    info: 'bg-blue-500/90',
    success: 'bg-green-500/90',
    warning: 'bg-yellow-500/90',
    error: 'bg-red-500/90'
  };
  
  const toast = document.createElement('div');
  toast.className = `fixed bottom-6 right-6 px-5 py-3 ${colors[type]} text-white rounded-xl shadow-xl text-sm font-semibold z-50 animate-slide-up`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Insert language toggle into header
function insertLanguageToggle(headerSelector = 'header .flex.items-center.gap-4') {
  const header = document.querySelector(headerSelector);
  if (header) {
    const toggle = createLanguageToggle();
    // Insert before logout button
    const logoutBtn = header.querySelector('button');
    if (logoutBtn) {
      header.insertBefore(toggle, logoutBtn);
    } else {
      header.appendChild(toggle);
    }
  }
}

// Listen for language changes and update content
window.addEventListener('languageChanged', (e) => {
  updateContentForLanguage(e.detail.language);
  showToast(`✅ Language changed to ${LANGUAGE_CONFIG.labels[e.detail.language]}`, 'success');
});

// Update all content on page when language changes
function updateContentForLanguage(language) {
  // This will be implemented per page based on content structure
  // Dispatch event for page-specific handlers
  window.dispatchEvent(new CustomEvent('updatePageContent', { detail: { language } }));
}

// Audio playback event listeners
window.addEventListener('audioPlaybackStart', () => {
  // Visual feedback when audio starts
  document.querySelectorAll('.audio-btn').forEach(btn => {
    if (!btn.disabled) {
      btn.style.opacity = '0.5';
    }
  });
});

window.addEventListener('audioPlaybackEnd', () => {
  // Reset visual feedback when audio ends
  document.querySelectorAll('.audio-btn').forEach(btn => {
    btn.style.opacity = '1';
  });
});

// CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-slide-up {
    animation: slide-up 0.3s ease-out;
  }
  
  .audio-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .language-toggle {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;
document.head.appendChild(style);

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createLanguageToggle,
    createAudioControls,
    insertLanguageToggle,
    updateLanguageToggleUI,
    showToast,
    getContentForLanguage
  };
}
