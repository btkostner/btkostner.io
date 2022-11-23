export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: "min-h-screen bg-neutral-100 dark:bg-neutral-900",
      },
      htmlAttrs: {
        class: "min-h-screen",
      },
    },
  },

  build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"],
  },

  colorMode: {
    classSuffix: "",
  },

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

  modules: ["@nuxt/content", "@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],
});
