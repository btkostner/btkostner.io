<template>
  <main class="p-4 transition motion-reduce:transition-none">
    <div class="py-8 space-y-4 md:space-y-5">
      <h1 class="text-6xl leading-9 font-extrabold font-display text-center text-red-700 dark:text-red-600 md:text-8xl">
        TIL
      </h1>

      <p class="text-lg leading-7 text-center text-gray-500 dark:text-gray-300">
        Today I learned something interesting,</br>and now it's saved here forever.
      </p>
    </div>

    <div class="block max-w-3xl mx-auto">
      <ul class="divide-y divide-gray-200 dark:divide-gray-600 transition motion-reduce:transition-none">
        <li
          v-for="til in tils"
          :key="til.slug"
          class="py-12"
        >
          <article class="space-y-2">
            <dl>
              <dt class="sr-only">Learned on</dt>
              <dd class="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                <time :datetime="til.createdAt">
                  {{ humanDate(til.createdAt) }}
                </time>
              </dd>
            </dl>

            <div class="space-y-5 xl:col-span-3">
              <div class="space-y-6">
                <h2 class="text-2xl leading-8 font-bold tracking-tight">
                  <nuxt-link class="text-gray-900 dark:text-gray-200" :to="`/til/${til.slug}`">
                    {{ til.title }}
                  </nuxt-link>
                </h2>
                <div class="prose max-w-full dark:prose-dark transition motion-reduce:transition-none">
                  <nuxt-content :document="til" />
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  head: {
    title: 'TILs by Blake'
  },

  async asyncData({ $content }) {
    const tils = await $content('tils')
      .sortBy('createdAt', 'desc')
      .limit(10)
      .fetch()

    return { tils }
  },

  methods: {
    humanDate (v) {
      const localization = (process.client) ? undefined : 'en-US'

      return new Date(v).toLocaleDateString(localization, {
        day: 'numeric',
        month: 'long',
        weekday: 'long',
        year: 'numeric'
      })
    }
  }
}
</script>
