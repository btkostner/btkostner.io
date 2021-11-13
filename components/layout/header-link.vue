<template>
  <nuxt-link
    :to="to"
    custom
    v-slot="{ href, navigate, isActive, isExactActive }"
  >
    <li :class="{
      'px-2 pt-4 pb-6 border-t-8': true,
      'border-transparent': (exact ? !isExactActive : !isActive),
      'border-red-500': (exact ? isExactActive : isActive)
    }">
      <a
        class="text-gray-500"
        :href="href"
        @click="navigate"
      >
        <slot />
      </a>
    </li>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      exact: {
        type: Boolean,
        default: false
      },

      to: {
        type: String,
        required: true
      }
    }
  }
</script>
