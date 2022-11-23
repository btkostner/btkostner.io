import tailwindTouch from "tailwindcss-touch";
import tailwindTypography from "@tailwindcss/typography";

export default {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    "nuxt.config.ts",
  ],

  darkMode: "class",

  plugins: [tailwindTouch(), tailwindTypography],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },

      boxShadow: {
        border: "0 0 0 2px rgba(0, 0, 0, 0.3)",
      },

      colors: {
        "mirage-of-violets": {
          100: "#E7E0E6",
          200: "#D1C1CE",
          300: "#BDA3B7",
          400: "#AA85A1",
          500: "#99668E",
          600: "#8A457C",
          700: "#7B1E6B",
          800: "#55144A",
          900: "#320C2B",
        },
        "whitewashed-fence": {
          100: "#E5E1DB",
          200: "#CAC5BE",
          300: "#AEAAA3",
          400: "#949089",
          500: "#7A7670",
          600: "#605D59",
          700: "#484642",
          800: "#31302D",
          900: "#1C1B1A",
        },
        "red-cray": {
          100: "#F7DCD8",
          200: "#F1B9B0",
          300: "#EB9484",
          400: "#E66B4D",
          500: "#C9502A",
          600: "#A03F21",
          700: "#783019",
          800: "#532111",
          900: "#30130A",
        },
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: {
              background: theme("colors.neutral.50"),
              color: theme("colors.neutral.900"),
            },
          },
        },
        invert: {
          css: {
            pre: {
              background: theme("colors.neutral.800"),
              color: theme("colors.neutral.50"),
            },
          },
        },
      }),
    },
  },
};
