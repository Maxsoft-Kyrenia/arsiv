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
       'newblack': '#171717',
       'secblack': '#201f1f',
       'tolight': '#4f504f',
       'divider': '#747577',
       'mailsection': '#201f1f',
       'sectionthreeheader': '#35315d',
       'cardborder': '#efefef',
       'sectionfourbackground': '#f9f9f9',
       'blue': '#1c2242',
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('./assets/contactbg.jpg')",
        'section-six': "url('./assets/homefivescbg.png')",
        'aboutbg': "url('./assets/aboutbarbg.jpg')",
        'platformbg': "url('./assets/platformone.jpg')",
        'platsectionthree': "url('./assets/platsectionthree.png')"
       }),
       animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      variants: {
        animation: ["motion-safe"]
    }

    },
  },
  plugins: [],
}
