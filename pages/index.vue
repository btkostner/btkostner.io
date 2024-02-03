<template>
  <div
    class="flex-1 content-stretch relative z-0 grid items-stretch justify-items-stretch overflow-hidden"
  >
    <div
      class="absolute -z-10 left-0 right-0 top-0 h-96 bg-gradient-to-b from-orange-400 via-red-200 dark:from-violet-700 dark:via-fuchsia-950 to-sand-1 opacity-60"
    />

    <div
      class="mx-auto grid h-full w-full max-w-screen-xl flex-row items-center px-4 px-4 py-4"
    >
      <div class="mx-auto max-w-screen-xl py-20">
        <header class="text-black dark:text-white">
          <h1
            class="text-xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-6xl"
          >
            Hi!<br />
            My name is
            <span
              class="before:bg-orange-400 dark:before:bg-violet-600 relative z-10 ml-2 inline-block text-white before:absolute before:-top-0 before:left-2 before:-bottom-0 before:right-2 before:-z-10 before:block dark:text-white before:scale-110 before:rotate-[-2deg]"
              >Blake Kostner</span
            ><br />
            and I’m a Site Reliability Engineer.
          </h1>

          <h2 class="pt-6 text-base sm:text-xl lg:text-2xl">
            And Elixir programmer.<br class="lg:hidden" />
            And front-end web developer.<br class="lg:hidden" />
            And all around nerd.
          </h2>

          <p class="mt-4 -ml-2">
            <span
              class="inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-bold text-red-700 dark:bg-red-600/5 dark:text-red-400 dark:ring-1 dark:ring-inset dark:ring-red-400/20"
            >
              <svg
                class="-ml-1 mr-1.5 h-3 w-3 fill-red-500 dark:fill-red-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              Unavailable For Work
            </span>
          </p>
        </header>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "About Blake Kostner",
});

defineOgImageComponent("Page", {
  title: "Blake Kostner",
  description: "I’m a Site Reliability Engineer.",
});
</script>
