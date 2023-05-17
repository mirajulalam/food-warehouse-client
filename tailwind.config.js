/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {
        primary: "#a991f7",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#131313",
        warning: "#FBBD23",
        "base-100": "#ffffff",
      },
      screens: {
        mobileMd: "375px",
        mobileLg: "425px",
        tablet: "768px",
        laptopSm: "800px",
        iPadAir: "820px",
        laptopMd: "1024px",
        laptopLg: "1280px",
        desktopSm: "1366px",
        desktopMd: "1440px",
        desktopLg: "1920px",
      },
    },
    "dark",
    "cupcake",
  ],
  plugins: [require("daisyui")],
}

