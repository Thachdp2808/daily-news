// Fetch + parse RSS 2.0 và Atom bằng DOMParser của trình duyệt

const stripHtml = (html) => {
  const doc = new DOMParser().parseFromString(html || '', 'text/html')
  return (doc.body.textContent || '').replace(/\s+/g, ' ').trim()
}

const firstImgSrc = (html) => {
  const doc = new DOMParser().parseFromString(html || '', 'text/html')
  const img = doc.querySelector('img')
  return img?.getAttribute('src') || null
}

const text = (parent, tag) => parent.querySelector(tag)?.textContent?.trim() || ''

const extractImage = (node, descriptionHtml) => {
  const enclosure = node.querySelector('enclosure')
  if (enclosure?.getAttribute('url') && (enclosure.getAttribute('type') || '').startsWith('image')) {
    return enclosure.getAttribute('url')
  }
  // media:content / media:thumbnail (namespace bị DOMParser giữ nguyên tên)
  for (const el of node.children) {
    const name = el.tagName.toLowerCase()
    if ((name === 'media:content' || name === 'media:thumbnail') && el.getAttribute('url')) {
      return el.getAttribute('url')
    }
  }
  return firstImgSrc(descriptionHtml)
}

const parseRssItems = (doc, feed) =>
  [...doc.querySelectorAll('item')].map((item) => {
    const descriptionHtml = text(item, 'description')
    return {
      feedId: feed.id,
      source: feed.source,
      category: feed.category,
      title: text(item, 'title'),
      link: text(item, 'link'),
      summary: stripHtml(descriptionHtml),
      image: extractImage(item, descriptionHtml),
      publishedAt: new Date(text(item, 'pubDate') || Date.now()),
    }
  })

const parseAtomEntries = (doc, feed) =>
  [...doc.querySelectorAll('entry')].map((entry) => {
    const contentHtml = text(entry, 'content') || text(entry, 'summary')
    const link =
      entry.querySelector('link[rel="alternate"]')?.getAttribute('href') ||
      entry.querySelector('link')?.getAttribute('href') ||
      ''
    return {
      feedId: feed.id,
      source: feed.source,
      category: feed.category,
      title: text(entry, 'title'),
      link,
      summary: stripHtml(contentHtml),
      image: firstImgSrc(contentHtml),
      publishedAt: new Date(text(entry, 'published') || text(entry, 'updated') || Date.now()),
    }
  })

export async function fetchFeed(feed) {
  const res = await fetch(feed.url, { cache: 'no-store' })
  if (!res.ok) throw new Error(`${feed.source}: HTTP ${res.status}`)
  const xml = await res.text()
  const doc = new DOMParser().parseFromString(xml, 'text/xml')
  if (doc.querySelector('parsererror')) throw new Error(`${feed.source}: XML không hợp lệ`)
  const items = doc.querySelector('feed') ? parseAtomEntries(doc, feed) : parseRssItems(doc, feed)
  return items.filter((it) => it.title && it.link)
}

export async function fetchAllFeeds(feeds) {
  const results = await Promise.allSettled(feeds.map(fetchFeed))
  const articles = []
  const errors = []
  results.forEach((r, i) => {
    if (r.status === 'fulfilled') articles.push(...r.value)
    else errors.push({ feed: feeds[i], message: r.reason?.message || String(r.reason) })
  })
  articles.sort((a, b) => b.publishedAt - a.publishedAt)
  return { articles, errors }
}
