/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-transparent': 'rgba(0, 255, 0, 0.3)'
      }
    }
  },
  plugins: []
}
