/**
 * This file renders a very simple HTML page that will get screenshotted to
 * form the social media cards.
 */

<template>
  <div class="min-h-screen grid place-items-center place-content-center bg-gray-900">
    <div
      :class="`ring-4 ring-offset-2 ring-gray-200 ring-offset-gray-900 rounded flex items-center relative overflow-hidden ${field}`"
      id="image"
    >
      <div class="absolute bottom-0 right-0 h-96 w-96 -m-48 transform -rotate-45">
        <div class="h-8 w-full mt-16 bg-gray-800" />
        <div class="h-8 w-full mt-6 bg-gray-800" />
      </div>

      <div class="m-8 z-10">
        <h1 class="text-6xl leading-1 font-extrabold font-display text-gray-200">
          {{ post.title }}
        </h1>

        <div class="text-base font-medium mt-6 text-red-500">
          Read more →
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

  .leading-1 {
    line-height: 0.92;
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
