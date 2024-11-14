const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        text: "#FFFFFF",
        error: {
          DEFAULT: "#FF0000",
          accent: "#FF4D4D",
        },
        success: {
          DEFAULT: "#00FF00",
          accent: "#4DFF4D",
        },
      },
      fontFamily: {
        sans: ["Orbitron", "sans-serif"],
      },
      spacing: {
        4: "1rem",
        8: "2rem",
        16: "4rem",
      },
      borderRadius: {
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    plugin(function ({ addUtilities }) {
      const fallbackHeightUtilities = {
        "@supports not (height: 100dvh)": {
          ".h-dvh": { height: "100vh" },
          ".min-h-dvh": { "min-height": "100vh" },
          ".max-h-dvh": { "max-height": "100vh" },
        },
        "@supports not (height: 100lvh)": {
          ".h-lvh": { height: "100vh" },
          ".min-h-lvh": { "min-height": "100vh" },
          ".max-h-lvh": { "max-height": "100vh" },
        },
        "@supports not (height: 100svh)": {
          ".h-svh": { height: "100vh" },
          ".min-h-svh": { "min-height": "100vh" },
          ".max-h-svh": { "max-height": "100vh" },
        },
      };

      addUtilities(fallbackHeightUtilities, ["responsive"]);
    }),
  ],
};
