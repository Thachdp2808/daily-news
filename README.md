# News Daily

Web app ReactJS đọc tin công nghệ & tài chính trực tiếp từ RSS của các báo chính thống — không cần database.

## Nguồn tin

| Nguồn | Chuyên mục |
|---|---|
| VnExpress | Khoa học công nghệ, Kinh doanh |
| Tuổi Trẻ | Công nghệ, Kinh doanh |
| CafeF | Thị trường chứng khoán |
| TechCrunch | Công nghệ |
| The Verge | Công nghệ |
| CNBC | Tài chính |

RSS được proxy qua Vite dev server (xem `vite.config.js`) để tránh CORS khi chạy local.

## Chạy local

```bash
npm install
npm run dev
```

Mở http://localhost:5173

## Tính năng

- Nút **Làm mới** — fetch lại toàn bộ feed, hiện thời gian cập nhật gần nhất
- Tab lọc theo chuyên mục (Tất cả / Công nghệ / Tài chính) + dropdown lọc theo nguồn
- Bài viết sắp xếp theo thời gian mới nhất, hiển thị "x phút trước"
- Nguồn nào lỗi thì hiện cảnh báo, các nguồn còn lại vẫn hiển thị bình thường
