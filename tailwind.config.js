/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ['Open+Sans'],
        Montserrat: ['Montserrat'],
        Inter: ['Inter']
      },
      fontSize: {
        text_54px: ['3.375rem'],
        text_32px: ['2rem']
      },
      lineHeight: {
        LH_65px: ['4.114rem']
      }, colors: {
        Section3colr: 'background: linear-gradient(180deg, rgba(4,19,52,1) 90%, rgba(249,213,73,1) 90%);',
      },
    },
  },
  plugins: [],
}
