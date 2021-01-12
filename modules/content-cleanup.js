export default function contentCleanup () {
  // Yaml pains me sometimes.
  this.nuxt.hook('content:file:beforeInsert', async (doc) => {
    doc.title = doc.title.trim()
    doc.description = doc.description.trim()
  })
}
