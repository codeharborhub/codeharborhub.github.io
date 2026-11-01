const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },

  darkMode: ["class", '[data-theme="dark"]'],

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--ifm-color-primary)",
          dark: "var(--ifm-color-primary-dark)",
          light: "var(--ifm-color-primary-light)",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        // sans: ['"Inter"', ...fontFamily.sans],
        jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
      },

      boxShadow: {
        brand: "0 10px 30px color-mix(in srgb, var(--ifm-color-primary) 20%, transparent)",
      },

      borderRadius: {
        sm: "4px",
      },
      screens: {
        sm: "0px",
        lg: "997px",
      },
      colors: {},
    },
  },
  plugins: [],
};