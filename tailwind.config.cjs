/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: 'var(--primary-1)',
          2: 'var(--primary-2)',
          3: 'var(--primary-3)',
          4: 'var(--primary-4)'
        },
        additional: {
          1: '#E5F1FF',
        },
        'text-color':{
          1: '#333333',
          2: '#858A8F'
        }
      },
      fontSize: {
        '1.5xl': '22px',
      },
      screens: {
        phone: { raw: '(max-width: 767px)' },
        tablet: { raw: '(min-width: 768px) and (max-width: 1023px)' },
        desktop: { raw: '(min-width: 1024px)' },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    }
  },
  plugins: [],
}