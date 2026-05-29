// ==================== FRONTEND CONFIGURATION ====================
// This file provides configuration for frontend HTML files
// Set API_BASE_URL via environment or use defaults

window.APP_CONFIG = {
  // API Configuration
  API_BASE_URL: window.location.hostname === 'localhost' 
    ? 'http://localhost:5000/api'
    : `${window.location.origin}/api`,
  
  // Payment Configuration (loaded from backend at runtime)
  PAYMENT: {
    UPI_ID: '', // Loaded from /api/enrollment/create — never hardcode here
    UPI_NAME: 'Morphed Tech',
  },
  
  // Feature Flags
  FEATURES: {
    ENABLE_ANALYTICS: true,
    ENABLE_ERROR_TRACKING: false,
  },
  
  // Environment
  IS_PRODUCTION: window.location.hostname !== 'localhost',
  IS_DEVELOPMENT: window.location.hostname === 'localhost',
};

// Helper function to get API URL
window.getApiUrl = function() {
  return window.APP_CONFIG.API_BASE_URL;
};

console.log('✅ Frontend config loaded:', window.APP_CONFIG.IS_PRODUCTION ? 'PRODUCTION' : 'DEVELOPMENT');
