/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  presets: [require('./tailwind-container.config.js')],
  theme: {
    extend: {
      fontFamily: { display: ['Coiny', 'cursive'] },
      keyframes: {
        rubber: {
          '0%, 100%': { transform: 'scale3d(1,1,1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, .95, 1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translate3d(-10px, 0, 0)' },
          '20%, 40%, 60%, 80%': { transform: 'translate3d(10px, 0, 0)' },
        },
      },
      animation: {
        rubber: 'rubber 1s',
        shake: 'shake 1s',
      },
    },
  },
  safelist: [
    'animate-rubber',
    'animate-shake',
    { pattern: /bg-(red|orange|yellow|lime|green|blue|purple|pink)-500/ },
  ],
  plugins: [],
};
