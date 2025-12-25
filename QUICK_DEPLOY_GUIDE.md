# 🚀 GitHub Pages 快速部署指南

## 第一次部署（5 分鐘設定）

### 步驟 1: 推送程式碼到 GitHub

```bash
# 如果還沒建立 repository，先在 GitHub 上建立
# 然後執行：

git add .
git commit -m "Initial commit with GitHub Pages setup"
git branch -M main
git remote add origin https://github.com/你的使用者名稱/bubbo-s-world.git
git push -u origin main
```

### 步驟 2: 啟用 GitHub Pages

1. 前往你的 GitHub repository
2. 點擊 **Settings**（設定）
3. 左側選單點擊 **Pages**
4. 在 **Source** 下拉選單選擇 **GitHub Actions**
5. 儲存

### 步驟 3: 設定 Actions 權限

1. 在 Settings 中，點擊左側的 **Actions** → **General**
2. 捲動到 **Workflow permissions**
3. 選擇 **Read and write permissions**
4. 勾選 **Allow GitHub Actions to create and approve pull requests**
5. 點擊 **Save**

### 步驟 4: 觸發第一次部署

#### 方法 A：重新推送（推薦）

```bash
git commit --allow-empty -m "Trigger first deployment"
git push
```

#### 方法 B：手動觸發

1. 前往 **Actions** 頁面
2. 選擇 **Deploy to GitHub Pages**
3. 點擊 **Run workflow**
4. 點擊綠色的 **Run workflow** 按鈕

### 步驟 5: 等待部署完成

1. 前往 **Actions** 頁面
2. 等待綠色勾勾出現（約 2-3 分鐘）
3. 訪問你的網站：`https://你的使用者名稱.github.io/bubbo-s-world/`

---

## 之後每次更新

```bash
# 1. 修改程式碼
# 2. 提交並推送
git add .
git commit -m "你的更新訊息"
git push

# 3. 自動部署會在背景執行
# 4. 2-3 分鐘後更新就會上線
```

---

## ✅ 檢查清單

部署前確認：

- [ ] 已建立 GitHub repository
- [ ] 已推送程式碼到 main 分支
- [ ] 已啟用 GitHub Pages（Source: GitHub Actions）
- [ ] 已設定 Actions 權限（Read and write）
- [ ] `.github/workflows/deploy.yml` 檔案存在
- [ ] `vite.config.ts` 中的 base URL 正確

---

## ⚙️ 進階設定

### 使用自訂網域

1. 在 repository Settings → Pages
2. 在 **Custom domain** 輸入你的網域
3. 更新 `vite.config.ts`：
   ```typescript
   base: '/',  // 改為根路徑
   ```

### 查看部署日誌

1. 前往 **Actions** 頁面
2. 點擊最新的 workflow run
3. 展開步驟查看詳細日誌

---

## 🐛 常見問題速解

### 網站顯示 404
→ 檢查 `vite.config.ts` 中的 `base` 是否為 `/bubbo-s-world/`

### 部署失敗
→ 前往 Actions 頁面查看錯誤訊息
→ 確認 Actions 權限已正確設定

### 更新沒反映
→ 清除瀏覽器快取（Ctrl+F5）
→ 等待 2-3 分鐘

---

**完整文件**: 參考 [DEPLOYMENT.md](./DEPLOYMENT.md)
