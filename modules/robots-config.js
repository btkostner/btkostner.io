const BASE_URL = 'https://btkostner.io'

export default function robotsConfig () {
  this.options.robots = [{
    userAgent: '*',
    allow: '/',
    sitemap: `${BASE_URL}/sitemap.xml`
  }]
}
