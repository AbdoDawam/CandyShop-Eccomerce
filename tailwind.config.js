/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#322015',
        secondary: '#C8A37B',
        thirdly: '#75442A',
      },
    },
    fontFamily: {
      kurale: ['Kurale', 'system-ui', '-apple-system', 'sans-serif'],
    },
  },
  plugins: [],
}
