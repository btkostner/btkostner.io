import { getHighlighter, loadTheme } from 'shiki'
import { resolve } from 'path'

export default async function contentConfig () {
  const theme = loadTheme(resolve(__dirname, '../assets/shiki-themes/base16-css-vars.json'))
  const highlighter = await getHighlighter({ theme })

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
