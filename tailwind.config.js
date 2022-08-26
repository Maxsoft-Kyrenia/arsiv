/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      raleway: ['Raleway', 'sans-serif']
    },
    colors: {
      green:'rgb(12,159,100)',
       'buttonback': '#303030',
       'black': '#171717',
       'white': '#fff',
       'icon': '#303130',
       'fromdark': '#272827',
       'tolight': '#4f504f',
       'divider': '#747577',
       'mailsection': '#201f1f',
       'sectionthreeheader': '#35315d',
       'cardborder': '#efefef',
       'sectionfourbackground': '#f9f9f9'
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('./assets/contactbg.jpg')",
        'section-six': "url('./assets/homefivescbg.jpg')"
       })

    },
  },
  plugins: [],
}
