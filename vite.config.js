import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Proxy các nguồn RSS qua dev server để tránh CORS khi chạy local
const rssProxy = (target) => ({
  target,
  changeOrigin: true,
  followRedirects: true,
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
  },
})

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/feeds/vnexpress': { ...rssProxy('https://vnexpress.net'), rewrite: (p) => p.replace('/feeds/vnexpress', '') },
      '/feeds/tuoitre': { ...rssProxy('https://tuoitre.vn'), rewrite: (p) => p.replace('/feeds/tuoitre', '') },
      '/feeds/cafef': { ...rssProxy('https://cafef.vn'), rewrite: (p) => p.replace('/feeds/cafef', '') },
      '/feeds/techcrunch': { ...rssProxy('https://techcrunch.com'), rewrite: (p) => p.replace('/feeds/techcrunch', '') },
      '/feeds/theverge': { ...rssProxy('https://www.theverge.com'), rewrite: (p) => p.replace('/feeds/theverge', '') },
      '/feeds/cnbc': { ...rssProxy('https://www.cnbc.com'), rewrite: (p) => p.replace('/feeds/cnbc', '') },
      '/feeds/devto': { ...rssProxy('https://dev.to'), rewrite: (p) => p.replace('/feeds/devto', '') },
      '/feeds/githubblog': { ...rssProxy('https://github.blog'), rewrite: (p) => p.replace('/feeds/githubblog', '') },
      '/feeds/soblog': { ...rssProxy('https://stackoverflow.blog'), rewrite: (p) => p.replace('/feeds/soblog', '') },
      '/feeds/freecodecamp': {
        ...rssProxy('https://www.freecodecamp.org'),
        rewrite: (p) => p.replace('/feeds/freecodecamp', ''),
      },
      '/feeds/hnrss': { ...rssProxy('https://hnrss.org'), rewrite: (p) => p.replace('/feeds/hnrss', '') },
      '/feeds/vietstock': { ...rssProxy('https://vietstock.vn'), rewrite: (p) => p.replace('/feeds/vietstock', '') },
      '/feeds/fool': { ...rssProxy('https://www.fool.com'), rewrite: (p) => p.replace('/feeds/fool', '') },
    },
  },
})
