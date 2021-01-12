/**
 * This file renders a very simple HTML page that will get screenshotted to
 * form the Twitter social card.
 */

<template>
  <div class="min-h-screen grid place-items-center place-content-center">
    <div
      class="ring-4 ring-offset-2 ring-black rounded flex items-center"
      id="image"
    >
      <div class="m-14">
        <h1 class="text-8xl">
          {{ title }}
        </h1>

        <h2
          v-if="subtitle"
          class="mt-6 text-5xl"
        >
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #image {
    height: 628px;
    width: 1200px;
  }
</style>

<script>
export default {
  layout: 'empty',

  computed: {
    subtitle () {
      return this.$route.query.subtitle || 'by Blake Kostner'
    },

    title () {
      return this.$route.query.title || 'Blake Kostner'
    }
  }
}
</script>
