/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#931C1C",
      secondary: "#F5730A",
      tertiary: "#871400",
      "white-100": "#ffffff",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "pattern": "url('/src/assets/peaks.svg')",
    },
  },
};
export const plugins = [];
