/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#283B93',
          dark: '#2B2B2B',
          light: '#FDFDFD',
          gray: '#D1D2D5',
          // Tons estendidos de azul
          deepblue: '#182475', // Azul mais escuro
          navyblue: '#1E3178',
          mainblue: '#283B93', // Tom original
          mediumblue: '#3A4DB6',
          softblue: '#5166D7',
          lightblue: '#7D8DE4',
          paleblue: '#A9B2EF',
          skyblue: '#D2D8F6', // Azul mais claro
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-diagonal': 'linear-gradient(45deg, var(--tw-gradient-stops))',
        'blue-texture': 'url("/src/assets/blue-texture.png")',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)',
        },
        '.border-gradient': {
          borderImageSlice: 1,
          borderImageSource: 'linear-gradient(45deg, #283B93, #5166D7)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};