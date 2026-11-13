// Renders every route in src/entry-server.ts to static HTML inside dist/, so the content is in
// the initial HTML for crawlers, link previews and recruiter tooling.
// Run after `vite build` and `vite build --ssr src/entry-server.ts --outDir dist-ssr`.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const { render, prerenderRoutes, SITE_URL } = await import(
  pathToFileURL(join(ssrDir, 'entry-server.js')).href
)
const template = await readFile(join(dist, 'index.html'), 'utf8')

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function setTag(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`prerender: tag not found in index.html: ${pattern}`)
  return html.replace(pattern, replacement)
}

for (const route of prerenderRoutes) {
  const { html, title, description, themeCss } = await render(route)
  const pageUrl = new URL(route.replace(/^\//, ''), SITE_URL).href
  const t = escapeAttr(title)
  const d = escapeAttr(description)

  let page = template
  page = setTag(page, /<title>.*?<\/title>/s, `<title>${t}</title>`)
  page = setTag(
    page,
    /<meta\s+name="description"[^>]*>/s,
    `<meta name="description" content="${d}" />`,
  )
  page = setTag(
    page,
    /<meta\s+property="og:title"[^>]*>/s,
    `<meta property="og:title" content="${t}" />`,
  )
  page = setTag(
    page,
    /<meta\s+property="og:description"[^>]*>/s,
    `<meta property="og:description" content="${d}" />`,
  )
  page = setTag(
    page,
    /<meta\s+property="og:url"[^>]*>/s,
    `<meta property="og:url" content="${pageUrl}" />`,
  )
  page = setTag(
    page,
    /<link\s+rel="canonical"[^>]*>/s,
    `<link rel="canonical" href="${pageUrl}" />`,
  )
  page = page.replace(
    '</head>',
    `<style id="vuetify-theme-stylesheet">${themeCss}</style>\n  </head>`,
  )
  page = setTag(page, /<div id="app"><\/div>/, `<div id="app">${html}</div>`)

  const out = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html')
  await mkdir(dirname(out), { recursive: true })
  await writeFile(out, page)
  console.log(`prerendered ${route} -> ${out.replace(root + '/', '')}`)
}

await rm(ssrDir, { recursive: true, force: true })
