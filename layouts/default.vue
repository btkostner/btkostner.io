<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition motion-reduce:transition-none">
    <layout-header />

    <div class="flex-grow">
      <Nuxt class="container mx-auto" />
    </div>

    <footer class="flex-none px-6 py-2 hover-target transition motion-reduce:transition-none">
      <div class="flex flex-col justify-between items-center container mx-auto md:flex-row">
        <div>
          <nuxt-link
            to="/"
            class="text-gray-600 hover:text-red-600 dark:text-gray-400"
          >
            btkostner
          </nuxt-link>
          <span class="text-gray-600 dark:text-gray-400">
            made in Colorado with
          </span>
          <font-awesome-icon :icon="['far', 'heart']" class="hover-target-off text-gray-400 dark:text-gray-600" />
          <font-awesome-icon :icon="['far', 'cannabis']" class="hover-target-on text-gray-400 dark:text-gray-600" />
        </div>

        <div
          v-if="!$colorMode.forced"
          class="flex -mx-2 mt-4 mb-2 md:mt-0 md:mb-0 text-gray-500 hover:text-red-600"
        >
          <a
            href="#"
            aria-label="Toggle light and dark mode"
            @click.prevent="toggleColorPreference"
          >
            <template v-if="$colorMode.value === 'dark'">
              <span class="sr-only">Dark mode on</span>
              <font-awesome-icon :icon="['far', 'lightbulb']" />
            </template>

            <template v-if="$colorMode.value === 'light'">
              <span class="sr-only">Light mode on</span>
              <font-awesome-icon :icon="['far', 'lightbulb-on']" />
            </template>
          </a>
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
            aria-label="Mastodon"
            class="mx-2 text-gray-500 hover:text-red-600"
            href="https://mastodon.social/@btkostner"
            rel="me noopener noreferrer"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'mastodon']" />
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

<script>
export default {
  methods: {
    toggleColorPreference () {
      this.$colorMode.preference = (this.$colorMode.preference === 'dark')
        ? 'light'
        : 'dark'
    }
  }
}
</script>
