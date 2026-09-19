/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        soul: '#0A0A0A',
        paper: '#FFFFFF',
        crimson: '#E60012',
        cyan: '#00E5FF',
        ash: '#171717',
        smoke: '#A6A6A6',
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        technical: ['"Rajdhani"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
