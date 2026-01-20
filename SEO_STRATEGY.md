# Bubly 官網 SEO 策略計劃 v2.0

> **願景**：讓 Bubly 成為美國年輕人（尤其是大學生）在維繫友誼、慶祝生日時的首選 APP，並透過成熟的 SEO 策略確保網站在相關搜尋中持續被發現。

---

## 🎯 目標市場與推廣策略

### 核心受眾
| 區隔         | 描述                              |
| ------------ | --------------------------------- |
| **主要目標** | 美國 18-25 歲年輕人（大學生為主） |
| **次要目標** | 社交活躍族群、禮物/祝福需求者     |
| **推廣起點** | 美國大學校園 (Campus Marketing)   |

### 受眾特徵 & 痛點
- 📱 **數位原生代**：習慣用 APP 解決生活問題
- 👫 **社交需求高**：朋友圈廣、但容易忘記重要日子
- 🎁 **禮物焦慮**：不知道送什麼、怎麼寫祝福
- 💬 **真誠連結**：厭倦表面社交，渴望有意義的互動

---

## 📊 產品定位確認

| 項目             | 確認值                       |
| ---------------- | ---------------------------- |
| **正式網域**     | `https://www.bublyapp.com` ✅ |
| **App Store ID** | `id6754884488` ✅             |
| **平台**         | iOS                          |
| **定價**         | Free + Premium               |

### 三大主打功能 (SEO 重點)
1. **🤖 AI Birthday Greetings** — 用 AI 產生暖心生日祝福
2. **📅 Never Forget Birthdays** — 永不遺忘朋友的重要日子
3. **🎁 Gift Ideas & Reminders** — 禮物靈感與提醒

---

## 🔍 SEO 關鍵字策略 (年輕人導向)

### 主要關鍵字 (Primary)
| 關鍵字                                    | 搜尋意圖     | 目標頁面    |
| ----------------------------------------- | ------------ | ----------- |
| `birthday message generator AI`           | 找工具寫祝福 | `/features` |
| `never forget birthday app`               | 解決痛點     | `/`         |
| `best friend birthday reminder`           | 情境需求     | `/features` |
| `personal CRM for friends`                | 進階用戶     | `/features` |
| `contact management app for personal use` | 聯絡人管理   | `/features` |
| `relationship manager app`                | 關係管理     | `/`         |
| `friend tracker app`                      | 朋友追蹤     | `/features` |

### 次要關鍵字 (Secondary)
**生日祝福類**
- `AI birthday wishes`
- `personalized greeting messages`
- `what to write in birthday card`
- `heartfelt birthday messages`

**聯絡人管理類**
- `contact organizer app`
- `smart contact manager iOS`
- `personal contacts app`
- `keep in touch with friends app`
- `organize contacts by relationship`

**朋友關係類**
- `friendship tracker app`
- `stay connected with friends`
- `manage friendships app`
- `remember friends birthdays`
- `friend reminder app`

**關係管理類**
- `personal relationship manager`
- `relationship CRM`
- `social relationship tracker`
- `personal network manager`
- `nurture relationships app`

### 長尾關鍵字 (Long-tail)
**生日/祝福情境**
- `how to write a heartfelt birthday message for best friend`
- `AI that writes birthday cards for you`
- `free birthday reminder app for iPhone`

**聯絡人/朋友情境**
- `app to organize friends and family contacts`
- `best app to manage personal relationships`
- `how to keep track of friends birthdays and important dates`
- `app to remember when to contact friends`
- `personal CRM app for maintaining friendships`

**校園/年輕人情境**
- `best app for college students to track friends birthdays`
- `stay connected with friends after graduation`
- `best apps for college students 2025`
- `app to not lose touch with friends`

### 校園相關關鍵字
- `college student friendship app`
- `stay connected with friends after graduation`
- `best apps for college students 2025`

---

## 🛠 技術實作計劃

### 1. 動態頁面 Metadata (`react-helmet-async`)

#### 各頁面 Title & Description（年輕化語氣）

| 頁面         | Title                                                        | Description                                                                                                                       |
| ------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| **首頁**     | Bubly — Never Forget a Birthday Again \| AI Social Assistant | Your AI-powered sidekick for remembering birthdays, sending heartfelt messages, and keeping friendships alive. Free on iOS.       |
| **Features** | AI Birthday Messages & Smart Reminders \| Bubly Features     | Generate personalized birthday wishes with AI, get smart reminders, and never miss a friend's special day. See what Bubly can do. |
| **About**    | Meet Bubly & Bubbo — Our Story                               | We built Bubly because friendships matter. Meet our team and our adorable mascot Bubbo.                                           |
| **Contact**  | Say Hi to the Bubly Team \| Contact & Feedback               | Got ideas? Found a bug? Just wanna chat? We'd love to hear from you.                                                              |
| **Privacy**  | Privacy Policy \| Bubly                                      | Your data stays on your phone. No tracking, no ads, no BS.                                                                        |
| **Terms**    | Terms of Service \| Bubly                                    | The boring legal stuff, but important.                                                                                            |

### 2. Sitemap (`public/sitemap.xml`)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://bubly.app/</loc><priority>1.0</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://bubly.app/features</loc><priority>0.9</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://bubly.app/about</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://bubly.app/contact</loc><priority>0.6</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://bubly.app/privacy</loc><priority>0.4</priority><changefreq>yearly</changefreq></url>
  <url><loc>https://bubly.app/terms</loc><priority>0.4</priority><changefreq>yearly</changefreq></url>
</urlset>
```

### 3. Robots.txt 更新
```
User-agent: *
Allow: /
Sitemap: https://bubly.app/sitemap.xml
```

### 4. JSON-LD 結構化資料
- **SoftwareApplication** — iOS APP 資訊、免費下載、5 星評價
- **Organization** — Bubly 品牌、Logo、社群連結
- **FAQPage** (About 頁) — 提升精選摘要機會

---

## 📝 內容優化重點

### 首頁
- H1: `Never Forget Who Matters` (保留情感訴求)
- 強化 CTA: `Download Free — It's Your Friendship Sidekick`

### Features 頁
- 確保三大功能各有獨立的 H2 標籤
- 圖片 alt 標籤要包含功能關鍵字 (如 `AI birthday message generator screenshot`)

### About 頁
- FAQ 區塊加入結構化資料 (FAQPage Schema)
- 強調校園文化、年輕團隊形象

---

## 🚀 校園行銷 + SEO 整合建議

| 策略                          | SEO 效益                                                     |
| ----------------------------- | ------------------------------------------------------------ |
| **Campus Ambassador Program** | 產生 UGC 內容與社群分享連結                                  |
| **「Best Friend Day」活動頁** | 可建立 `/events/best-friend-day` 等活動頁面吸引搜尋流量      |
| **TikTok/Reels AI Demo**      | 嵌入網站增加停留時間、降低跳出率                             |
| **App Store 評價引導**        | 提升 ASO，間接增加品牌搜尋量                                 |
| **部落格 (未來)**             | 建立 `/blog` 發布如「50+ Birthday Message Ideas」等 SEO 文章 |

---

## ✅ 驗證計劃

### 部署後立即執行
1. **Google Search Console** — 提交 sitemap、驗證網域
2. **Google Rich Results Test** — 驗證結構化資料
3. **Facebook/Twitter Card Validators** — 確認 OG 標籤
4. **Lighthouse SEO Audit** — 目標分數 > 95

---

**狀態**：計劃已更新，待確認後開始實作。
