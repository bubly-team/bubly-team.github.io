import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";

const Terms = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                使用<span className="gradient-text">條款</span>
              </h1>
              <p className="text-muted-foreground">
                最後更新日期：2024 年 12 月
              </p>
            </div>

            <GlassCard hover={false} className="prose prose-neutral dark:prose-invert max-w-none p-8 md:p-12">
              <div className="space-y-8 text-foreground/80">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">服務條款接受</h2>
                  <p className="leading-relaxed">
                    歡迎使用 Bubly（以下簡稱「本服務」）。當您下載、安裝或使用本應用程式時，即表示您同意遵守本使用條款。若您不同意這些條款，請勿使用本服務。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">服務說明</h2>
                  <p className="leading-relaxed">
                    Bubly 是一款智慧社交助手應用程式，提供以下功能：
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>聯絡人管理與分類</li>
                    <li>重要日期提醒</li>
                    <li>AI 輔助祝福語句生成</li>
                    <li>互動紀錄追蹤</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">使用者責任</h2>
                  <p className="leading-relaxed mb-4">
                    使用本服務時，您同意：
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>提供真實、準確的資訊</li>
                    <li>不將本服務用於任何非法或未經授權的目的</li>
                    <li>不嘗試破壞、干擾或繞過本服務的任何安全功能</li>
                    <li>不使用本服務發送垃圾訊息或騷擾他人</li>
                    <li>遵守所有適用的法律法規</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">智慧財產權</h2>
                  <p className="leading-relaxed">
                    本服務及其所有內容，包括但不限於文字、圖形、標誌、圖示、圖像、軟體及其編排，均為 Bubly 或其授權人的財產，受著作權法和其他智慧財產權法律保護。
                  </p>
                  <p className="leading-relaxed mt-4">
                    您使用 AI 功能生成的祝福語句，您可以自由使用、分享和修改，但不得用於商業目的或聲稱為第三方 AI 服務的產出。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">訂閱服務</h2>
                  <p className="leading-relaxed mb-4">
                    Bubly 提供免費基本功能和付費訂閱服務：
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>免費版：</strong>基本聯絡人管理、有限次數的 AI 祝福生成</li>
                    <li><strong>訂閱版：</strong>無限制功能存取、進階分析、優先支援</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    訂閱費用將透過您的 Apple ID 帳戶收取。訂閱將自動續約，除非您在當前訂閱期結束前至少 24 小時取消。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">免責聲明</h2>
                  <p className="leading-relaxed">
                    本服務按「現狀」提供，不提供任何明示或暗示的保證，包括但不限於對適銷性、特定用途適用性和非侵權的暗示保證。我們不保證：
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>服務將不間斷或無錯誤</li>
                    <li>服務結果將準確或可靠</li>
                    <li>AI 生成的內容將適合所有場合</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">責任限制</h2>
                  <p className="leading-relaxed">
                    在法律允許的最大範圍內，Bubly 及其關係企業、主管、董事、員工或代理人，在任何情況下均不對因使用或無法使用本服務而產生的任何間接、附帶、特殊、衍生性或懲罰性損害賠償負責。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">服務變更與終止</h2>
                  <p className="leading-relaxed">
                    我們保留隨時修改、暫停或終止本服務（或其任何部分）的權利，恕不另行通知。我們對您或任何第三方因任何修改、暫停或終止服務而造成的損失不承擔責任。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">條款修改</h2>
                  <p className="leading-relaxed">
                    我們可能會不時修改這些使用條款。修改後的條款將在本頁面發布，並在發布時立即生效。您在修改後繼續使用本服務，即表示您接受修改後的條款。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">適用法律</h2>
                  <p className="leading-relaxed">
                    本使用條款受中華民國法律管轄，不考慮其法律衝突原則。任何因本條款引起的爭議，應由中華民國台灣台北地方法院管轄。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">聯絡資訊</h2>
                  <p className="leading-relaxed">
                    若您對本使用條款有任何疑問，請聯絡我們：
                  </p>
                  <p className="mt-4">
                    <strong>電子郵件：</strong>
                    <a href="mailto:legal@bubly.app" className="text-primary hover:underline ml-2">
                      legal@bubly.app
                    </a>
                  </p>
                </section>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
