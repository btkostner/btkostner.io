<template>
  <main>
    <section class="flex flex-col min-h-screen w-full bg-gray-100 dark:bg-gray-900">
      <div class="my-8 mx-8 md:my-16 md:mx-16 lg:my-24 lg:mx-24 xl:my-44 xl:mx-44">
        <h1 class="text-gray-800 dark:text-gray-200 mt-4 text-3xl md:mt-8 md:text-4xl lg:text-6xl xl:text-8xl">
          Blake Kostner
        </h1>

        <h2 class="text-red-700 dark:text-red-600 uppercase mt-1 text-lg md:text-xl lg:mt-2 lg:text-2xl xl:text-4xl">
          Full stack web developer
        </h2>
      </div>

      <div class="grid grid-flow-col auto-cols-auto my-4 mx-8 max-w-2xl sm:text-xl md:text-2xl md:my-6 md:mx-16 lg:text-3xl lg:my-8 lg:mx-24 xl:text-4xl xl:my-12 xl:mx-44">
        <a
          aria-label="GitHub"
          class="grid content-center justify-center h-12 w-12 text-gray-700 dark:text-gray-400 hover:text-red-600 focus:text-red-600 dark:hover:text-red-600 dark:focus:text-red-600"
          href="https://github.com/btkostner"
          rel="noopener noreferrer"
          target="_blank"
          title="GitHub"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
          <span class="sr-only">GitHub</span>
        </a>

        <a
          aria-label="Steam"
          class="grid content-center justify-center h-12 w-12 text-gray-700 dark:text-gray-400 hover:text-red-600 focus:text-red-600 dark:hover:text-red-600 dark:focus:text-red-600"
          href="https://steamcommunity.com/id/mkrar/"
          rel="noopener noreferrer"
          target="_blank"
          title="Steam"
        >
          <font-awesome-icon :icon="['fab', 'steam']" />
          <span class="sr-only">Steam</span>
        </a>

        <a
          aria-label="Twitter"
          class="grid content-center justify-center h-12 w-12 text-gray-700 dark:text-gray-400 hover:text-red-600 focus:text-red-600 dark:hover:text-red-600 dark:focus:text-red-600"
          href="https://twitter.com/nerdy_btkostner"
          rel="noopener noreferrer"
          target="_blank"
          title="Twitter"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <span class="sr-only">Twitter</span>
        </a>

        <a
          aria-label="LinkedIn"
          class="grid content-center justify-center h-12 w-12 text-gray-700 dark:text-gray-400 hover:text-red-600 focus:text-red-600 dark:hover:text-red-600 dark:focus:text-red-600"
          href="https://www.linkedin.com/in/btkostner/"
          rel="noopener noreferrer"
          target="_blank"
          title="LinkedIn"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
          <span class="sr-only">LinkedIn</span>
        </a>
      </div>

      <div class="my-4 mx-8 sm:text-xl md:text-2xl md:my-6 md:mx-16 lg:text-3xl lg:my-8 lg:mx-24 xl:text-4xl xl:my-12 xl:mx-44">
        <nuxt-link
          class="underline text-gray-700 dark:text-gray-200 hover:text-red-600 focus:text-red-600 dark:hover:text-red-600 dark:focus:text-red-600"
          to="/blog"
        >
          Blog
        </nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'empty'
}
</script>
