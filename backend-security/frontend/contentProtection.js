// =====================================================
// MORPHED TECH - FRONTEND CONTENT PROTECTION
// =====================================================

class ContentProtection {
  constructor(userEmail) {
    this.userEmail = userEmail;
    this.init();
  }

  init() {
    this.disableRightClick();
    this.disableInspect();
    this.disableScreenshot();
    this.addWatermark();
    this.handleTabSwitch();
    this.preventCopy();
    this.disableDevTools();
  }

  // =====================================================
  // 1. DISABLE RIGHT CLICK
  // =====================================================
  disableRightClick() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.showWarning('Right-click is disabled for content protection');
      return false;
    });
  }

  // =====================================================
  // 2. DISABLE INSPECT ELEMENT
  // =====================================================
  disableInspect() {
    document.addEventListener('keydown', (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
        this.showWarning('Developer tools are disabled');
        return false;
      }
    });
  }

  // =====================================================
  // 3. DISABLE SCREENSHOT
  // =====================================================
  disableScreenshot() {
    document.addEventListener('keyup', (e) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        this.showWarning('Screenshots are not allowed');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (
        (e.ctrlKey && e.shiftKey && e.key === 'S') ||
        (e.metaKey && e.shiftKey && e.key === '3') ||
        (e.metaKey && e.shiftKey && e.key === '4')
      ) {
        e.preventDefault();
        this.showWarning('Screenshots are not allowed');
        return false;
      }
    });
  }

  // =====================================================
  // 4. DYNAMIC WATERMARK
  // =====================================================
  addWatermark() {
    const watermark = document.createElement('div');
    watermark.id = 'content-watermark';
    watermark.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      font-size: 48px;
      font-weight: bold;
      color: rgba(124, 60, 237, 0.15);
      pointer-events: none;
      z-index: 9999;
      user-select: none;
      white-space: nowrap;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      font-family: Arial, sans-serif;
    `;
    watermark.textContent = this.userEmail;
    document.body.appendChild(watermark);

    for (let i = 0; i < 5; i++) {
      const clone = watermark.cloneNode(true);
      clone.style.top = `${20 + i * 20}%`;
      clone.style.left = `${20 + i * 15}%`;
      document.body.appendChild(clone);
    }

    this.protectWatermark();
  }

  protectWatermark() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.removedNodes.forEach((node) => {
          if (node.id === 'content-watermark') {
            this.addWatermark();
            this.logSecurityEvent('watermark_removal_attempt');
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // =====================================================
  // 5. BLUR SCREEN ON TAB SWITCH
  // =====================================================
  handleTabSwitch() {
    let blurOverlay = null;

    const createBlurOverlay = () => {
      blurOverlay = document.createElement('div');
      blurOverlay.id = 'blur-overlay';
      blurOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(20px);
        z-index: 999999;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: white;
        font-family: Arial, sans-serif;
      `;
      blurOverlay.innerHTML = `
        <div style="text-align: center;">
          <div style="font-size: 64px; margin-bottom: 20px;">🔒</div>
          <h2 style="font-size: 32px; margin-bottom: 10px;">Content Protected</h2>
          <p style="font-size: 18px; color: rgba(255,255,255,0.7);">
            Please return to this tab to continue learning
          </p>
          <p style="font-size: 14px; color: rgba(255,255,255,0.5); margin-top: 20px;">
            ${this.userEmail}
          </p>
        </div>
      `;
      document.body.appendChild(blurOverlay);
    };

    const removeBlurOverlay = () => {
      if (blurOverlay && blurOverlay.parentNode) {
        blurOverlay.parentNode.removeChild(blurOverlay);
        blurOverlay = null;
      }
    };

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        createBlurOverlay();
        this.pauseAllVideos();
        this.logSecurityEvent('tab_switch_away');
      } else {
        removeBlurOverlay();
        this.logSecurityEvent('tab_switch_back');
      }
    });

    window.addEventListener('blur', () => {
      createBlurOverlay();
      this.pauseAllVideos();
    });

    window.addEventListener('focus', () => {
      removeBlurOverlay();
    });
  }

  // =====================================================
  // 6. PREVENT COPY/PASTE
  // =====================================================
  preventCopy() {
    document.addEventListener('copy', (e) => {
      e.preventDefault();
      this.showWarning('Copying content is not allowed');
      return false;
    });

    document.addEventListener('cut', (e) => {
      e.preventDefault();
      return false;
    });

    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
  }

  // =====================================================
  // 7. DETECT DEV TOOLS
  // =====================================================
  disableDevTools() {
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        this.showWarning('Developer tools detected. Please close them.');
        this.logSecurityEvent('devtools_detected');
      }
    };

    setInterval(detectDevTools, 1000);

    setInterval(() => {
      const start = performance.now();
      debugger;
      const end = performance.now();
      if (end - start > 100) {
        this.logSecurityEvent('debugger_detected');
      }
    }, 1000);
  }

  // =====================================================
  // 8. PAUSE VIDEOS
  // =====================================================
  pauseAllVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      if (!video.paused) {
        video.pause();
      }
    });
  }

  // =====================================================
  // 9. SHOW WARNING
  // =====================================================
  showWarning(message) {
    const warning = document.createElement('div');
    warning.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #ff3d81, #7c3cff);
      color: white;
      padding: 15px 25px;
      border-radius: 10px;
      font-family: Arial, sans-serif;
      font-size: 14px;
      font-weight: bold;
      z-index: 999999;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      animation: slideIn 0.3s ease-out;
    `;
    warning.textContent = `⚠️ ${message}`;
    document.body.appendChild(warning);

    setTimeout(() => {
      warning.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => warning.remove(), 300);
    }, 3000);
  }

  // =====================================================
  // 10. LOG SECURITY EVENTS
  // =====================================================
  async logSecurityEvent(eventType) {
    try {
      await fetch('/api/security/log-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          eventType,
          userEmail: this.userEmail,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent
        })
      });
    } catch (error) {
      console.error('Failed to log security event:', error);
    }
  }
}

// =====================================================
// INITIALIZE
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (user.email) {
    window.contentProtection = new ContentProtection(user.email);
    console.log('🔒 Content protection enabled');
  }
});

const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(400px); opacity: 0; }
  }
`;
document.head.appendChild(style);
