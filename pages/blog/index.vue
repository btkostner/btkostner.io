<template>
  <main class="p-4 divide-y divide-gray-200">
    <div class="py-8 space-y-2 md:space-y-5">
      <h1 class="text-4xl leading-9 font-extrabold font-display text-gray-900 md:text-6xl">
        the nerd zone
      </h1>

      <p class="text-lg leading-7 text-gray-500 max-w-3xl">
        Here's most of my thoughts written out. Nerdy stuff. Helpful tips I
        don't want to lose. Random rants about technology. It's all here (or
        soon to be.)
      </p>
    </div>

    <div>
      <ul class="divide-y divide-gray-200">
        <li
          v-for="post in posts"
          :key="post.slug"
          class="py-12"
        >
          <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
            <dl>
              <dt class="sr-only">Published on</dt>
              <dd class="text-base leading-6 font-medium text-gray-500">
                <time :datetime="post.createdAt">
                  {{ humanDayOfWeek(post.createdAt) }}<br />
                  {{ humanDate(post.createdAt) }}
                </time>
              </dd>
            </dl>

            <div class="space-y-5 xl:col-span-3">
              <div class="space-y-6">
                <h2 class="text-2xl leading-8 font-bold tracking-tight">
                  <nuxt-link class="text-gray-900" :to="`/blog/${post.slug}`">
                    {{ post.title }}
                  </nuxt-link>
                </h2>
                <div class="prose max-w-3xl text-gray-500">
                  {{ post.description }}
                </div>
              </div>
              <div class="text-base leading-6 font-medium">
                <nuxt-link
                  class="text-red-700 hover:text-red-800"
                  :aria-label="`Read &quot;${post.title}&quot;`"
                  :to="`/blog/${post.slug}`"
                >
                  Read more →
                </nuxt-link>
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
    title: 'Blog',

    link: [
      { hid: 'rss', rel: 'alternative', type: 'application/rss+xml', title: 'btkostner.io Blog', href: 'https://btkostner.io/blog.rss.xml' },
      { hid: 'atom', rel: 'alternative', type: 'application/atom+xml', title: 'btkostner.io Blog', href: 'https://btkostner.io/blog.atom.xml' },
      { hid: 'feed', rel: 'alternative', type: 'application/feed+json', title: 'btkostner.io Blog', href: 'https://btkostner.io/blog.json' }
    ]
  },

  async asyncData({ $content }) {
    const posts = await $content('blog')
      .only(['title', 'description', 'slug', 'createdAt'])
      .where({ published: true })
      .sortBy('createdAt', 'desc')
      .limit(10)
      .fetch()

    const tagPosts = await $content('blog')
      .only(['tags'])
      .fetch()

    const tags = await tagPosts
      .map((p) => p.tags)
      .reduce((a, b) => a.concat(b))
      .filter((t, i, a) => (a.indexOf(t) === i))
      .sort()

    return { posts, tags }
  },

  methods: {
    humanDate (v) {
      const localization = (process.client) ? undefined : 'en-US'

      return new Date(v).toLocaleDateString(localization, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    },

    humanDayOfWeek (v) {
      const localization = (process.client) ? undefined : 'en-US'

      return new Date(v).toLocaleDateString(localization, {
        weekday: 'long'
      })
    }
  }
}
</script>
