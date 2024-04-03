/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary: {
        100:'#2C3E50',
        200:'#141E30',
      },
      secondary: {
        100: '#FF416C',
        200: '#FF4B2B',
      },
      white: '#FFFFFF',
    },
    }
  },
  plugins: [],
}

