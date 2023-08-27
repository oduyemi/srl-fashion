/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}"
],
theme: {
  extend: {
    fontFamily: {
      lato: ['Poppins', 'sans-serif'],
    },
    colors: {
      butter: "#E4CB9C",
      goldie: "#CD8F2C",
      subtext: "#B0B0B0",
      tan: "#352208",
      brownie: "#564946",
      ggreen: "#558564",
      bluey: "#39A9DB",
      placeholderColor: "#DEDEDE"
    },
    variants: {
      display: ['responsive', 'group-hover', 'group-focus'],
     },
  },
},
  plugins: [],
}

