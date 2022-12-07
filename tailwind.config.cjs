/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mb: '360px',
      },
      backgroundImage: {
        one: "url('/assets/onegame.png')",
        two: "url('/assets/twogame.png')",
        three: "url('/assets/threegame.png')",
        four: "url('/assets/fourgame.png')",
      },
    },
  },
  plugins: [],
};
