/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage:{
        'hero_section':"url('./netflix image/main.jpg')"
      }
    },
  },
  plugins: [],
}

