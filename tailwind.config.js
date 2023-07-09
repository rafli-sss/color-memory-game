/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  presets: [require('./tailwind-container.config.js')],
  theme: {
    extend: {
      fontFamily: { display: ['Coiny', 'cursive'] },
    },
  },
  plugins: [],
};
