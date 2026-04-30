// Quick Integration Script for Multilingual System
// Add this script to any topic page to enable multilingual and audio features

(function() {
  'use strict';
  
  // Configuration
  const CONFIG = {
    enableLanguageToggle: true,
    enableAudioControls: true,
    sectionsWithAudio: ['comic', 'deepDive', 'memory', 'interview', 'revision'],
    autoInsertLanguageToggle: true,
    headerSelector: 'header .flex.items-center.gap-4'
  };

  // Wait for DOM and all scripts to load
  function init() {
    if (typeof languageManager === 'undefined' || typeof audioPlayer === 'undefined') {
      console.error('Multilingual system not loaded. Please include language-config.js and audio-player.js');
      return;
    }

    // Insert language toggle
    if (CONFIG.enableLanguageToggle && CONFIG.autoInsertLanguageToggle) {
      insertLanguageToggle(CONFIG.headerSelector);
    }

    // Add audio controls to sections
    if (CONFIG.enableAudioControls) {
      addAudioControlsToSections();
    }

    // Set initial content based on saved language preference
    const currentLang = languageManager.getCurrentLanguage();
    updatePageContent(currentLang);

    // Listen for language changes
    window.addEventListener('languageChanged', (e) => {
      updatePageContent(e.detail.language);
    });

    console.log('✅ Multilingual system initialized');
  }

  // Add audio controls to all configured sections
  function addAudioControlsToSections() {
    if (typeof topic === 'undefined') {
      console.warn('Topic object not found');
      return;
    }

    CONFIG.sectionsWithAudio.forEach(sectionId => {
      const contentElement = document.getElementById(`${sectionId}Content`);
      if (!contentElement) return;

      const sectionData = topic[sectionId];
      if (!sectionData) return;

      // Check if audio controls already exist
      const existingControls = contentElement.parentElement.querySelector(`#audio-${sectionId}`);
      if (existingControls) return;

      // Create and insert audio controls
      const audioControls = createAudioControls(sectionId, sectionData);
      contentElement.parentElement.insertBefore(audioControls, contentElement);
    });
  }

  // Update all content on the page based on selected language
  function updatePageContent(language) {
    if (typeof topic === 'undefined') return;

    // Update each section
    const sections = {
      comic: 'comicContent',
      deepDive: 'deepDiveContent',
      types: 'typesContent',
      memory: 'memoryContent',
      interview: 'interviewContent',
      revision: 'revisionContent'
    };

    Object.entries(sections).forEach(([key, elementId]) => {
      const element = document.getElementById(elementId);
      if (element && topic[key]) {
        const content = getContentForLanguage(topic[key], language);
        element.textContent = content;
      }
    });

    // Update Q&A section if it exists
    updateQASection(language);
  }

  // Update Q&A section with multilingual support
  function updateQASection(language) {
    if (!topic.qa || !Array.isArray(topic.qa)) return;

    const qaContainer = document.getElementById('qaContainer');
    if (!qaContainer) return;

    qaContainer.innerHTML = topic.qa.map((q, i) => {
      const question = getContentForLanguage(q.q, language);
      const answer = getContentForLanguage(q.answer, language);
      const explanation = getContentForLanguage(q.explanation, language);
      const memory = getContentForLanguage(q.memory, language);
      const hint = getContentForLanguage(q.hint, language);

      return `
        <div class="qa-card" onclick="toggleQA(${i})">
          <div class="flex items-start gap-3">
            <span class="text-xl flex-shrink-0">❓</span>
            <div class="flex-1">
              <h4 class="font-semibold text-white">Q${i+1}: ${question}</h4>
              ${hint ? `<p class="text-xs text-gray-500 mt-0.5">Hint: ${hint}</p>` : ''}
              <div id="qa-${i}" class="answer-hidden">
                <div class="bg-green-500/20 border-l-4 border-green-500 rounded p-3 mb-2 mt-3">
                  <p class="font-semibold text-green-300 mb-1">✅ Answer: ${answer}</p>
                  ${explanation ? `<p class="text-gray-200 text-sm" style="white-space:pre-line">${explanation}</p>` : ''}
                </div>
                ${memory ? `
                  <div class="bg-yellow-500/20 border-l-4 border-yellow-500 rounded p-3">
                    <p class="text-gray-200 text-sm">💡 ${memory}</p>
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already loaded
    init();
  }

  // Export for manual initialization if needed
  window.initMultilingualSystem = init;

})();

// Helper function to check if multilingual system is ready
function isMultilingualSystemReady() {
  return typeof languageManager !== 'undefined' && 
         typeof audioPlayer !== 'undefined' &&
         typeof createLanguageToggle !== 'undefined';
}

// Manual initialization function
function enableMultilingualFeatures(options = {}) {
  const defaultOptions = {
    languageToggle: true,
    audioControls: true,
    sections: ['comic', 'deepDive', 'memory', 'interview', 'revision']
  };

  const config = { ...defaultOptions, ...options };

  if (!isMultilingualSystemReady()) {
    console.error('Multilingual system not ready. Please include required scripts.');
    return false;
  }

  if (config.languageToggle) {
    insertLanguageToggle();
  }

  if (config.audioControls) {
    config.sections.forEach(section => {
      const element = document.getElementById(`${section}Content`);
      if (element && typeof topic !== 'undefined' && topic[section]) {
        const controls = createAudioControls(section, topic[section]);
        element.parentElement.insertBefore(controls, element);
      }
    });
  }

  return true;
}

console.log('📚 Multilingual integration script loaded');
