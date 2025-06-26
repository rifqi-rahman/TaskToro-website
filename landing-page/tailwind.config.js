// Tailwind CSS configuration for TaskToro Landing Page
// Enables dark mode (class strategy) and customizes theme for branding

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode via class
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // TaskToro brand and category colors
        primary: '#0099FF', // Main blue
        health: '#FF6B6B',
        wealth: '#FFD93D',
        social: '#1877F2',
        intelligence: '#FF6FB5',
        mental: '#4ADE80',
        spiritual: '#B983FF',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        xl: '1.25rem', // For rounded cards
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}; 