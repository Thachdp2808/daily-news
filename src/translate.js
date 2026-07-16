// Dịch văn bản sang tiếng Việt bằng endpoint miễn phí của Google Translate (không cần API key)
const ENDPOINT = 'https://translate.googleapis.com/translate_a/single'
const MAX_CHUNK = 4000

function splitIntoChunks(text) {
  if (text.length <= MAX_CHUNK) return [text]
  const paragraphs = text.split('\n\n')
  const chunks = []
  let current = ''
  for (const p of paragraphs) {
    if (current && (current + '\n\n' + p).length > MAX_CHUNK) {
      chunks.push(current)
      current = p
    } else {
      current = current ? `${current}\n\n${p}` : p
    }
  }
  if (current) chunks.push(current)
  return chunks
}

async function translateChunk(text) {
  const url = `${ENDPOINT}?client=gtx&sl=auto&tl=vi&dt=t&q=${encodeURIComponent(text)}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`translate http ${res.status}`)
  const data = await res.json()
  return data[0].map((segment) => segment[0]).join('')
}

export async function translateToVietnamese(text) {
  const chunks = splitIntoChunks(text)
  const translated = []
  for (const chunk of chunks) {
    translated.push(await translateChunk(chunk))
  }
  return translated.join('\n\n')
}

// Gom text từng khối (đoạn văn, tiêu đề phụ...) nối bằng "\n\n" để giữ được ranh giới đoạn sau khi dịch
export function htmlToBlockText(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const blocks = [...doc.body.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, blockquote, figcaption')]
  const texts = blocks.map((el) => el.textContent.trim()).filter(Boolean)
  return texts.length > 0 ? texts.join('\n\n') : doc.body.textContent.trim()
}
