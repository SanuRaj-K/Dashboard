 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        customFont:['poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}