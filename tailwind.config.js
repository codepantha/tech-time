/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#004db3',
        neutral: '#a1a1a1',
        secondaryText: '#a2a2a2',
        primaryLight: '#aac4e6',
        badgeBg: '#1e5dce',
      },
    },
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
      clash: ['Clash Display', 'sans-serif'],
      amazingKids: ['Amazing Kids', 'cursive'],
    },
  },
  plugins: [],
};
