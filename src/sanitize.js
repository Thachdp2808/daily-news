// Whitelist-based sanitizer cho HTML lấy về từ trang bài viết gốc trước khi render trong popup

const ALLOWED_TAGS = new Set([
  'P', 'BR', 'STRONG', 'EM', 'B', 'I', 'U', 'A', 'UL', 'OL', 'LI', 'BLOCKQUOTE',
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'IMG', 'FIGURE', 'FIGCAPTION',
  'CODE', 'PRE', 'SPAN', 'DIV', 'TABLE', 'THEAD', 'TBODY', 'TR', 'TD', 'TH', 'HR',
])

const ALLOWED_ATTRS = {
  A: ['href', 'title'],
  IMG: ['src', 'alt', 'title'],
}

const UNSAFE_URL = /^\s*(javascript|data|vbscript):/i

export function sanitizeFragment(root) {
  const clone = root.cloneNode(true)

  clone.querySelectorAll('script, style, iframe, object, embed, form, input, button, svg, video, audio, noscript').forEach(
    (el) => el.remove(),
  )

  clone.querySelectorAll('*').forEach((el) => {
    if (!ALLOWED_TAGS.has(el.tagName)) {
      while (el.firstChild) el.parentNode.insertBefore(el.firstChild, el)
      el.remove()
      return
    }
    const allowed = ALLOWED_ATTRS[el.tagName] || []
    ;[...el.attributes].forEach((attr) => {
      const name = attr.name.toLowerCase()
      if (name.startsWith('on') || !allowed.includes(name)) {
        el.removeAttribute(attr.name)
        return
      }
      if ((name === 'href' || name === 'src') && UNSAFE_URL.test(attr.value)) {
        el.removeAttribute(attr.name)
      }
    })
    if (el.tagName === 'A') {
      el.setAttribute('target', '_blank')
      el.setAttribute('rel', 'noopener noreferrer')
    }
  })

  return clone.innerHTML
}
