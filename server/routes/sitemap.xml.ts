import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async (event) => {
  const docs = await queryCollection(event, "reading")
    .select("path", "createdAt")
    .order("createdAt", "DESC")
    .all();

  const sitemap = new SitemapStream({
    hostname: "https://btkostner.io",
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc.path,
      changefreq: "monthly",
    });
  }

  sitemap.end();

  return streamToPromise(sitemap);
});
