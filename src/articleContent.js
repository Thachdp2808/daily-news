import { sanitizeFragment } from './sanitize'

// Domain nào đã có proxy trong vite.config.js thì mới fetch được nội dung đầy đủ tại đây
const PROXY_MAP = [
  { host: 'vnexpress.net', prefix: '/feeds/vnexpress' },
  { host: 'tuoitre.vn', prefix: '/feeds/tuoitre' },
  { host: 'cafef.vn', prefix: '/feeds/cafef' },
  { host: 'techcrunch.com', prefix: '/feeds/techcrunch' },
  { host: 'theverge.com', prefix: '/feeds/theverge' },
  { host: 'cnbc.com', prefix: '/feeds/cnbc' },
  { host: 'dev.to', prefix: '/feeds/devto' },
  { host: 'github.blog', prefix: '/feeds/githubblog' },
  { host: 'stackoverflow.blog', prefix: '/feeds/soblog' },
  { host: 'freecodecamp.org', prefix: '/feeds/freecodecamp' },
  { host: 'vietstock.vn', prefix: '/feeds/vietstock' },
  { host: 'fool.com', prefix: '/feeds/fool' },
]

function toProxyUrl(link) {
  try {
    const u = new URL(link)
    const entry = PROXY_MAP.find((p) => u.hostname === p.host || u.hostname.endsWith(`.${p.host}`))
    if (!entry) return null
    return entry.prefix + u.pathname + u.search
  } catch {
    return null
  }
}

// Thử theo thứ tự các selector đặc thù của từng trang trước, cuối cùng mới fallback <article>
const CONTENT_SELECTORS = [
  '[itemprop="articleBody"]', // chuẩn schema.org — khớp đúng Tuổi Trẻ, Vietstock, tránh dính sidebar/footer
  'article.fck_detail',       // VnExpress
  '.detail-content',          // Tuổi Trẻ / CafeF (dùng chung nền tảng CMS)
  '.crayons-article__main',   // Dev.to
  '.article-content .entry-content', // TechCrunch
  '.entry-content',           // GitHub Blog / Stack Overflow Blog
  '.s-prose',                 // Stack Overflow Blog fallback
  '.article-content',
  'article',
]

// Các khối quảng cáo/tin liên quan bị nhúng thẳng vào giữa nội dung bài viết ở một số trang
// (widget giá cổ phiếu, box "Tin mới", box tin liên quan...) — cần loại bỏ trước khi hiển thị
const BOILERPLATE_PATTERN =
  /related|tindnd|chisochungkhoan|readmore-body|kbwscwl|tin_xemthem|box-tag|quangcao|advertisement|newsletter|outbrain|taboola|social-share/i

function stripBoilerplate(root) {
  root.querySelectorAll('*').forEach((el) => {
    const signature = [el.getAttribute('class'), el.getAttribute('type'), el.getAttribute('id')]
      .filter(Boolean)
      .join(' ')
    if (BOILERPLATE_PATTERN.test(signature)) el.remove()
  })
}

export async function fetchArticleContent(link) {
  const proxyUrl = toProxyUrl(link)
  if (!proxyUrl) return { ok: false, reason: 'unsupported-domain' }

  let res
  try {
    res = await fetch(proxyUrl, { cache: 'no-store' })
  } catch {
    return { ok: false, reason: 'network-error' }
  }
  if (!res.ok) return { ok: false, reason: `http-${res.status}` }

  const html = await res.text()
  const doc = new DOMParser().parseFromString(html, 'text/html')

  let root = null
  for (const sel of CONTENT_SELECTORS) {
    const el = doc.querySelector(sel)
    if (el && el.textContent.trim().length > 200) {
      root = el
      break
    }
  }
  if (!root) return { ok: false, reason: 'no-content' }

  stripBoilerplate(root)
  return { ok: true, html: sanitizeFragment(root) }
}
