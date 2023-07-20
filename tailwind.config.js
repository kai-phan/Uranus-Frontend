/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      'small': '18px',
      'body': '20px',
      'heading-1': '40px',
      'heading-2': '32px',
      'heading-3': '28px',
      'heading-4': '26px',
      'heading-5': '24px',
      'display-1': '80px',
      'display-2': '60px',
      'display-3': '48px',
    },
    screens: {
      'mobile': '425px',
      'tablet': '768px',
      'desktop': '1200px',
    },
    extend: {
      colors: {
        primary: {
          1: '#387dfe',
          2: '#2cc98c',
          3: '#ffbd3e',
          4: '#ff715b',
        },
        additional: {
          1: '#e5f1ff',
          2: '#eafaf3',
          3: '#fff2d8',
          4: '#ffe3de',
        },
        'text-color':{
          1: '#333333',
          2: '#858a8e',
          3: '#aab0b7'
        }
      },
    },
  },
  plugins: [],
}
