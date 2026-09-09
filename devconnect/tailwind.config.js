// const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['src/**/*.{ts,tsx}', '../lib/**/*.{ts,tsx}', '!**/node_modules/**'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'], // , ...fontFamily.sans],
      },
      maskImage: {
        'fade-right': 'linear-gradient(to right, black 0%, black 80%, transparent 100%)',
      },
    },
  },;
