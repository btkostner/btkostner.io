<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow">
      <Nuxt class="container mx-auto" />
    </div>

    <footer class="flex-none px-6 py-2 border-t-2 border-gray-100 hover-target">
      <div class="flex flex-col justify-between items-center container mx-auto md:flex-row">
        <div>
          <nuxt-link
            to="/"
            class="text-gray-600 hover:text-red-600"
          >
            btkostner LLC.
          </nuxt-link>
          <span class="text-gray-600">
            Made in Colorado with
          </span>
          <font-awesome-icon icon="heart" class="hover-target-off text-gray-400" />
          <font-awesome-icon icon="cannabis" class="hover-target-on text-gray-400" />
        </div>

        <div class="flex -mx-2 mt-4 mb-2 md:mt-0 md:mb-0">
          <a
            aria-label="GitHub"
            class="mx-2 text-gray-500 hover:text-red-600"
            href="https://github.com/btkostner"
            rel="noopener noreferrer"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>

          <a
            aria-label="Steam"
            class="mx-2 text-gray-500 hover:text-red-600"
            href="https://steamcommunity.com/id/mkrar/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'steam']" />
          </a>

          <a
            aria-label="Twitter"
            class="mx-2 text-gray-500 hover:text-red-600"
            href="https://twitter.com/nerdy_btkostner"
            rel="noopener noreferrer"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>

          <a
            aria-label="LinkedIn"
            class="mx-2 text-gray-500 hover:text-red-600"
            href="https://www.linkedin.com/in/btkostner/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
  .hover-target:hover .hover-target-off {
    display: none;
  }

  .hover-target:not(:hover) .hover-target-on {
    display: none;
  }
</style>
