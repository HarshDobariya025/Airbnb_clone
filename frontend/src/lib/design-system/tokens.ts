/**
 * Centralized Design Tokens for Airbnb Clone
 * Visual source of truth: Assignment screenshots in docs/screenshots/
 */

export const tokens = {
  layout: {
    pageMaxWidth: '1280px',
    pageMaxWidthNarrow: '1120px',
    contentWidth: '650px',
    sidebarWidth: '370px',
    sidebarGap: '80px',
    navHeight: '76px',
    navHeightCompact: '64px',
  },
  spacing: {
    sectionY: '48px',
    sectionYMobile: '32px',
    sectionGap: '24px',
    cardPadding: '24px',
    cardPaddingLg: '32px',
  },
  typography: {
    fontFamily: "var(--font-sans, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif)",
    h1: { fontSize: '26px', lineHeight: '30px', fontWeight: 600, letterSpacing: '-0.02em' },
    h2: { fontSize: '22px', lineHeight: '26px', fontWeight: 600, letterSpacing: '-0.01em' },
    h3: { fontSize: '18px', lineHeight: '22px', fontWeight: 600 },
    h4: { fontSize: '16px', lineHeight: '20px', fontWeight: 600 },
    bodyLg: { fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
    body: { fontSize: '14px', lineHeight: '20px', fontWeight: 400 },
    bodySm: { fontSize: '12px', lineHeight: '16px', fontWeight: 400 },
  },
  colors: {
    brand: '#FF385C',
    brandHover: '#E00B41',
    brandActive: '#D70466',
    brandGradient: 'linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)',
    textPrimary: '#222222',
    textMuted: '#717171',
    textSubtle: '#B0B0B0',
    border: '#DDDDDD',
    borderLight: '#EBEBEB',
    borderDark: '#222222',
    bgPrimary: '#FFFFFF',
    bgSecondary: '#F7F7F7',
    bgHover: '#F2F2F2',
    surface: '#F7F7F7',
    white: '#FFFFFF',
    modalOverlay: 'rgba(0, 0, 0, 0.6)',
  },
  button: {
    heightSm: '32px',
    heightMd: '44px',
    heightLg: '48px',
  },
  radius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
    imageHero: '16px',
    imageCard: '16px',
    imageBed: '12px',
    imageThumb: '8px',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.08)',
    md: '0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
    card: '0 6px 16px rgba(0, 0, 0, 0.12)',
    elevated: '0 6px 20px rgba(0, 0, 0, 0.12)',
    modal: '0 8px 28px rgba(0, 0, 0, 0.28)',
  },
  icons: {
    sm: 14,
    md: 18,
    lg: 24,
    xl: 32,
  },
  animation: {
    fast: '0.15s ease',
    normal: '0.2s ease',
    slow: '0.3s ease',
  },
} as const

export type Tokens = typeof tokens
