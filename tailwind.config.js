/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        nunito: ['Nunito', 'sans-serif'],
      },
      colors:{
        background:'#E8F5FF',
        
      }
    },
  },
  plugins: [],
}

