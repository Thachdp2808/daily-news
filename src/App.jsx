import { useCallback, useEffect, useMemo, useState } from 'react'
import { FEEDS, CATEGORIES } from './feeds'
import { fetchAllFeeds } from './rss'
import ArticleModal from './ArticleModal'
import { BEGINNER_GUIDES, GUIDE_GROUPS, guideToArticle } from './guides'
import { loadCompletedGuideIds, saveCompletedGuideIds } from './progress'
import './App.css'

const TABS = [
  { key: 'all', label: 'Tất cả' },
  { key: 'tech', label: CATEGORIES.tech },
  { key: 'finance', label: CATEGORIES.finance },
  { key: 'dev', label: CATEGORIES.dev },
  { key: 'stocknews', label: CATEGORIES.stocknews },
  { key: 'stockedu', label: CATEGORIES.stockedu },
]

function timeAgo(date) {
  const diff = Date.now() - date.getTime()
  const minutes = Math.round(diff / 60000)
  if (minutes < 1) return 'vừa xong'
  if (minutes < 60) return `${minutes} phút trước`
  const hours = Math.round(minutes / 60)
  if (hours < 24) return `${hours} giờ trước`
  const days = Math.round(hours / 24)
  if (days < 7) return `${days} ngày trước`
  return date.toLocaleDateString('vi-VN')
}

function HotItem({ article, rank, onOpen }) {
  return (
    <div
      className="hot-item"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(article)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(article)}
    >
      <span className="hot-rank">{rank}</span>
      {article.image && (
        <div className="hot-thumb">
          <img src={article.image} alt="" loading="lazy" onError={(e) => e.currentTarget.parentElement.remove()} />
        </div>
      )}
      <div className="hot-body">
        <h4 className="hot-title">{article.title}</h4>
        <div className="hot-meta">
          <span>{article.source}</span>
          <span>·</span>
          <span>{timeAgo(article.publishedAt)}</span>
        </div>
      </div>
    </div>
  )
}

function Sidebar({ articles, onOpen, title }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">🔥 {title}</h2>
      {articles.length === 0 ? (
        <p className="sidebar-empty">Chưa có dữ liệu.</p>
      ) : (
        <div className="hot-list">
          {articles.map((a, i) => (
            <HotItem key={`${a.feedId}-${a.link}-${i}`} article={a} rank={i + 1} onOpen={onOpen} />
          ))}
        </div>
      )}
    </aside>
  )
}

function ArticleCard({ article, onOpen, completed }) {
  return (
    <div
      className={`card ${completed ? 'card-completed' : ''}`}
      role="button"
      tabIndex={0}
      onClick={() => onOpen(article)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(article)}
    >
      {completed && <span className="card-completed-badge">✅ Đã hoàn thành</span>}
      {article.image && (
        <div className="card-image">
          <img src={article.image} alt="" loading="lazy" onError={(e) => e.currentTarget.parentElement.remove()} />
        </div>
      )}
      <div className="card-body">
        <div className="card-meta">
          <span className={`badge badge-${article.category}`}>{CATEGORIES[article.category]}</span>
          <span className="source">{article.source}</span>
        </div>
        <h3 className="card-title">{article.title}</h3>
        {article.summary && <p className="card-summary">{article.summary}</p>}
        <div className="card-time">{article.isGuide ? '📘 Kiến thức nền tảng' : timeAgo(article.publishedAt)}</div>
      </div>
    </div>
  )
}

export default function App() {
  const [articles, setArticles] = useState([])
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('all')
  const [sourceFilter, setSourceFilter] = useState('all')
  const [updatedAt, setUpdatedAt] = useState(null)
  const [selected, setSelected] = useState(null)
  const [completedGuideIds, setCompletedGuideIds] = useState(() => loadCompletedGuideIds())

  const handleGuideCompleted = useCallback((guideId) => {
    setCompletedGuideIds((prev) => {
      if (prev.has(guideId)) return prev
      const next = new Set(prev).add(guideId)
      saveCompletedGuideIds(next)
      return next
    })
  }, [])

  const load = useCallback(async () => {
    setLoading(true)
    const { articles, errors } = await fetchAllFeeds(FEEDS)
    setArticles(articles)
    setErrors(errors)
    setUpdatedAt(new Date())
    setLoading(false)
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const sources = useMemo(
    () => [...new Set(FEEDS.filter((f) => tab === 'all' || f.category === tab).map((f) => f.source))],
    [tab],
  )

  const visible = useMemo(
    () =>
      articles.filter(
        (a) => (tab === 'all' || a.category === tab) && (sourceFilter === 'all' || a.source === sourceFilter),
      ),
    [articles, tab, sourceFilter],
  )

  // Tin nổi bật: bám theo tab đang chọn. Ở tab "Tất cả" thì trộn đều mỗi chuyên mục
  // (Công nghệ/Tài chính/Developer) để không bị 1 nguồn ra bài liên tục (như Dev.to) lấn át;
  // trong mỗi chuyên mục ưu tiên bài đăng hôm nay, mới nhất trước.
  const hotArticles = useMemo(() => {
    const now = new Date()
    const isToday = (d) =>
      d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate()

    const topOfCategory = (cat, count) => {
      const inCategory = articles.filter((a) => a.category === cat)
      const todayInCategory = inCategory.filter((a) => isToday(a.publishedAt))
      const pool = todayInCategory.length >= count ? todayInCategory : inCategory
      return [...pool].sort((a, b) => b.publishedAt - a.publishedAt).slice(0, count)
    }

    if (tab !== 'all') return topOfCategory(tab, 8)

    const picked = Object.keys(CATEGORIES).flatMap((cat) => topOfCategory(cat, 2))
    return picked.sort((a, b) => b.publishedAt - a.publishedAt)
  }, [articles, tab])

  const guideGroups = useMemo(
    () => GUIDE_GROUPS.map((group) => ({ group, guides: BEGINNER_GUIDES.filter((g) => g.group === group) })),
    [],
  )

  const completedGuideCount = useMemo(
    () => BEGINNER_GUIDES.filter((g) => completedGuideIds.has(g.id)).length,
    [completedGuideIds],
  )
  const progressPercent = Math.round((completedGuideCount / BEGINNER_GUIDES.length) * 100)

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <h1>📰 News Daily</h1>
            <p className="tagline">Tin công nghệ & tài chính từ các báo chính thống</p>
          </div>
          <div className="header-actions">
            {updatedAt && <span className="updated-at">Cập nhật lúc {updatedAt.toLocaleTimeString('vi-VN')}</span>}
            <button className="refresh-btn" onClick={load} disabled={loading}>
              <span className={`refresh-icon ${loading ? 'spinning' : ''}`}>⟳</span>
              {loading ? 'Đang tải…' : 'Làm mới'}
            </button>
          </div>
        </div>
        <nav className="tabs">
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`tab ${tab === t.key ? 'active' : ''}`}
              onClick={() => {
                setTab(t.key)
                setSourceFilter('all')
                window.scrollTo(0, 0)
              }}
            >
              {t.label}
            </button>
          ))}
          <select className="source-select" value={sourceFilter} onChange={(e) => setSourceFilter(e.target.value)}>
            <option value="all">Tất cả nguồn</option>
            {sources.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </nav>
      </header>

      <main className="main">
        {errors.length > 0 && (
          <div className="error-bar">
            Không tải được: {errors.map((e) => e.feed.source).join(', ')} — các nguồn khác vẫn hiển thị bình thường.
          </div>
        )}

        <div className="content-layout">
          <div className="main-column">
            {tab === 'stockedu' && (
              <section className="guide-section">
                <h2 className="guide-section-title">📘 Bắt đầu đầu tư CK từ số 0</h2>
                <p className="guide-section-desc">
                  {BEGINNER_GUIDES.length} bài kiến thức nền tảng dành cho người mới, chia theo lộ trình từ cơ bản đến
                  nâng cao — đọc xong mỗi bài, làm bài kiểm tra nhanh để đánh dấu hoàn thành.
                </p>

                <div className="progress-box">
                  <div className="progress-label">
                    Tiến độ học: <strong>{completedGuideCount}/{BEGINNER_GUIDES.length}</strong> bài ({progressPercent}%)
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
                  </div>
                </div>

                {guideGroups.map(({ group, guides }) => (
                  <div key={group} className="guide-group">
                    <h3 className="guide-group-title">{group}</h3>
                    <div className="grid">
                      {guides.map((g) => (
                        <ArticleCard
                          key={g.id}
                          article={guideToArticle(g)}
                          onOpen={setSelected}
                          completed={completedGuideIds.has(g.id)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            )}

            {tab !== 'stockedu' &&
              (loading && articles.length === 0 ? (
                <div className="skeleton-grid">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="skeleton-card" />
                  ))}
                </div>
              ) : visible.length === 0 ? (
                <div className="empty">Không có bài viết nào.</div>
              ) : (
                <div className="grid">
                  {visible.map((a, i) => (
                    <ArticleCard key={`${a.feedId}-${a.link}-${i}`} article={a} onOpen={setSelected} />
                  ))}
                </div>
              ))}
          </div>

          <Sidebar
            articles={hotArticles}
            onOpen={setSelected}
            title={tab === 'all' ? 'Tin nổi bật trong ngày' : `${CATEGORIES[tab]} nổi bật trong ngày`}
          />
        </div>
      </main>

      <footer className="footer">
        Nguồn: VnExpress, Tuổi Trẻ, CafeF, TechCrunch, The Verge, CNBC, Dev.to, GitHub Blog, Stack Overflow Blog,
        freeCodeCamp, Hacker News, Vietstock, The Motley Fool — bấm vào bài để đọc ngay tại đây.
      </footer>

      {selected && (
        <ArticleModal
          article={selected}
          onClose={() => setSelected(null)}
          isGuideCompleted={selected.isGuide && completedGuideIds.has(selected.guideId)}
          onGuideCompleted={handleGuideCompleted}
        />
      )}
    </div>
  )
}
