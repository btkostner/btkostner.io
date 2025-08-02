import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    reading: defineCollection({
      schema: z.object({
        tags: z.array(z.string()),
        createdAt: z.date(),
      }),
      source: "reading/**.md",
      type: "page",
    }),
  },
});
