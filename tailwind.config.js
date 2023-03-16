/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Color-Cyan": "#2DAFB5",
        "Color-Dark-Blue": "#05122C",
        "Color-Gray": "#e3e8f8",
      },
      screens: {
        ph: { max: "767px" },
        // => @media (min-width: 475px) { ... }

        tab: { max: "991px" },
        // => @media (min-width: 768px) { ... }

        laptop: { max: "1199px" },
        // => @media (min-width: 992px) { ... }

        desktop: "1200px",
        // => @media (min-width: 1200px) { ... }
      },
    },
  },
  plugins: [],
}
