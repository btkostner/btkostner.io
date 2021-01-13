<template>
  <main class="p-4 divide-y divide-gray-200 max-w-3xl mx-auto xl:max-w-5xl">
    <div class="py-8 space-y-2 md:space-y-5">
      <h1 class="text-4xl leading-9 font-extrabold font-display text-gray-900 md:text-6xl">
        {{ post.title }}
      </h1>

      <p class="text-lg leading-7 text-gray-500">
        <span class="sr-only">Published</span> {{ humanDate(post.createdAt) }}
      </p>
    </div>

    <article class="prose rose-lg lg:prose-xl">
      <nuxt-content :document="post" />
    </article>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: this.post.title,

      meta: [
        { hid: 'description', name: 'description', content: this.post.description },

        { hid: 'twitter:title', name: 'twitter:title', content: this.post.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.post.description },
        { hid: 'twitter:image', name: 'twitter:image', content: `https://btkostner.io${this.post.twitterImage}` },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: this.post.title },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@nerdy_btkostner' }
      ],

      link: [
        { hid: 'rss', rel: 'alternative', type: 'application/rss+xml', title: 'btkostner.io Blog', href: 'https://btkostner.io/blog.rss.xml' },
        { hid: 'atom', rel: 'alternative', type: 'application/atom+xml', title: 'btkostner.io Blog', href: 'https://btkostner.io/blog.atom.xml' },
        { hid: 'feed', rel: 'alternative', type: 'application/feed+json', title: 'btkostner.io Blog', href: 'https://btkostner.io/blog.json' }
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
