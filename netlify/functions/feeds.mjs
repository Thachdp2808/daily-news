// Proxy RSS cho production trên Netlify — tương đương proxy trong vite.config.js
const TARGETS = {
  vnexpress: 'https://vnexpress.net',
  tuoitre: 'https://tuoitre.vn',
  cafef: 'https://cafef.vn',
  techcrunch: 'https://techcrunch.com',
  theverge: 'https://www.theverge.com',
  cnbc: 'https://www.cnbc.com',
  devto: 'https://dev.to',
  githubblog: 'https://github.blog',
  soblog: 'https://stackoverflow.blog',
  freecodecamp: 'https://www.freecodecamp.org',
  hnrss: 'https://hnrss.org',
  vietstock: 'https://vietstock.vn',
  fool: 'https://www.fool.com',
}

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'

export default async (req) => {
  const url = new URL(req.url)
  // /feeds/<key>/<đường dẫn còn lại>
  const [, , key, ...rest] = url.pathname.split('/')
  const target = TARGETS[key]
  if (!target) return new Response('Unknown feed source', { status: 404 })

  const upstream = `${target}/${rest.join('/')}${url.search}`
  const res = await fetch(upstream, {
    redirect: 'follow',
    headers: {
      'User-Agent': UA,
      Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*',
    },
  })
  if (!res.ok) return new Response(`Upstream error ${res.status}`, { status: res.status })

  const body = await res.text()
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': res.headers.get('content-type') || 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  })
}

export const config = { path: '/feeds/*' }
