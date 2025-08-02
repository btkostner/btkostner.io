<template>
  <div class="bg-[#F9F9F8] h-full w-full">
    <div class="absolute h-8 w-full bg-orange-500" />

    <div class="flex flex-col justify-center h-full w-full pt-32 p-24">
      <h1
        class="m-0 text-[75px] font-semibold mb-4 text-sand-12 flex items-center"
      >
        <span>{{ title }}</span>
      </h1>

      <p v-if="description" class="text-[32px] text-sand-11 leading-tight">
        {{ description.slice(0, 200) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  description?: string;
}>();
</script>
