/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this according to your file structure
  ],
  fontFamily: {
    sans: ['DM Sans', 'sans-serif'], // Set DM Sans as the default sans font
  },
  theme: {
    container:{
      center: true,
      padding: '20px',
    },
    extend: {
      screens: {
        lg: '1440px',
        md: '768px',
        sm: '600px',
        xs: '320px',
      },
    },
  },
  plugins: [],
}
