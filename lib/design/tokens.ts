/**
 * Substance Lab Design System Tokens
 * Mirrored from design.md & PRD specifications for StadiumSense
 */

export const DESIGN_TOKENS = {
  colors: {
    background: '#FBFAF7',
    textMain: '#12281A',
    brand: '#1E4D33',
    accent: '#42A85D', // Digital Live Pulse (AI-active, live sensors, status badge)
    surface: '#FFFFFF',
    surfaceMuted: '#F3F1EC',
    borderLight: 'rgba(30, 77, 51, 0.12)',
    borderMedium: 'rgba(30, 77, 51, 0.24)',
  },
  typography: {
    heading: 'var(--font-space-grotesk), sans-serif',
    serif: 'var(--font-instrument-serif), serif',
    sans: 'var(--font-inter), sans-serif',
  },
  motion: {
    revealTiming: '900ms cubic-bezier(0.22, 1, 0.36, 1)',
    wordStaggerMs: 45,
  },
} as const;

export type DesignTokenColors = typeof DESIGN_TOKENS.colors;
