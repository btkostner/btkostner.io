/**
 * This file renders a very simple HTML page that will get screenshotted to
 * form the social media cards.
 */

<template>
  <div class="min-h-screen grid place-items-center place-content-center">
    <div
      :class="`ring-4 ring-offset-2 ring-black rounded flex items-center ${field}`"
      id="image"
    >
      <div class="m-8">
        <h1 class="text-6xl leading-9 font-extrabold font-display text-gray-900">
          {{ post.title }}
        </h1>

        <h2 class="mt-6 text-3xl leading-7 text-gray-500">
          by {{ post.authorName }}
        </h2>

        <div class="text-base leading-6 font-medium mt-6">
          <nuxt-link
            class="text-red-700 hover:text-red-800"
            :aria-label="`Read &quot;${post.title}&quot;`"
            :to="`/blog/${post.slug}`"
          >
            Read more →
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .twitterImage {
    height: 335px;
    width: 600px;
  }
</style>

<script>
export default {
  layout: 'empty',

  async asyncData ({ $content, error, ssrContext }) {
    const { contentPath, contentField } = ssrContext
    const post = await $content(contentPath).fetch()

    return { post, field: contentField }
  }
}
</script>
