<template>
  <div>
    <header
      class="fixed z-40 w-full pointer-coarse:bottom-16 pointer-fine:top-0"
    >
      <nav
        class="mx-auto flex max-w-screen-xl place-content-between items-center px-4 py-4"
      >
        <div
          class="inline-flex space-x-[1px] rounded-full backdrop-blur-lg backdrop-brightness-200"
        >
          <NuxtLink
            v-for="(item, idx) in navigation"
            :key="item.name"
            :to="item.href"
            :class="{
              'relative inline-flex items-center px-4 py-2 text-sm font-medium shadow-border hover:z-30 hover:shadow-orange-500 focus:z-20 focus:shadow-orange-500 focus:outline-none': true,
              'z-10 bg-neutral-100/80 text-neutral-900 shadow-orange-500 dark:bg-neutral-900/90 dark:text-neutral-50 dark:shadow-orange-600':
                item.href === $route.path,
              'bg-neutral-300/40 shadow-gray-400/60 dark:bg-neutral-800/80 dark:text-white':
                item.href !== $route.path,
              'rounded-l-full': idx === 0,
              'rounded-r-full': idx === navigation.length - 1,
            }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <div
          class="inline-flex space-x-[1px] rounded-full backdrop-blur-lg backdrop-brightness-200"
        >
          <button
            class="focus:outline-none': true, 'z-10 relative inline-flex items-center rounded-full bg-neutral-100/80 bg-neutral-300/40 px-4 py-2 text-sm font-medium text-neutral-900 shadow-border shadow-gray-400/60 hover:z-30 hover:shadow-orange-500 focus:z-20 focus:shadow-orange-500 dark:bg-neutral-900/90 dark:bg-neutral-800/80 dark:text-neutral-50 dark:text-white"
            @click="toggleAppearanceDark"
          >
            <SunIcon v-show="!isAppearanceDark" class="w-5" />
            <MoonIcon v-show="isAppearanceDark" class="w-5" />
            <span class="sr-only">Appearance</span>
          </button>
        </div>
      </nav>
    </header>

    <slot />

    <footer
      class="mx-auto flex max-w-screen-xl place-content-center items-center px-4 py-4 text-sm font-medium pointer-coarse:pt-20"
    >
      <p class="text-gray-600 dark:text-gray-400">
        Made by Blake in Colorado. <br />
        Powered by Nuxt and voodoo magic.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "About", href: "/" },
  { name: "Reading", href: "/reading" },
];

const colorMode = useColorMode();
const isAppearanceDark = computed(() => colorMode.value === "dark");
const toggleAppearanceDark = () => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
};
</script>
