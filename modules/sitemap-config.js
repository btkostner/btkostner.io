import { $content } from '@nuxt/content'

const BASE_URL = 'https://btkostner.io'

async function constructContentUrls () {
  const urls = []

  const blogPosts = await $content('blog').where({ published: true }).fetch()
  blogPosts.forEach((c) => urls.push(c.path))

  return urls
}

export default function feedConfig () {
  this.options.sitemap = {
    hostname: BASE_URL,
    routes: constructContentUrls
  }
}
