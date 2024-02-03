<template>
  <div class="flex-1 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <h2
          class="text-xl font-bold tracking-tight text-sand-12 sm:text-3xl md:text-4xl lg:text-6xl"
        >
          Reading
        </h2>
        <p class="mt-4 sm:text-xl lg:text-2xl leading-8 text-sand-11">
          Random text by an ADHD site reliability engineer
        </p>

        <div
          class="mt-10 space-y-16 border-t border-sand-6 pt-10 sm:mt-16 sm:pt-16"
        >
          <ContentList v-slot="{ list }" :query="query">
            <article
              v-for="article in list"
              :key="article._path"
              class="flex max-w-xl flex-col items-start justify-between"
            >
              <div class="flex items-center gap-x-4 text-md">
                <time :datetime="article.createdAt" class="text-sand-11">
                  {{ humanDate(article.createdAt) }}
                </time>
              </div>
              <div class="group relative">
                <h3
                  class="mt-3 sm:text-xl lg:text-2xl font-semibold leading-6 text-sand-12"
                >
                  <nuxt-link :to="article._path">
                    <span class="absolute inset-0"></span>
                    {{ article.title }}
                  </nuxt-link>
                </h3>
                <p class="mt-5 line-clamp-3 text-base leading-6 text-sand-11">
                  {{ article.excerpt || article.description }}
                </p>
              </div>
            </article>
          </ContentList>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

useHead({
  title: "Reading By Blake Kostner",
});

const query: QueryBuilderParams = {
  path: "/reading",
  where: [{ _type: "markdown" }],
  only: ["title", "description", "_path", "createdAt", "tags"],
  limit: 5,
  sort: [{ createdAt: -1 }],
};
</script>
