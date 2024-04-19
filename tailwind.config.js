/** @type {import('tailwindcss').Config} */
export default {
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
        preto: {
          1: '#282733',
          2: '#3A3847',
          3: '#605E70',
          4: '#DFDFE2',
          5: '#EAEAEE',
          6: '#F9F7FF'
        },
        vermelho: {
          1: '#FF706A',
          2: '#F97A70',
          3: '#FFB3A8',
        },
        rosa: {
          1: '#FF8AAD',
          2: '#FFC8D0',
        },
        amarelo: {
          1: '#FCFC30',
          2: '#FCEE4F',
          3: '#caca26',
          4: '#FFEC8D',
        },
        azul: {
          1: '#3751FF',
          2: '#465EFF',
          3: '#5E73FF',
          4: '#7485F8',
          5: '#007AFF',
          6: '#54DCFC',
        },
        verde: {
          1: '#6AEDD3',
          2: '#00EBCF',
          3: '#0CB9A1',
          4: '#3B732B',
        },
        roxo: {
          1: '#7358C8',
          2: '#BCB3FF',
          3: '#C6CEFF',
          4: '#DDE4FC',
          5: '#E5E8FF',
        }
      }
    },
  },
  plugins: [],
}

