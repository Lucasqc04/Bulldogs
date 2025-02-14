/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e6f1ff',
          100: '#bcd6ff',
          200: '#90baff',
          300: '#649eff',
          400: '#3882ff',
          500: '#1a6dff',
          600: '#0052e6',
          700: '#0047cc',
          800: '#003db3',
          900: '#002266',
        },
        yellow: {
          400: '#ffd644',
          500: '#ffc107',
          600: '#e5ac00',
        },
      },
    },
  },
  plugins: [],
};