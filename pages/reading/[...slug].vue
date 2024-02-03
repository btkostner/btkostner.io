<template>
  <div class="flex-1">
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
            <time
              class="block text-sm sm:text-base"
              :datetime="data?.createdAt"
            >
              {{ humanDate(data?.createdAt) }}
            </time>

            <h1
              class="pt-6 text-xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-6xl"
            >
              {{ data?.title }}
            </h1>
          </header>
        </div>
      </div>
    </div>

    <article class="prose dark:prose-invert lg:prose-xl my-20 mx-auto px-4">
      <div
        v-if="isOldArticle"
        class="px-4 border-l-2 border-mirage-of-violets-500 dark:border-mirage-of-violets-800 font-semibold text-gray-900 dark:text-gray-300"
      >
        <p>
          This post was made over two years ago. Some of the information may be
          out of date.
        </p>
      </div>

      <ContentDoc :value="data" />
    </article>
  </div>
</template>

<script setup lang="ts">
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

const isOldArticle = computed(() => {
  if (data?.value?.createdAt == null) {
    return false;
  }

  const current = new Date();
  current.setFullYear(current.getFullYear() - 2);
  return new Date(data.value.createdAt) < current;
});

const humanDate = (isoDate: string) => {
  return Intl.DateTimeFormat("en-US").format(new Date(isoDate));
};
</script>
