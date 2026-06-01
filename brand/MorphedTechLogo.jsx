/**
 * MORPHED TECH - Logo React Component
 * 
 * Usage:
 *   <MorphedTechLogo variant="full" theme="dark" size={40} />
 *   <MorphedTechLogo variant="icon" theme="light" size={32} />
 *   <MorphedTechLogo variant="favicon" size={16} />
 * 
 * Props:
 *   variant: "full" | "icon" | "favicon" (default: "full")
 *   theme: "dark" | "light" (default: "dark")
 *   size: number (height in px, default: 40)
 *   className: string (optional)
 */

import React from 'react';

const COLORS = {
  gold: '#D4AF37',
  goldLight: '#F5D76E',
  indigo: '#1E1B4B',
  indigoLight: '#312E81',
  slate: '#0F172A',
  white: '#F8FAFC',
  muted: '#94A3B8',
  darkMuted: '#64748B',
};

// Icon-only M mark with trishul center
function LogoMark({ theme = 'dark', size = 40 }) {
  const strokeColor = theme === 'dark' ? COLORS.gold : COLORS.indigo;
  const accentColor = COLORS.gold;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={COLORS.gold} />
          <stop offset="100%" stopColor={COLORS.goldLight} />
        </linearGradient>
        <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={COLORS.indigo} />
          <stop offset="100%" stopColor={COLORS.slate} />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="80" height="80" rx="18" fill="url(#logoBg)" />

      {/* M shape */}
      <g transform="translate(12, 14)">
        <path
          d="M6 54 L6 12 L22 12 L28 28 L34 12 L50 12 L50 54"
          stroke="url(#logoGold)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Trishul shaft */}
        <path
          d="M28 28 L28 54"
          stroke="url(#logoGold)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Trishul prongs */}
        <path
          d="M22 33 L28 24 L34 33"
          stroke="url(#logoGold)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Diamond tip */}
        <path
          d="M28 18 L30.5 22 L28 26 L25.5 22 Z"
          fill="url(#logoGold)"
          opacity="0.85"
        />
      </g>
    </svg>
  );
}

// Full logo with wordmark
function LogoFull({ theme = 'dark', size = 40 }) {
  const textColor = theme === 'dark' ? COLORS.white : COLORS.indigo;
  const ratio = size / 40; // base height is 40px

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: `${8 * ratio}px` }}>
      <LogoMark theme={theme} size={size} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: `${4 * ratio}px` }}>
          <span
            style={{
              fontSize: `${16 * ratio}px`,
              fontWeight: 800,
              letterSpacing: '1.5px',
              color: textColor,
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            MORPHED
          </span>
          <span
            style={{
              fontSize: `${16 * ratio}px`,
              fontWeight: 300,
              letterSpacing: '1.5px',
              color: COLORS.gold,
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            TECH
          </span>
        </div>
        {size >= 32 && (
          <span
            style={{
              fontSize: `${5 * ratio}px`,
              fontWeight: 400,
              letterSpacing: '3px',
              color: theme === 'dark' ? COLORS.muted : COLORS.darkMuted,
              opacity: 0.7,
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            DATA ENGINEERING MASTERY
          </span>
        )}
      </div>
    </div>
  );
}

// Favicon version (simplified for small sizes)
function LogoFavicon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="favGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={COLORS.gold} />
          <stop offset="100%" stopColor={COLORS.goldLight} />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill={COLORS.indigo} />
      <g transform="translate(5, 6)">
        <path
          d="M2 20 L2 4 L8 4 L11 11 L14 4 L20 4 L20 20"
          stroke="url(#favGold)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M11 11 L11 20" stroke="url(#favGold)" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M9 13 L11 9 L13 13"
          stroke="url(#favGold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

// Main export component
export default function MorphedTechLogo({ variant = 'full', theme = 'dark', size = 40, className = '' }) {
  const wrapperStyle = { display: 'inline-flex', alignItems: 'center' };

  switch (variant) {
    case 'icon':
      return <div style={wrapperStyle} className={className}><LogoMark theme={theme} size={size} /></div>;
    case 'favicon':
      return <div style={wrapperStyle} className={className}><LogoFavicon size={size} /></div>;
    case 'full':
    default:
      return <div style={wrapperStyle} className={className}><LogoFull theme={theme} size={size} /></div>;
  }
}

export { LogoMark, LogoFull, LogoFavicon, COLORS };
