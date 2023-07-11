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
          1: '#0176FF',
          2: '#2DCA8C',
          3: '#FFBE3D',
          4: '#FF715B'
        },
        additional: {
          1: '#E5F1FF',
        },
        'text-color':{
          1: '#333333'
        }
      },
      fontSize: {
        '1.5xl': '22px',
      }
    }
  },
  plugins: [],
}