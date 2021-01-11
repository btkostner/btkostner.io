<template>
  <main class="p-4 max-w-xl">
    <h1 class="text-2xl">
      {{ error.statusCode }}
    </h1>

    <h2 class="text-5xl">
      {{ error.message }}
    </h2>

    <p class="mt-8">
      <template v-if="error.statusCode === 404">
        The page you are looking for doesn't actually exist. It might have been
        taken to another castle. It might be held captive in a picture. It could
        have even been nuked from orbit by the Cylons. We're not really sure
        where it is, but we are certain it's not here.
      </template>
      <template v-else>
        It seems the machines are revolting! We're not sure why they don't want
        to serve you, but they keep failing our request. You can keep trying,
        but on the off chance they don't byte, we recommend you bring them a
        human sacrifice. Just in case.
      </template>
    </p>
  </main>
</template>

<script>
export default {
  layout: 'centered',

  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
