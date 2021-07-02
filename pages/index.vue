<template>
  <main class="p-4 grid gap-4 text-center">
    <nuxt-picture
      alt="Image of Blake Kostner"
      class="block mx-auto aspect-w-1 aspect-h-1 max-w-md w-full rounded-full overflow-hidden"
      height="256"
      sizes="sm:100vw"
      src="/images/homepage/avatar.jpg"
      width="256"
    />

    <h1 class="text-5xl">
      Blake Kostner
    </h1>

    <div class="grid grid-cols-4 justify-items-center text-2xl">
      <a
        aria-label="GitHub"
        class="grid content-center justify-center h-12 w-12 text-gray-700 dark:text-gray-400 hover:text-red-600"
        href="https://github.com/btkostner"
        rel="noopener noreferrer"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
        <span class="sr-only">GitHub</span>
      </a>

      <a
        aria-label="Steam"
        class="grid content-center justify-center h-12 w-12 text-gray-700 dark:text-gray-400 hover:text-red-600"
        href="https://steamcommunity.com/id/mkrar/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'steam']" />
        <span class="sr-only">Steam</span>
      </a>

      <a
        aria-label="Twitter"
        class="grid content-center justify-center h-12 w-12 text-gray-700 dark:text-gray-400 hover:text-red-600"
        href="https://twitter.com/nerdy_btkostner"
        rel="noopener noreferrer"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <span class="sr-only">Twitter</span>
      </a>

      <a
        aria-label="LinkedIn"
        class="grid content-center justify-center h-12 w-12 text-gray-700 dark:text-gray-400 hover:text-red-600"
        href="https://www.linkedin.com/in/btkostner/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
        <span class="sr-only">LinkedIn</span>
      </a>
    </div>

    <nuxt-link
      class="block h-14 w-32 grid content-center justify-center mx-auto underline"
      to="/blog"
    >
      Blog
    </nuxt-link>
  </main>
</template>

<script>
export default {
  layout: 'centered'
}
</script>
