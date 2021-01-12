<template>
  <main class="p-4 divide-y divide-gray-200 max-w-3xl mx-auto xl:max-w-5xl">
    <div class="py-8 space-y-2 md:space-y-5">
      <h1 class="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {{ post.title }}
      </h1>

      <p class="text-lg leading-7 text-gray-500">
        <span class="sr-only">Published</span> {{ humanDate(post.createdAt) }}
      </p>
    </div>

    <article class="prose lg:prose-lg">
      <nuxt-content :document="post" />
    </article>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: this.post.title.trim(),

      meta: [
        { hid: 'twitter:title', name: 'twitter:title', content: this.post.title.trim() },
        { hid: 'twitter:description', name: 'twitter:description', content: this.post.description.trim() },
        { hid: 'twitter:image', name: 'twitter:image', content: `https://btkostner.io/public/social/${this.post.slug}-twitter.png` },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },

  asyncData: async ({ $content, error, params }) => ({
    post: await $content('blog', params.slug)
      .where({ published: true })
      .fetch()
      .catch((e) => error({ statusCode: 404, message: 'Blog Post Not Found' }))
  }),

  methods: {
    humanDate (v) {
      const localization = (process.client) ? undefined : 'en-US'

      return new Date(v).toLocaleDateString(localization, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    }
  }
}
</script>
