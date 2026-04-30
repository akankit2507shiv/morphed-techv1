// Language Configuration System
// Centralized language management for multilingual support

const LANGUAGE_CONFIG = {
  supported: ['english', 'hinglish', 'marathi'],
  default: 'hinglish',
  labels: {
    english: 'English',
    hinglish: 'Hinglish',
    marathi: 'मराठी'
  },
  icons: {
    english: '🇬🇧',
    hinglish: '🇮🇳',
    marathi: '🚩'
  }
};

// Language Manager Class
class LanguageManager {
  constructor() {
    this.currentLanguage = this.loadLanguagePreference();
  }

  loadLanguagePreference() {
    return localStorage.getItem('preferredLanguage') || LANGUAGE_CONFIG.default;
  }

  setLanguage(lang) {
    if (LANGUAGE_CONFIG.supported.includes(lang)) {
      this.currentLanguage = lang;
      localStorage.setItem('preferredLanguage', lang);
      this.notifyLanguageChange();
      return true;
    }
    return false;
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  notifyLanguageChange() {
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: this.currentLanguage } 
    }));
  }

  getContent(contentObj) {
    if (!contentObj) return '';
    
    // Support both old and new structure
    if (typeof contentObj === 'string') return contentObj;
    
    // New multilingual structure
    if (contentObj[this.currentLanguage]) {
      return contentObj[this.currentLanguage];
    }
    
    // Fallback to English
    return contentObj.english || contentObj.en || '';
  }
}

// Global instance
const languageManager = new LanguageManager();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LANGUAGE_CONFIG, LanguageManager, languageManager };
}
