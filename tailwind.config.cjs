/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00000',
        'grad-one': '#E9AE7C',
        'grad-two': '#C67340',
        'grad-three': '#FAE0AF',
        'grad-four': '#D57241',
        'grad-five': '#A34D30',

      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
