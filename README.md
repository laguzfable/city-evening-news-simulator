# 城聞晚報｜犯罪新聞模擬器

這個 repository 存放可公開部署的瀏覽器版本。網站內容為虛構案件模擬，不對應任何真實人物或案件。

## 線上編輯

在 GitHub repository 頁面按下 `.`，即可用 github.dev 在瀏覽器中編輯。提交到 `main` 後，Cloudflare Pages 會自動發布。

主要檔案：

- `public/index.html`：介面與新聞生成邏輯
- `public/data/`：離線結構化素材庫
- `public/assets/`：示意背景圖片

## Cloudflare Pages 設定

- Production branch：`main`
- Framework preset：`None`
- Build command：留空
- Build output directory：`public`

公開版採用離線素材庫。需要 PowerShell 的即時網路抓取功能只保留在本機完整版，不會部署到公開網站。

