// Lưu tiến trình học (đã hoàn thành bài quiz nào) vào localStorage của trình duyệt
const STORAGE_KEY = 'newsdaily-guide-progress-v1'

export function loadCompletedGuideIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return new Set(Array.isArray(parsed) ? parsed : [])
  } catch {
    return new Set()
  }
}

export function saveCompletedGuideIds(idSet) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...idSet]))
  } catch {
    // bỏ qua nếu localStorage không khả dụng (chế độ ẩn danh, hết quota...)
  }
}
