// Dependencies
import colors from "./config/tailwind/colors";
import fontFamily from "./config/tailwind/fonts";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,scss,sass,css}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',  // Default padding size (16px)
        xs: '1rem',       // Extra small screens (phones, etc.)
        sm: '1.5rem',     // Small screens (tablets, etc.)
        md: '2rem',       // Medium screens (desktops, etc.)
        lg: '2.5rem',     // Large screens (desktops, etc.)
        xl: '3rem',       // Extra large screens (large desktops, etc.)
      },
    },
    extend: {
      colors,
      fontFamily
    },
  },
  plugins: [],
};
