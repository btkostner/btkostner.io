<template>
  <div>
    <div
      class="content-stretch border-red-cray-200 bg-whitewashed-fence-100 dark:border-mirage-of-violets-700 dark:bg-whitewashed-fence-900 relative z-0 grid min-h-[40vh] items-stretch justify-items-stretch overflow-hidden border-b-2"
    >
      <div
        class="bg-red-cray-100 dark:bg-red-cray-900 absolute top-0 left-[-25vmax] -z-10 h-[100vmax] w-[140vmax] rounded-full blur-[200vmax]"
      />

      <div
        class="bg-mirage-of-violets-200/75 dark:bg-mirage-of-violets-900/50 absolute bottom-0 right-[-35vmax] -z-10 h-[100vmax] w-[120vmax] rounded-full blur-[256px]"
      />

      <div
        class="mx-auto grid h-full w-full max-w-screen-xl flex-row items-center px-4 py-4"
      >
        <div class="mx-auto max-w-screen-xl py-20">
          <header class="text-black dark:text-white">
            <h1
              class="text-xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-6xl"
            >
              Readings By Blake.
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
      :where="{ _type: 'markdown' }"
      :sort="{ createdAt: -1 }"
    >
      <ul class="my-20 mx-auto max-w-3xl space-y-20 px-4 py-4">
        <li
          v-for="reading in readings"
          :key="reading._id"
          class="group relative flex flex-col items-start"
        >
          <h2
            class="text-base text-zinc-800 dark:text-zinc-100 sm:text-xl lg:text-2xl"
          >
            <div
              class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-200/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-neutral-800/50 sm:-inset-x-6 sm:rounded-3xl"
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
            class="text-mirage-of-violets-500 dark:text-mirage-of-violets-600 relative z-10 order-first mb-3 flex items-center text-sm"
            :datetime="reading.createdAt"
          >
            {{ humanDate(reading.createdAt) }}
          </time>

          <p
            class="relative z-10 mt-2 text-base text-zinc-600 dark:text-zinc-400"
          >
            {{ reading.description }}
          </p>

          <div
            aria-hidden="true"
            class="text-red-cray-500 relative z-10 mt-4 flex items-center text-sm font-medium"
          >
            Read article
            <ChevronRightIcon
              class="ml-1 h-4 w-4 stroke-current transition group-hover:translate-x-1"
            />
          </div>
        </li>
      </ul>
    </ContentQuery>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/outline";

useHead({
  title: "Readings By Blake Kostner",
});

const humanDate = (isoDate: string) => {
  return Intl.DateTimeFormat("en-US").format(new Date(isoDate));
};
</script>
