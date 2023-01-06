/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '992px',
      'lg': '1132px'
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        azul: {
          1: '#465EFF',
          2: '#54DCFC',
        },
        verde: {
          1: '#00EBD0'
        },
        roxo: {
          1: '#BDB6FF'
        }
      }
    },
  },
  plugins: [],
}
