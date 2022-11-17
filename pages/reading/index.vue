<template>
  <div>
    <div
      class="content-stretch relative z-0 grid min-h-[40vh] items-stretch justify-items-stretch overflow-hidden border-b-2 border-red-cray-200 bg-whitewashed-fence-100 dark:border-mirage-of-violets-700 dark:bg-whitewashed-fence-900"
    >
      <div
        class="absolute top-0 left-[-25vmax] -z-10 h-[100vmax] w-[100vmax] rounded-full bg-red-cray-100 blur-[200vmax] dark:bg-red-cray-900"
      />

      <div
        class="absolute bottom-0 right-[-25vmax] -z-10 h-[100vmax] w-[100vmax] rounded-full bg-mirage-of-violets-100 blur-[256px] dark:bg-mirage-of-violets-900/50"
      />

      <div
        class="mx-auto grid h-full w-full max-w-screen-xl flex-row items-center px-4 py-4"
      >
        <div class="mx-auto max-w-screen-xl py-20">
          <header class="text-black dark:text-white">
            <h1
              class="text-xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-6xl"
            >
              Readings By Blake.<br />
            </h1>

            <h2 class="pt-6 text-base sm:text-xl lg:text-2xl">
              I didn't write everything, but you should still read them.
            </h2>
          </header>
        </div>
      </div>
    </div>

    <ContentQuery
      v-slot="{ data: readings }"
      path="reading"
      :only="['title', 'description', '_path', 'createdAt', 'tags']"
      :where="{ published: true, _type: 'markdown' }"
      :sort="{ createdAt: -1 }"
    >
      <ul class="my-20 max-w-3xl px-4 py-4 mx-auto space-y-20">
        <li
          v-for="reading in readings"
          :key="reading._id"
          class="group relative flex flex-col items-start"
        >
          <h2
            class="text-base sm:text-xl lg:text-2xl text-zinc-800 dark:text-zinc-100"
          >
            <div
              class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-mirage-of-violets-900/50 sm:-inset-x-6 sm:rounded-3xl"
            />

            <NuxtLink :to="reading._path">
              <span
                class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"
              />
              <span class="relative z-10">
                {{ reading.title }}
              </span>
            </NuxtLink>
          </h2>

          <time
            class="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500 md:hidden"
            datetime="2022-09-05"
          >
            <span
              class="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span
                class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"
              />
            </span>
            September 5, 2022
          </time>

          <p
            class="relative z-10 mt-2 text-base text-zinc-600 dark:text-zinc-400"
          >
            {{ reading.description }}
          </p>

          <div
            aria-hidden="true"
            class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
          >
            Read article
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              class="ml-1 h-4 w-4 stroke-current"
            >
              <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </li>
      </ul>
    </ContentQuery>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Readings By Blake Kostner",
});
</script>
