/**
 * This file renders a very simple HTML page that will get screenshotted to
 * form the social media cards.
 */

<template>
  <div class="min-h-screen grid place-items-center place-content-center bg-gray-900">
    <div
      :class="`ring-4 ring-offset-2 ring-black rounded flex items-center relative overflow-hidden ${field}`"
      id="image"
    >
      <div class="m-8">
        <h1 class="text-6xl leading-9 font-extrabold font-display text-red-600">
          {{ post.title }}
        </h1>

        <h2 class="mt-6 text-3xl leading-7 text-gray-400">
          by {{ post.authorName }}
        </h2>

        <div class="text-base leading-6 font-medium mt-8 text-red-500">
          Read more →
        </div>
      </div>

      <div class="absolute bottom-0 right-0 h-96 w-96 -m-48 transform -rotate-45">
        <div class="h-8 w-full mt-16 bg-gray-800" />
        <div class="h-8 w-full mt-6 bg-gray-800" />
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
