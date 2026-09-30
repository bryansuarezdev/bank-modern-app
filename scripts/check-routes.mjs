import assert from 'node:assert/strict'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router'
import { createServer } from 'vite'

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' })

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  const { footerLinks } = await vite.ssrLoadModule('/src/constants/index.js')
  const { infoPages } = await vite.ssrLoadModule('/src/constants/infoPages.js')
  const pages = [
    ['/', 'The Next', 'Home'],
    ['/features', 'More control, less complexity.', 'Features'],
    ['/product', 'Payments made simple.', 'Product'],
    ['/clients', 'Built around people.', 'Clients'],
  ]

  for (const [path, heading, label] of pages) {
    const html = renderToStaticMarkup(createElement(MemoryRouter, { initialEntries: [path] }, createElement(App)))
    assert.ok(html.includes(heading), `${path} should render its own content`)
    assert.match(html, new RegExp(`aria-current="page"[^>]*>${label}</a>`), `${path} should mark its menu item active`)
  }

  const footerItems = footerLinks.flatMap((group) => group.links)
  assert.equal(footerItems.length, 12)
  assert.equal(new Set(footerItems.map((item) => item.slug)).size, footerItems.length)

  for (const item of footerItems) {
    const page = infoPages[item.slug]
    assert.ok(page, `${item.name} needs page content`)
    const path = `/info/${item.slug}`
    const html = renderToStaticMarkup(createElement(MemoryRouter, { initialEntries: [path] }, createElement(App)))
    assert.ok(html.includes(page.summary), `${path} should render its own summary`)
    assert.ok(html.includes(page.sections[0].title), `${path} should render its own details`)
    assert.ok(html.includes(`href="${path}"`), `${item.name} should be a real footer link`)
    assert.ok(page.action.to || page.action.href, `${path} needs a next action`)
  }

  const missing = renderToStaticMarkup(createElement(MemoryRouter, { initialEntries: ['/missing'] }, createElement(App)))
  assert.ok(missing.includes('Page not found'))
  const missingInfo = renderToStaticMarkup(createElement(MemoryRouter, { initialEntries: ['/info/missing'] }, createElement(App)))
  assert.ok(missingInfo.includes('Page not found'))
  console.log('4 main routes, 12 footer routes and both not-found cases rendered correctly')
} finally {
  await vite.close()
}
