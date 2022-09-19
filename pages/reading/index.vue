<template>
  <div class="py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div class="pb-16 text-center">
      <h2
        class="text-base font-semibold uppercase tracking-wide text-indigo-600"
      >
        Reading
      </h2>
      <p
        class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
      >
        Articles, Tidbits, and Links
      </p>
      <p class="mx-auto mt-5 max-w-xl text-xl text-gray-500">
        A grab bag of hand written articles, learned tidbits on the job, and
        links to useful finds.
      </p>
    </div>

    <ContentQuery
      v-slot="{ data: readings }"
      path="reading"
      :only="['title', 'description', 'slug', 'createdAt', 'tags']"
      :where="{ published: true, _type: 'markdown' }"
      :sort="{ createdAt: -1 }"
    >
      <ul class="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <li v-for="reading in readings" :key="reading._id">
          <div class="grid aspect-[5/3] h-full w-full items-end rounded-3xl">
            <h1 class="text-4xl">
              {{ reading.title }}
            </h1>

            <ul class="flex gap-4 px-4 py-4">
              <li
                v-for="tag in reading.tags"
                :key="tag"
                class="flex items-center rounded-full bg-white py-1 pl-2 pr-3 text-sm"
              >
                <span
                  class="border-full mr-1 h-2 w-2 rounded-full bg-green-500"
                ></span>
                {{ tag }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </ContentQuery>
  </div>
</template>
