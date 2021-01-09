<template>
  <main class="p-4">
    <h1 class="text-5xl">
      Blake Kostner
    </h1>

    <div class="flex flex-col justify-between items-center text-2xl">
      <div class="flex -mx-4 mt-4 mb-2">
        <a
          class="mx-4 text-gray-700 hover:text-red-600"
          href="https://github.com/btkostner"
          rel="noopener noreferrer"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>

        <a
          class="mx-4 text-gray-700 hover:text-red-600"
          href="https://twitter.com/nerdy_btkostner"
          rel="noopener noreferrer"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>

        <a
          class="mx-4 text-gray-700 hover:text-red-600"
          href="https://www.linkedin.com/in/btkostner/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'centered'
})
</script>
