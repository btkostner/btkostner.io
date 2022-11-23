<template>
  <div>
    <div class="pointer-coarse:bottom-8 pointer-fine:top-0 fixed z-40 w-full">
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
              'shadow-border pointer-coarse:px-6 pointer-coarse:py-3 relative inline-flex items-center px-4 py-2 text-sm font-medium hover:z-30 hover:shadow-orange-500 focus:z-20 focus:shadow-orange-500 focus:outline-none': true,
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
            class="shadow-border relative z-10 inline-flex items-center rounded-full bg-neutral-300/40 px-4 py-2 text-sm font-medium text-neutral-900 shadow-gray-400/60 hover:z-30 hover:shadow-orange-500 focus:z-20 focus:shadow-orange-500 focus:outline-none dark:bg-neutral-800/80 dark:text-white"
            @click="toggleAppearanceDark"
          >
            <SunIcon v-show="!isAppearanceDark" class="w-5" />
            <MoonIcon v-show="isAppearanceDark" class="w-5" />
            <span class="sr-only">Appearance</span>
          </button>
        </div>
      </nav>
    </div>

    <slot />

    <footer
      class="border-red-cray-200 pointer-coarse:pb-20 dark:border-mirage-of-violets-700 border-t-2 bg-neutral-100 dark:bg-neutral-900"
    >
      <div
        class="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="flex justify-center space-x-6 md:order-2">
          <a
            href="https://github.com/btkostner"
            class="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
            target="_blank"
            rel="me noopener noreferrer"
          >
            <span class="sr-only">GitHub</span>
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>

          <a
            href="https://twitter.com/nerdy_btkostner"
            class="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
            target="_blank"
            rel="me noopener noreferrer"
          >
            <span class="sr-only">Twitter</span>
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </a>

          <a
            href="https://mastodon.social/@btkostner"
            class="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
            target="_blank"
            rel="me noopener noreferrer"
          >
            <span class="sr-only">Mastodon</span>
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"
              />
            </svg>
          </a>

          <a
            href="https://steamcommunity.com/id/mkrar"
            class="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
            target="_blank"
            rel="me noopener noreferrer"
          >
            <span class="sr-only">Steam</span>
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/btkostner/"
            class="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
            target="_blank"
            rel="me noopener noreferrer"
          >
            <span class="sr-only">LinkedIn</span>
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
        </div>

        <div class="mt-8 md:order-1 md:mt-0">
          <p
            class="text-center text-base text-neutral-500 dark:text-neutral-400"
          >
            Made with love, magic, and drugs.
          </p>
        </div>
      </div>
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
