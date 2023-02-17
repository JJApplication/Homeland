// @ts-nocheck
// forked from vite-plugin-markdown
import Frontmatter from 'front-matter'
import MarkdownIt from 'markdown-it'
import { Plugin } from 'vite'
import { TransformResult } from 'rollup'
import { parseDOM, DomUtils } from 'htmlparser2'
import { Element, Node as DomHandlerNode } from 'domhandler'
import hljs from 'highlight.js'; // https://highlightjs.org
import img from 'markdown-it-linkify-images'

export enum Mode {
  TOC = 'toc',
  HTML = 'html',
}

export interface PluginOptions {
  mode?: Mode[]
  markdown?: (body: string) => string
  markdownIt?: MarkdownIt | MarkdownIt.Options
}

const markdownCompiler = (options: PluginOptions): MarkdownIt | { render: (body: string) => string } => {
  if (options.markdownIt) {
    if (options.markdownIt instanceof MarkdownIt || (options.markdownIt?.constructor?.name === 'MarkdownIt')) {
      return options.markdownIt as MarkdownIt
    } else if (typeof options.markdownIt === 'object') {
      return MarkdownIt(options.markdownIt)
    }
  } else if (options.markdown) {
    return { render: options.markdown }
  }
  return MarkdownIt({
    html: true, quotes: '“”‘’', typographer: true, highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {
        }
      }

      return ''; // use external default escaping
    }
  }).use(img, {
    target: '_blank',
    imgClass: 'img'
  })
}

class ExportedContent {
  #exports: string[] = []
  #contextCode = ''

  addContext (contextCode: string): void {
    this.#contextCode += `${contextCode}\n`
  }

  addExporting (exported: string): void {
    this.#exports.push(exported)
  }

  export (): string {
    return [this.#contextCode, `export { ${this.#exports.join(', ')} }`].join('\n')
  }
}

const tf = (code: string, id: string, options: PluginOptions): TransformResult => {
  if (!id.endsWith('.md')) return null

  const content = new ExportedContent()
  const fm = Frontmatter<unknown>(code)
  content.addContext(`const attributes = ${JSON.stringify(fm.attributes)}`)
  content.addExporting('attributes')

  const html = markdownCompiler(options).render(fm.body)
  if (options.mode?.includes(Mode.HTML)) {
    content.addContext(`const html = ${JSON.stringify(html)}`)
    content.addExporting('html')
  }

  if (options.mode?.includes(Mode.TOC)) {
    const root = parseDOM(html)
    const indicies = root.filter(
      rootSibling => rootSibling instanceof Element && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(rootSibling.tagName)
    ) as Element[]

    const toc: { level: string; content: string }[] = indicies.map(index => ({
      level: index.tagName.replace('h', ''),
      content: DomUtils.getInnerHTML(index),
    }))

    content.addContext(`const toc = ${JSON.stringify(toc)}`)
    content.addExporting('toc')
  }

  return {
    code: content.export(),
  }
}

export const plugin = (options: PluginOptions = {}): Plugin => {
  return {
    name: 'vite-plugin-markdown',
    enforce: 'pre',
    transform (code, id) {
      return tf(code, id, options)
    },
  }
}

export default plugin