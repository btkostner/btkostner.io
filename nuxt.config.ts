import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"],
  },

  colorMode: {
    classSuffix: "",
  },

  meta: {
    bodyAttrs: {
      class: "min-h-screen bg-neutral-100 dark:bg-neutral-900",
    },
    htmlAttrs: {
      class: "min-h-screen",
    },
  },

  modules: ["@nuxt/content", "@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],
});
