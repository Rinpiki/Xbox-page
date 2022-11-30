/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mmb: '360px',
        mbb: '375px',
      },
    },
  },
  plugins: [],
};
