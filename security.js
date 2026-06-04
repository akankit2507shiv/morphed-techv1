/**
 * MORPHED TECH — Frontend Security Layer
 * Handles: session guard, inactivity timeout, DevTools detection,
 * watermark, content protection, localStorage integrity, activity logging
 */

(function MorphedSecurity() {
  'use strict';

  const API = window.location.origin + '/api';
  const INACTIVITY_LIMIT = 30 * 60 * 1000; // 30 minutes
  const SESSION_KEY = 'morphed_session';

  // ── 1. SESSION GUARD ──────────────────────────────────────────────
  function getSession() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      const s = JSON.parse(atob(raw));
      // Validate expiry
      if (s.exp && Date.now() > s.exp) {
        clearSession('Session expired');
        return null;
      }
      return s;
    } catch (e) {
      clearSession('Tampered session');
      return null;
    }
  }

  function clearSession(reason) {
    logEvent('SESSION_EXPIRED', reason || 'Cleared', 'LOW');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem(SESSION_KEY);
  }

  // Validate token is still a real JWT (3 parts, not tampered)
  function validateToken(token) {
    if (!token) return false;
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    try {
      const payload = JSON.parse(atob(parts[1]));
      // Check expiry from JWT payload
      if (payload.exp && Date.now() / 1000 > payload.exp) return false;
      return true;
    } catch (e) {
      return false;
    }
  }

  // ── 2. ROUTE GUARD — call on every protected page ─────────────────
  window.MorphedAuth = {
    requireLogin: function (redirectTo) {
      const token = localStorage.getItem('token');
      const user = (() => { try { return JSON.parse(localStorage.getItem('user') || '{}'); } catch(e) { return {}; } })();

      if (!token || !validateToken(token)) {
        logEvent('UNAUTHORIZED_ACCESS', window.location.pathname, 'MEDIUM');
        clearSession();
        window.location.href = redirectTo || 'student-login.html';
        return false;
      }

      // Detect localStorage role spoofing — user object must match token payload
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (user.role !== payload.role || user.id !== payload.id) {
          logEvent('LOCALSTORAGE_TAMPER', 'Role/ID mismatch detected', 'HIGH');
          clearSession();
          window.location.href = redirectTo || 'student-login.html';
          return false;
        }
      } catch (e) {
        clearSession();
        window.location.href = redirectTo || 'student-login.html';
        return false;
      }

      // Refresh last active
      localStorage.setItem('lastActive', Date.now());
      return true;
    },

    requireAdmin: function () {
      if (!this.requireLogin('secure-admin')) return false;
      const user = (() => { try { return JSON.parse(localStorage.getItem('user') || '{}'); } catch(e) { return {}; } })();
      if (user.role !== 'admin') {
        logEvent('UNAUTHORIZED_ADMIN_ACCESS', window.location.pathname, 'HIGH');
        // Log the attempt to the server
        fetch(`${API}/security/admin-access-attempt`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ route: window.location.pathname, user_email: user.email || 'anonymous' })
        }).catch(() => {});
        window.location.href = 'student-login.html';
        return false;
      }
      return true;
    },

    logout: function (reason) {
      logEvent('LOGOUT', reason || 'Manual logout', 'LOW');
      clearSession();
      window.location.href = 'student-login.html';
    }
  };

  // ── 3. INACTIVITY TIMEOUT ─────────────────────────────────────────
  let inactivityTimer;

  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    localStorage.setItem('lastActive', Date.now());
    inactivityTimer = setTimeout(() => {
      const token = localStorage.getItem('token');
      if (token) {
        logEvent('INACTIVITY_LOGOUT', '30 min inactivity', 'LOW');
        clearSession();
        showSecurityBanner('⏱️ Session expired due to inactivity. Please login again.', () => {
          window.location.href = 'student-login.html';
        });
      }
    }, INACTIVITY_LIMIT);
  }

  ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'].forEach(evt => {
    document.addEventListener(evt, resetInactivityTimer, { passive: true });
  });

  resetInactivityTimer();

  // ── 4. DEVTOOLS DETECTION ─────────────────────────────────────────
  const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  let devToolsOpen = false;
  let devToolsWarningShown = false;

  function checkDevTools() {
    if (isLocalDev) return;
    const threshold = 160;
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;
    const opened = widthDiff || heightDiff;

    if (opened && !devToolsOpen) {
      devToolsOpen = true;
      if (!devToolsWarningShown) {
        devToolsWarningShown = true;
        logEvent('DEVTOOLS_OPENED', 'DevTools detected on ' + window.location.pathname, 'MEDIUM');
        blurPremiumContent(true);
        showDevToolsWarning();
      }
    } else if (!opened && devToolsOpen) {
      devToolsOpen = false;
      blurPremiumContent(false);
      hideDevToolsWarning();
    }
  }

  function blurPremiumContent(blur) {
    const selectors = ['#topicsGrid', '#projectsGrid', '.tab-content-inner.active', 'main'];
    selectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) {
        el.style.filter = blur ? 'blur(6px)' : '';
        el.style.userSelect = blur ? 'none' : '';
      }
    });
  }

  function showDevToolsWarning() {
    if (document.getElementById('devtools-warning')) return;
    const div = document.createElement('div');
    div.id = 'devtools-warning';
    div.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:linear-gradient(135deg,#ff3d81,#7c3cff);color:white;text-align:center;padding:12px 20px;font-family:Inter,sans-serif;font-weight:700;font-size:14px;';
    div.innerHTML = '🛡️ Protected Learning Content — Developer Tools detected. Content is blurred for security.';
    document.body.prepend(div);
  }

  function hideDevToolsWarning() {
    const el = document.getElementById('devtools-warning');
    if (el) el.remove();
  }

  if (isLocalDev) {
    blurPremiumContent(false);
    hideDevToolsWarning();
  } else {
    setInterval(checkDevTools, 1500);
  }

  // ── 5. CONTENT PROTECTION ─────────────────────────────────────────
  // Skip all content protection for admin users
  const _currentUser = (() => { try { return JSON.parse(localStorage.getItem('user') || '{}'); } catch(e) { return {}; } })();
  if (_currentUser.role === 'admin') {
    // Admin: no watermark, no content restrictions
    window.MorphedWatermark = { apply: function() {} };
  } else {
  document.addEventListener('contextmenu', function (e) {
    const premiumSelectors = ['#topicsGrid', '#projectsGrid', '.tab-content-inner'];
    const isPremium = premiumSelectors.some(sel => e.target.closest(sel));
    if (isPremium) {
      e.preventDefault();
      return false;
    }
  });

  // Disable text selection on premium content
  const style = document.createElement('style');
  style.textContent = `
    #topicsGrid, #projectsGrid, .tab-content-inner {
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }
    /* Watermark overlay on premium content */
    .morphed-watermark {
      position: fixed;
      pointer-events: none;
      z-index: 9998;
      opacity: 0.04;
      font-size: 18px;
      font-weight: 900;
      color: #fff;
      transform: rotate(-30deg);
      white-space: nowrap;
      font-family: Inter, sans-serif;
      letter-spacing: 2px;
    }
  `;
  document.head.appendChild(style);

  // Disable keyboard shortcuts for saving/printing
  document.addEventListener('keydown', function (e) {
    // Block Ctrl+S, Ctrl+P, Ctrl+U (view source)
    if (e.ctrlKey && ['s', 'p', 'u'].includes(e.key.toLowerCase())) {
      e.preventDefault();
      return false;
    }
    // Block F12
    if (e.key === 'F12') {
      e.preventDefault();
      logEvent('DEVTOOLS_SHORTCUT', 'F12 pressed', 'LOW');
      return false;
    }
  });

  // ── 6. WATERMARK ──────────────────────────────────────────────────
  window.MorphedWatermark = {
    apply: function () {
      const user = (() => { try { return JSON.parse(localStorage.getItem('user') || '{}'); } catch(e) { return {}; } })();
      if (!user.email) return;

      // Remove existing
      document.querySelectorAll('.morphed-watermark').forEach(el => el.remove());

      const text = user.email + ' • MORPHED TECH';
      const positions = [
        { top: '15%', left: '10%' }, { top: '35%', left: '55%' },
        { top: '55%', left: '20%' }, { top: '75%', left: '65%' },
        { top: '85%', left: '35%' }
      ];

      positions.forEach(pos => {
        const wm = document.createElement('div');
        wm.className = 'morphed-watermark';
        wm.style.top = pos.top;
        wm.style.left = pos.left;
        wm.textContent = text;
        document.body.appendChild(wm);
      });
    }
  };

  } // end else (non-admin content protection)

  // ── 7. SECURITY BANNER ────────────────────────────────────────────
  function showSecurityBanner(message, onClose) {
    const existing = document.getElementById('security-banner');
    if (existing) existing.remove();

    const div = document.createElement('div');
    div.id = 'security-banner';
    div.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:99999;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;';
    div.innerHTML = `
      <div style="background:linear-gradient(135deg,#0b1020,#1a0a2e);border:1px solid rgba(255,61,129,0.4);border-radius:16px;padding:40px;max-width:400px;text-align:center;color:white;">
        <div style="font-size:48px;margin-bottom:16px;">🔒</div>
        <h3 style="font-size:20px;font-weight:800;margin-bottom:12px;">Security Notice</h3>
        <p style="color:#9ca3af;margin-bottom:24px;">${message}</p>
        <button onclick="document.getElementById('security-banner').remove();${onClose ? '(' + onClose.toString() + ')()' : ''}" 
          style="padding:12px 32px;background:linear-gradient(135deg,#ff3d81,#7c3cff);color:white;border:none;border-radius:8px;font-weight:700;cursor:pointer;">
          OK
        </button>
      </div>`;
    document.body.appendChild(div);
  }

  // ── 8. ACTIVITY LOGGER ────────────────────────────────────────────
  function logEvent(type, detail, severity) {
    const token = localStorage.getItem('token');
    const user = (() => { try { return JSON.parse(localStorage.getItem('user') || '{}'); } catch(e) { return {}; } })();

    const payload = {
      event_type: type,
      detail: detail || '',
      severity: severity || 'LOW',
      user_id: user.id || null,
      user_email: user.email || 'anonymous',
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent.substring(0, 200),
      device_type: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
    };

    // Fire and forget — don't block UI
    fetch(`${API}/security/log`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
      body: JSON.stringify(payload)
    }).catch(() => {
      // Store locally if API fails
      const local = JSON.parse(localStorage.getItem('pending_logs') || '[]');
      local.push(payload);
      localStorage.setItem('pending_logs', JSON.stringify(local.slice(-20)));
    });
  }

  // Expose logger globally for other scripts
  window.MorphedLog = logEvent;

  // ── 9. LOCALSTORAGE INTEGRITY CHECK ───────────────────────────────
  function checkLocalStorageIntegrity() {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const user = JSON.parse(localStorage.getItem('user') || '{}');

      // Detect if someone manually changed role in localStorage
      if (user.role && user.role !== payload.role) {
        logEvent('LOCALSTORAGE_TAMPER', `Role changed: ${payload.role} → ${user.role}`, 'HIGH');
        clearSession();
        window.location.href = 'student-login.html';
      }
    } catch (e) {
      // Malformed token
      logEvent('INVALID_TOKEN', 'Malformed JWT in localStorage', 'HIGH');
      clearSession();
    }
  }

  // Run integrity check on load and every 5 minutes
  checkLocalStorageIntegrity();
  setInterval(checkLocalStorageIntegrity, 5 * 60 * 1000);

  // ── 10. RAPID REFRESH DETECTION ───────────────────────────────────
  const refreshKey = 'refresh_count_' + new Date().toDateString();
  const refreshCount = parseInt(sessionStorage.getItem(refreshKey) || '0') + 1;
  sessionStorage.setItem(refreshKey, refreshCount);

  if (refreshCount > 30) {
    logEvent('EXCESSIVE_REFRESH', `${refreshCount} refreshes today`, 'MEDIUM');
  }

  // ── 11. SESSION FINGERPRINT ───────────────────────────────────────
  function getFingerprint() {
    const fp = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset()
    ].join('|');
    // Simple hash
    let hash = 0;
    for (let i = 0; i < fp.length; i++) {
      hash = ((hash << 5) - hash) + fp.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash).toString(36);
  }

  const currentFP = getFingerprint();
  const storedFP = localStorage.getItem('device_fp');

  if (storedFP && storedFP !== currentFP) {
    logEvent('DEVICE_CHANGE', 'Different device/browser fingerprint detected', 'MEDIUM');
  }
  localStorage.setItem('device_fp', currentFP);

})();
