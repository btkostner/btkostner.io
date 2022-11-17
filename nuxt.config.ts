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

  experimental: {
    writeEarlyHints: true,
  },

  modules: ["@nuxt/content", "@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],
});
