/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
    colors: {
      text: {
        DEFAULT: "#f0f0fb",
        dark: "#070F2B",
      },
      background: {
        DEFAULT: "#070f2b",
        dark: "#070f2b",
      },
      primary: {
        DEFAULT: "#070F2B",
        dark: "#070F2B",
      },
      secondary: {
        DEFAULT: "#dedcff",
        dark: "#1B1A55",
      },
      accent: {
        DEFAULT: "#535C91",
        dark: "#535C91",
      },
      lighter: {
        DEFAULT: "#f0f0fb",
        dark: "#191a09",
      },
    },
  },
  plugins: [],
};
