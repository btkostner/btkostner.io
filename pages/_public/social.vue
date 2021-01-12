/**
 * This file renders a very simple HTML page that will get screenshotted to
 * form the social media cards.
 */

<template>
  <div class="min-h-screen grid place-items-center place-content-center">
    <div
      :class="`ring-4 ring-offset-2 ring-black rounded flex items-center ${service}`"
      id="image"
    >
      <div class="m-8">
        <h1 class="text-6xl">
          {{ post.title }}
        </h1>

        <h2 class="mt-6 text-3xl">
          by Blake Kostner
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .twitter#image {
    height: 335px;
    width: 600px;
  }
</style>

<script>
export default {
  layout: 'empty',

  async asyncData ({ $content, error, ssrContext }) {
    const { contentPath, socialService } = ssrContext

    const post = await $content(contentPath)
      .fetch()
      .catch((e) => error({ statusCode: 404, message: 'Content Not Found' }))

    return { post, service: socialService }
  }
}
</script>
