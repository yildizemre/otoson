/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0a0a0b',
          900: '#111113',
          850: '#161618',
          800: '#1c1c1f',
          700: '#26262a',
          600: '#34343a',
          500: '#4a4a52',
        },
        brand: {
          50: '#fff1f1',
          100: '#ffe0e0',
          200: '#ffc6c6',
          300: '#ff9d9d',
          400: '#ff5a5a',
          500: '#f01f1f',
          600: '#d71515',
          700: '#b30f0f',
          800: '#8f1010',
          900: '#751515',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.55s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
