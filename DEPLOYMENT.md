# GitHub Pages 部署說明

本專案已設定為自動部署到 GitHub Pages。每次推送到 `main` 分支時，會自動觸發建置和部署流程。

## 📋 前置設定（首次部署）

### 1. 啟用 GitHub Pages

在 GitHub repository 設定中：

1. 前往 **Settings** → **Pages**
2. 在 **Source** 部分選擇：
   - Source: **GitHub Actions**
3. 儲存設定

### 2. 設定 Repository 名稱

確認 `vite.config.ts` 中的 `base` 設定正確：

```typescript
base: mode === 'production' ? '/bubbo-s-world/' : '/',
```

**重要：**
- 如果你的 repository 名稱是 `bubbo-s-world`，保持現有設定
- 如果使用自訂網域，或是 `username.github.io` repository，請改為：
  ```typescript
  base: '/',
  ```

### 3. 設定 Permissions（權限）

確認 GitHub Actions 有正確的權限：

1. 前往 **Settings** → **Actions** → **General**
2. 在 **Workflow permissions** 部分：
   - 選擇 **Read and write permissions**
   - 勾選 **Allow GitHub Actions to create and approve pull requests**
3. 儲存設定

## 🚀 自動部署流程

### 觸發條件

自動部署會在以下情況觸發：

1. **推送到 main 分支**
   ```bash
   git add .
   git commit -m "你的提交訊息"
   git push origin main
   ```

2. **手動觸發**
   - 前往 GitHub repository → **Actions** 頁面
   - 選擇 **Deploy to GitHub Pages** workflow
   - 點擊 **Run workflow** 按鈕

### 部署步驟

GitHub Actions 會自動執行以下步驟：

1. ✅ Checkout 程式碼
2. ✅ 設定 Node.js 環境
3. ✅ 安裝相依套件（`npm ci`）
4. ✅ 建置專案（`npm run build`）
5. ✅ 上傳建置檔案
6. ✅ 部署到 GitHub Pages

整個流程約需 2-3 分鐘。

## 🌐 訪問你的網站

部署成功後，網站將在以下網址可用：

```
https://your-username.github.io/bubbo-s-world/
```

請將 `your-username` 替換為你的 GitHub 使用者名稱。

## 📝 本地測試

在推送到 GitHub 之前，建議先在本地測試建置：

```bash
# 建置生產版本
npm run build

# 預覽建置結果
npm run preview
```

預覽伺服器會在 `http://localhost:4173` 啟動。

## 🔧 設定檔案說明

### `.github/workflows/deploy.yml`

GitHub Actions 的 workflow 設定檔，定義了自動部署流程。

主要配置：
- **觸發條件**：推送到 main 分支
- **Node.js 版本**：20
- **建置指令**：`npm run build`
- **輸出目錄**：`./dist`

### `vite.config.ts`

Vite 建置配置檔。

重要設定：
```typescript
base: mode === 'production' ? '/bubbo-s-world/' : '/'
```

這確保在 GitHub Pages 上的路徑正確。

### `public/.nojekyll`

告訴 GitHub Pages 不要使用 Jekyll 處理檔案。這對於 Vite/React 應用程式很重要。

## ⚠️ 常見問題

### 1. 網站顯示 404 錯誤

**原因：** `base` URL 設定不正確

**解決方法：**
- 檢查 `vite.config.ts` 中的 `base` 設定
- 確保它與你的 repository 名稱一致

### 2. 樣式或圖片無法載入

**原因：** 資源路徑錯誤

**解決方法：**
- 確保所有圖片都放在 `src/assets/` 或 `public/` 目錄
- 使用相對路徑或 import 語句

### 3. 部署失敗

**檢查以下項目：**

1. **GitHub Actions 權限**
   - Settings → Actions → General → Workflow permissions
   - 確保選擇 "Read and write permissions"

2. **Pages 設定**
   - Settings → Pages → Source
   - 確保選擇 "GitHub Actions"

3. **建置錯誤**
   - 前往 Actions 頁面查看錯誤訊息
   - 確保 `npm run build` 在本地能成功執行

### 4. 更新未反映在網站上

**解決方法：**
1. 清除瀏覽器快取（Ctrl+F5 或 Cmd+Shift+R）
2. 等待 2-3 分鐘讓 CDN 更新
3. 檢查 Actions 頁面確認部署成功

## 🔄 更新部署

每次更新程式碼時：

```bash
# 1. 確認修改
git status

# 2. 提交變更
git add .
git commit -m "描述你的變更"

# 3. 推送到 GitHub（會自動觸發部署）
git push origin main

# 4. 前往 Actions 頁面查看部署進度
# https://github.com/your-username/bubbo-s-world/actions
```

## 📊 監控部署狀態

1. **GitHub Actions 頁面**
   - 查看每次部署的詳細日誌
   - 網址：`https://github.com/your-username/bubbo-s-world/actions`

2. **部署狀態 Badge**（可選）

   在 README.md 中加入：
   ```markdown
   ![Deploy](https://github.com/your-username/bubbo-s-world/actions/workflows/deploy.yml/badge.svg)
   ```

## 🎯 最佳實踐

1. **分支保護**
   - 考慮為 main 分支設定保護規則
   - 要求 PR review 後才能合併

2. **環境變數**
   - 如需使用 API keys，請使用 GitHub Secrets
   - Settings → Secrets and variables → Actions

3. **效能優化**
   - 專案已設定 code splitting
   - 圖片已優化壓縮

4. **SEO 優化**
   - 更新 `index.html` 中的 meta tags
   - 確保 `public/` 目錄中有 `robots.txt` 和 `sitemap.xml`

## 📞 需要協助？

如遇到問題：
1. 檢查 [GitHub Pages 官方文件](https://docs.github.com/en/pages)
2. 查看 [Vite 部署文件](https://vitejs.dev/guide/static-deploy.html)
3. 前往 GitHub Issues 尋求協助

---

**上次更新**：2025-12-26
**維護者**：Bubly 開發團隊
