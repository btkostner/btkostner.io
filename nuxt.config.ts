import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: "min-h-screen bg-sand-1 text-sand-11",
      },
      charset: "utf-8",
      htmlAttrs: {
        class: "min-h-screen",
        lang: "en-US",
      },
      viewport: "width=device-width, initial-scale=1",
    },
  },

  build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"],
  },

  css: ["~/assets/css/tailwind.css"],

  colorMode: {
    classSuffix: "",
  },

  compatibilityDate: "2025-07-15",

  content: {
    highlight: {
      preload: [
        "diff",
        "json",
        "js",
        "ts",
        "css",
        "shell",
        "html",
        "md",
        "yaml",
      ],

      theme: {
        default: "github-light",
        dark: "github-dark",
        light: "github-light",
      },
    },
  },

  experimental: {
    writeEarlyHints: true,
  },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxtjs/color-mode",
    // TODO: Support with Nuxt 4 and Tailwind 4 is not working yet.
    // "@nuxtjs/tailwindcss",
    "nuxt-og-image",
  ],

  site: {
    url: "https://btkostner.io",
  },

  tailwindcss: {
    experimental: {
      tailwindcss4: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
