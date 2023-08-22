/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: "415px",
      lg: "976px",
      custom: "500px"
    },
    extend: {
      colors: {
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",        
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        instagramOne:"hsl(37, 97%, 70%)",
        instagramTwo: "hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",

        //#### Dark Theme
        darkThemeColor1: "hsl(210, 78%, 56%)",
        darkThemeColor2: "hsl(146, 68%, 55%)",

        // #### Light Theme
        lightToggle: "hsl(230, 22%, 74%)",

        //#### Dark Theme
        darkbg: "hsl(230, 17%, 14%)",
        darkTopbg: "hsl(232, 19%, 15%)",
        darkCardbg: "hsl(228, 28%, 20%)",
        darkCardHoverbg: "hsl(228, 40%, 23%)",
        darkGreyText: "hsl(228, 34%, 66%)",
        darkMainText: "hsl(0, 0%, 100%)",

        //#### Light Theme
        lightbg: "hsl(0, 0%, 100%)",
        lightTopbg: "hsl(225, 100%, 98%)",
        lightCardbg: "hsl(227, 47%, 96%)",
        lightCardHoverbg: "hsl(232, 33% 91%)",
        lightGreyText: "hsl(228, 12%, 44%)",
        lightMainText: "hsl(230, 17%, 14%)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontWeight: {
        normal: '400',
        bold: 700
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

