/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      signature:['Great Vibes'],  
    },
    colors: {
      background: "#3b383f",
      primary: "#2d2933",
      secondary: "#5e5a63",
      accent: "#f7914d",
      head:'#f2f2f2',
      text:'#726f77',
      dark:'#1f2937',
      blue:'#185abd'
    },
  },
  plugins: [],
};
