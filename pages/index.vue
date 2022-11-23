<template>
  <div
    class="content-stretch bg-whitewashed-fence-100 dark:bg-whitewashed-fence-900 relative z-0 grid min-h-[90vh] items-stretch justify-items-stretch overflow-hidden"
  >
    <div
      class="bg-red-cray-100 dark:bg-red-cray-900 absolute top-[-100vmax] left-[-100vmax] -z-10 h-[200vmax] w-[200vmax] rounded-full blur-[200vmax]"
    />
    <div
      class="bg-mirage-of-violets-200 dark:bg-mirage-of-violets-900 absolute bottom-[-120vmax] right-[-120vmax] -z-10 h-[200vmax] w-[200vmax] rounded-full blur-[200vmax]"
    />

    <div
      class="border-red-cray-200 dark:border-mirage-of-violets-700/40 mx-auto grid h-full w-full max-w-screen-xl flex-row items-center bg-neutral-400/10 px-4 px-4 py-4 dark:bg-neutral-800/10 xl:border-l-2 xl:border-r-2"
    >
      <div class="mx-auto max-w-screen-xl py-20">
        <header class="text-black dark:text-white">
          <h1
            class="text-xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-6xl"
          >
            Hi!<br />
            My name is
            <span
              class="before:bg-red-cray-400 dark:before:bg-red-cray-500 relative z-10 ml-2 inline-block text-white before:absolute before:-top-0 before:-left-2 before:-bottom-0 before:-right-2 before:-z-10 before:block dark:text-white"
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
              class="inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-bold text-red-900 dark:bg-red-900 dark:text-red-100"
            >
              <svg
                class="-ml-1 mr-1.5 h-2 w-2 text-red-400/75"
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
</script>
