<template>
  <div class="flex-1 py-24 sm:py-32">
    <article class="mx-auto max-w-3xl text-base leading-7 text-sand-12">
      <p
        class="sm:text-xl lg:text-2xl font-semibold leading-7 text-orange-400 dark:text-violet-600"
      >
        {{ humanDate(data?.createdAt) }}
      </p>
      <h1
        class="mt-2 text-xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-6xl text-balance"
      >
        {{ data?.title }}
      </h1>

      <div
        v-if="isOutOfDate(data?.createdAt)"
        class="border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-400/10 dark:border-yellow-500 p-4 my-8"
      >
        <div class="flex">
          <div class="flex-shrink-0">
            <ExclamationTriangleIcon
              class="h-5 w-5 text-yellow-400 dark:text-yellow-500"
              aria-hidden="true"
            />
          </div>
          <div class="ml-3">
            <p class="text-sm text-yellow-700 dark:text-yellow-500">
              This article was written over 2 years ago. Information and code
              examples may be out of date.
            </p>
          </div>
        </div>
      </div>

      <div class="text-pretty prose dark:prose-invert">
        <ContentDoc :value="data" />
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ExclamationTriangleIcon } from "@heroicons/vue/20/solid";

const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

if (data?.value?.title == null) {
  showError({
    statusCode: 404,
    message: "Reading not found",
  });
}
</script>
