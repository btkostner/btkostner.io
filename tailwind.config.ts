import tailwindTouch from "tailwindcss-touch";
import tailwindTypography from "@tailwindcss/typography";

function radixColor(name: string) {
  const scale = Array.from({ length: 12 }, (_, i) => {
    const id = i + 1;
    return [
      [id, `var(--${name}-${id})`],
      [`a${id}`, `var(--${name}-a${id})`],
    ];
  }).flat();

  return Object.fromEntries(scale);
}

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
      colors: {
        orange: {
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
        sand: radixColor("sand"),
        violet: {
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
      },

      typography: () => ({
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: "var(--sand-2)",
              color: "var(--sand-11)",
            },
          },
        },
      }),
    },
  },
};
