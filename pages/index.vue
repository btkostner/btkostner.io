<template>
  <main class="p-4">
    <h1 class="text-5xl">
      Blake Kostner
    </h1>

    <div class="flex flex-col justify-between items-center text-2xl">
      <div class="flex -mx-4 mt-6 mb-2">
        <a
          aria-label="GitHub"
          class="mx-4 text-gray-700 dark:text-gray-400 hover:text-red-600"
          href="https://github.com/btkostner"
          rel="noopener noreferrer"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>

        <a
          aria-label="Steam"
          class="mx-4 text-gray-700 dark:text-gray-400 hover:text-red-600"
          href="https://steamcommunity.com/id/mkrar/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'steam']" />
        </a>

        <a
          aria-label="Twitter"
          class="mx-4 text-gray-700 dark:text-gray-400 hover:text-red-600"
          href="https://twitter.com/nerdy_btkostner"
          rel="noopener noreferrer"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>

        <a
          aria-label="LinkedIn"
          class="mx-4 text-gray-700 dark:text-gray-400 hover:text-red-600"
          href="https://www.linkedin.com/in/btkostner/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </div>
    </div>

    <div class="mt-6 text-center underline">
      <nuxt-link to="/blog">
        blog
      </nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'centered'
}
</script>
