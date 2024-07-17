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
        DEFAULT: "#050315",
        dark: "#ebe9fc",
      },
      background: {
        DEFAULT: "#fbfbfe",
        dark: "#010104",
      },
      primary: {
        DEFAULT: "#2f27ce",
        dark: "#3a31d8",
      },
      secondary: {
        DEFAULT: "#dedcff",
        dark: "#020024",
      },
      accent: {
        DEFAULT: "#433bff",
        dark: "#0600c2",
      },
      lighter: {
        DEFAULT: "#f0f0fb",
        dark: "#191a09",
      },
    },
  },
  plugins: [],
};
