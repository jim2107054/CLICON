/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#1E3A8A",
        secondary: "#1B6392",
        btnColor: "#FA8232",
        blueButton:"#2DA5F3",
        greenButton:"#2DB224",
        yellowButton:"#F3DE6D",
        lightOrange:"#FFE7D6",
        lightBlue:'#124261',
      },
      rotate: {
        2.5: '2.5deg',
      },
    },
  },
  plugins: [],
}