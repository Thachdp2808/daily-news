import { useEffect, useState } from 'react'
import { CATEGORIES } from './feeds'
import { fetchArticleContent } from './articleContent'
import { translateToVietnamese, htmlToBlockText } from './translate'
import GuideQuiz from './GuideQuiz'

const VIETNAMESE_SOURCES = new Set(['VnExpress', 'Tuổi Trẻ', 'CafeF'])

export default function ArticleModal({ article, onClose, isGuideCompleted, onGuideCompleted }) {
  const [state, setState] = useState({ status: 'loading', html: '' })
  const [translation, setTranslation] = useState({ status: 'idle', paragraphs: [] })
  const [showTranslated, setShowTranslated] = useState(false)

  useEffect(() => {
    if (article.isGuide) {
      setState({ status: 'ready', html: article.html })
      setTranslation({ status: 'idle', paragraphs: [] })
      setShowTranslated(false)
      return
    }

    let cancelled = false
    setState({ status: 'loading', html: '' })
    setTranslation({ status: 'idle', paragraphs: [] })
    setShowTranslated(false)
    fetchArticleContent(article.link)
      .then((res) => {
        if (cancelled) return
        setState(res.ok ? { status: 'ready', html: res.html } : { status: 'fallback', html: '' })
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'fallback', html: '' })
      })
    return () => {
      cancelled = true
    }
  }, [article])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  const canTranslate =
    !article.isGuide &&
    !VIETNAMESE_SOURCES.has(article.source) &&
    (state.status === 'ready' || state.status === 'fallback')

  async function handleTranslateClick() {
    if (showTranslated) {
      setShowTranslated(false)
      return
    }
    if (translation.status === 'ready') {
      setShowTranslated(true)
      return
    }

    const sourceText = state.status === 'ready' ? htmlToBlockText(state.html) : article.summary || article.title

    setTranslation({ status: 'loading', paragraphs: [] })
    try {
      const translated = await translateToVietnamese(sourceText)
      setTranslation({ status: 'ready', paragraphs: translated.split('\n\n').filter(Boolean) })
      setShowTranslated(true)
    } catch {
      setTranslation({ status: 'error', paragraphs: [] })
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="back-btn" onClick={onClose}>
            ← Quay lại
          </button>
          <div className="modal-header-right">
            {canTranslate && (
              <button className="translate-btn" onClick={handleTranslateClick} disabled={translation.status === 'loading'}>
                {translation.status === 'loading'
                  ? 'Đang dịch…'
                  : showTranslated
                    ? 'Xem bản gốc'
                    : '🌐 Dịch'}
              </button>
            )}
            <span className="modal-header-source">{article.source}</span>
          </div>
        </div>

        <div className="modal-body">
          {article.image && <img className="modal-image" src={article.image} alt="" />}

          <div className="modal-meta">
            <span className={`badge badge-${article.category}`}>{CATEGORIES[article.category]}</span>
            <span className="modal-source">{article.source}</span>
            <span className="modal-date">
              {article.isGuide ? 'Kiến thức nền tảng' : article.publishedAt.toLocaleString('vi-VN')}
            </span>
          </div>

          <h2 className="modal-title">{article.title}</h2>

          {translation.status === 'error' && (
            <div className="translate-error">Dịch thất bại, vui lòng thử lại.</div>
          )}

          {showTranslated && translation.status === 'ready' ? (
            <div className="modal-article-content">
              {translation.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : (
            <>
              {state.status === 'loading' && <div className="modal-loading">Đang tải nội dung…</div>}

              {state.status === 'ready' && (
                <div className="modal-article-content" dangerouslySetInnerHTML={{ __html: state.html }} />
              )}

              {article.isGuide && article.quiz && (
                <GuideQuiz
                  key={article.link}
                  quiz={article.quiz}
                  completed={isGuideCompleted}
                  onPass={() => onGuideCompleted(article.guideId)}
                />
              )}

              {state.status === 'fallback' && (
                <div className="modal-fallback">
                  {article.summary && <p className="modal-summary">{article.summary}</p>}
                  <p className="modal-fallback-note">
                    Không lấy được toàn văn bài viết để hiển thị tại đây.{' '}
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      Mở bản gốc
                    </a>
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
