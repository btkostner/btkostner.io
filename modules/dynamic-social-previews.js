import { promises as fsp } from 'fs'
import defu from 'defu'
import fetch from 'node-fetch'
import { dirname, join, resolve } from 'path'
import puppeteer from 'puppeteer'
import { URLSearchParams } from 'url'

const DEFAULT_CONFIG = {
  fields: {
    twitter: 'twitterImage'
  },

  imageSelector: '#image',

  publicPath: '/social',
  fileName: (doc, service) => `${doc.path}-${service}.jpg`,

  shouldGenerateFn: (field) => field != null && !field.includes('://') && !field.match(/\.(png|jpg)$/i)
}

let browser = null
let docs = []
let port = 0

export default function socialImages (moduleOptions, inject) {
  const options = defu(moduleOptions, this.nuxt.options.dynamicSocialPreviews, DEFAULT_CONFIG)

  this.nuxt.hook('content:file:beforeInsert', async (doc) => {
    for (const [service, key] of Object.entries(options.fields)) {
      if (options.shouldGenerateFn(doc[key])) {
        docs.push({
          path: doc.path,
          savePath: join(this.nuxt.options.buildDir, 'dist/client', options.publicPath, options.fileName(doc, service)),
          service: service,
          generatePath: doc[key]
        })

        doc[key] = join(options.publicPath, this.nuxt.options.build.publicPath, options.fileName(doc, service))
      }
    }
  })

  this.nuxt.hook('listen', async (_, listener) => {
    browser = await puppeteer.launch({
      args: ['--font-render-hinting=none']
    })

    port = listener.port
  })

  this.nuxt.hook('generate:distRemoved', async () => {
    await Promise.all(docs.map((doc) => downloadImages(doc, options, this.nuxt)))
  })

  this.nuxt.hook('close', async () => {
    if (browser != null) {
      await browser.close()
    }
  })
}

async function downloadImages (doc, options, nuxt) {
  const directory = dirname(doc.savePath)
  await fsp.mkdir(directory, { recursive: true })

  const { html, error } = await nuxt.renderRoute(doc.generatePath, {
    contentPath: doc.path,
    socialService: doc.service
  })

  if (error) {
    throw new Error(`${doc.path} ${doc.service} generated "${error.message}"`)
  }

  const page = await browser.newPage()
  await page.setContent(html)

  const element = await page.$(options.imageSelector)

  if (element == null) {
    throw new Error(`${doc.path} ${doc.service} unable to find element`)
  }

  await element.screenshot({
    path: doc.savePath,
    type: 'jpeg'
  })

  await page.close()
}
