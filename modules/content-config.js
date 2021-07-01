import { readFileSync } from 'fs'
import { resolve } from 'path'
import { getHighlighter } from 'shiki'

export default async function contentConfig () {
  const highlighter = await getHighlighter({
    theme: JSON.parse(readFileSync(resolve(__dirname, '../assets/shiki-themes/base16-css-vars.json'), 'utf-8'))
  })

  this.options.content = {
    markdown: {
      highlighter (rawCode, lang) {
        return highlighter
          .codeToHtml(rawCode, lang)
          .replace(/color\:\s#00000([0-9A-F])/g, 'color:var(--code-0$1)')
      }
    }
  }

  this.options.css.push('~/assets/styles/code-highlighting.css')
}
