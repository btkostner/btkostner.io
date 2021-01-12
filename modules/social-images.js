import { promises as fsp } from 'fs'
import fetch from 'node-fetch'
import { join, resolve } from 'path'
import puppeteer from 'puppeteer'
import { URLSearchParams } from 'url'

const SOCIAL_SERVICES = ['twitter']
const SERVE_PATH = '/public/social'

let browser = null
let port = 0

export default function socialImages () {
  const blogPosts = []

  this.nuxt.hook('content:file:beforeInsert', async (doc) => {
    blogPosts.push({
      slug: doc.slug,
      title: doc.title,
      description: doc.description
    })

    for (const service of SOCIAL_SERVICES) {
      doc[`${service}Image`] = join(SERVE_PATH, fileName(doc, service))
    }
  })

  this.nuxt.hook('listen', async (_, listener) => {
    browser = await puppeteer.launch()
    port = listener.port
  })

  this.nuxt.hook('generate:distRemoved', async () => {
    try { await fsp.mkdir(tempSaveDir(this.nuxt)) } catch {}
    await Promise.all(blogPosts.map((doc) => downloadImages(doc, this.nuxt)))
  })

  this.nuxt.hook('close', async () => {
    if (browser != null) {
      await browser.close()
    }
  })
}

function fileName (doc, service) {
  return `${doc.slug}-${service}.png`
}

function tempSaveDir (nuxt) {
  return resolve(nuxt.options.buildDir, 'dist/client/social')
}

async function downloadImages (doc, nuxt) {
  for (const service of SOCIAL_SERVICES) {
    const params = new URLSearchParams({
      title: doc.title
    })

    const page = await browser.newPage()

    await page.goto(`http://localhost:${port}/_public/social/${service}?${params}`)

    const element = await page.$('#image')
    await element.screenshot({
      path: join(tempSaveDir(nuxt), fileName(doc, service)),
      type: 'png'
    })

    await page.close()
  }
}
