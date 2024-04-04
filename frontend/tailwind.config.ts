/** @type {import('tailwindcss').Config} */

const {default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blk: {
          primary: "#2C3E50",
          secondary: "#141E30",
        },
        background: {
          pink: "#FF416C",
          orange: "#FF4B2B",
        },
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      sans: ["Poppins", "sans-serif"],
      fredoka: ["Fredoka", "sans-serif"],
    },
  },
  // darkMode: "class",
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

