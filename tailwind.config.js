/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      pink: {
        100: "#FFEAE7",
        200: "#FFD1CF",
        300: "#FFB7BA",
        400: "#FFA5B2",
        500: "#FF87A4",
        600: "#DB628B",
        700: "#B74476",
        800: "#932B62",
        900: "#7A1956",
      },
      blue: {
        100: "#DDFFFA",
        200: "#BCFFFB",
        300: "#9BFCFF",
        400: "#82F1FF",
        500: "#59E1FF",
        600: "#41B3DB",
        700: "#2C89B7",
        800: "#1C6393",
        900: "#11477A",
      },
      yellow: {
        100: "#FFFDE1",
        200: "#FFFAC3",
        300: "#FFF7A4",
        400: "#FFF48E",
        500: "#FFF069",
        600: "#DBCB4C",
        700: "#B7A734",
        800: "#938421",
        900: "#7A6B14",
      },
      gray: {
        50: "#f9f9f9",
        100: "#f2f2f2",
        200: "#e9e9e9",
        300: "#d9d9d9",
        400: "#b6b6b6",
        500: "#969696",
        600: "#6d6d6d",
        700: "#2f3339",
        800: "#282b2f",
        900: "#1b1b1b",
      },
      orange: {
        500: "#FDBA74",
      },
      white: "#FFFFFF",
    },
    fontFamily: {
      heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
    },
    extend: {
      animation: {
        "slide-in-down":
          "slide-in-down 0.3s cubic-bezier(0, 0, 0, 1.5) forwards",
        "slide-out-up":
          "slide-out-up 0.3s cubic-bezier(0, 0, 1, -0.5) forwards",
      },
      keyframes: {
        "slide-in-down": {
          from: {
            transform: "translate3d(0, 0, 0)",
          },
          to: {
            transform: "translate3d(0, -30%, 0)",
          },
        },
        "slide-out-up": {
          from: {
            transform: "translate3d(0, -100%, 0)",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
