// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['DM Sans', 'sans-serif'],
      },
      color:{
         customBlue: '#40ADE3'
      }
    },
  },
  plugins: [],
}