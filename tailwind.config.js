/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      raleway: ['Raleway', 'sans-serif']
    },
    colors: {
       'buttonback': '#4a4a4a',
       'black': '#171717',
       'white': '#fff',
       'divider': '#747577',
       'mailsection': '#201f1f',
       'sectionthreeheader': '#35315d',
       'cardborder': '#efefef',
       'sectionfourbackground': '#f9f9f9'
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('./assets/contactbg.jpg')"
       })

    },
  },
  plugins: [],
}
