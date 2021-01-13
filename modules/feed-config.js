import pick from 'lodash/pick'
import { $content } from '@nuxt/content'

const BASE_URL = 'https://btkostner.io'
const FORMATS = [
  { type: 'rss2', realType: 'rss', ext: 'rss.xml' },
  { type: 'atom1', realType: 'atom', ext: 'atom.xml' },
  { type: 'json1', realType: 'json', ext: 'json' }
]
const SECTIONS = [{
  title: 'btkostner.io Blog',
  description: `Here's most of my thoughts written out. Nerdy stuff. Helpful tips I don't want to lose. Random rants about technology. It's all here (or soon to be.)`,

  filter: 'blog',
  link: '/blog'
}]

async function constructItems (items, feed) {
  items.forEach((item) => {
    feed.addItem({
      title: item.title,
      id: item.path,
      link: `${BASE_URL}${item.path}`,
      date: new Date(item.updatedAt),
      published: new Date(item.createdAt),
      description: item.description,
      category: (item.tags || []).map((item) => ({ name: item })),
      author: [{
        name: item.authorName
      }]
    })
  })
}

async function constructFeed (feed, options) {
  const feedLinks = {}
  FORMATS.forEach((format) => {
    feedLinks[format.realType] = `${BASE_URL}${options.link}.${format.ext}`
  })

  feed.options = {
    title: options.title,
    description: options.description,
    link: BASE_URL + options.link,
    language: 'en',
    feed: `${BASE_URL}${options.link}.${options.ext}`,
    feedLinks
  }

  await $content(options.filter)
    .where({ published: true })
    .fetch()
    .then((items) => constructItems(items, feed))
}

export default function feedConfig () {
  this.options.feed = []

  FORMATS.forEach((format) => {
    SECTIONS.forEach((section) => {
      this.options.feed.push({
        cacheTime: 1000 * 60 * 15,
        create: (feed) => constructFeed(feed, { ...format, ...section }),
        type: format.type,
        path: `${section.link}.${format.ext}`
      })
    })
  })
}
