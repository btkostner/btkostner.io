export default function contentCleanup () {
  // Yaml pains me sometimes.
  this.nuxt.hook('content:file:beforeInsert', async (doc) => {
    if (doc.title != null) {
      doc.title = doc.title.trim()
    }

    if (doc.description != null) {
      doc.description = doc.description.trim()
    }
  })
}
