import assert from 'node:assert/strict'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router'
import { createServer } from 'vite'

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' })

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
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

  const missing = renderToStaticMarkup(createElement(MemoryRouter, { initialEntries: ['/missing'] }, createElement(App)))
  assert.ok(missing.includes('Page not found'))
  console.log('4 routes and the not-found page rendered correctly')
} finally {
  await vite.close()
}
