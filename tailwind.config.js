/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        lagoon: {
          50: '#effaf8',
          100: '#d7f0ec',
          200: '#b0e1d9',
          300: '#7dccc2',
          400: '#46b1a5',
          500: '#2a958a',
          600: '#1f7770',
          700: '#1c605b',
          800: '#1a4e4b',
          900: '#184140',
          950: '#0b2625',
        },
        sand: {
          50: '#faf7f1',
          100: '#f4edde',
          200: '#e7d9ba',
          300: '#d9c08e',
          400: '#cba767',
          500: '#c1944b',
          600: '#a67c3c',
          700: '#856332',
          800: '#6e532d',
          900: '#5d4629',
        },
        ink: '#14201f',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
