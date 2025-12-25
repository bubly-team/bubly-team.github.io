import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                隱私權<span className="gradient-text">政策</span>
              </h1>
              <p className="text-muted-foreground">
                最後更新日期：2024 年 12 月
              </p>
            </div>

            <GlassCard hover={false} className="prose prose-neutral dark:prose-invert max-w-none p-8 md:p-12">
              <div className="space-y-8 text-foreground/80">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">概述</h2>
                  <p className="leading-relaxed">
                    Bubly（以下簡稱「我們」）非常重視您的隱私權。本隱私權政策說明我們如何收集、使用、儲存和保護您在使用 Bubly 應用程式（以下簡稱「APP」）時提供的資訊。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">資料收集</h2>
                  <p className="leading-relaxed mb-4">
                    <strong className="text-foreground">我們承諾不收集您的個人資料。</strong>Bubly 的設計理念是將您的隱私放在第一位：
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>所有聯絡人資訊僅儲存在您的裝置本機上</li>
                    <li>我們不會存取、收集或傳輸您的聯絡人清單</li>
                    <li>AI 祝福生成功能不會儲存您的對話內容</li>
                    <li>我們不使用追蹤技術或廣告識別碼</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">資料儲存</h2>
                  <p className="leading-relaxed">
                    您在 Bubly 中建立的所有資料（包括聯絡人分組、提醒設定、個人偏好等）均儲存於您的裝置上。若您使用 iCloud 同步功能，資料將透過 Apple 的 iCloud 服務進行加密同步，我們無法存取這些資料。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">第三方服務</h2>
                  <p className="leading-relaxed mb-4">
                    Bubly 可能使用以下第三方服務：
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Apple 服務：</strong>App Store、iCloud（選擇性）、推播通知</li>
                    <li><strong>AI 服務：</strong>用於生成祝福語句，但不會儲存您的輸入內容</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    這些服務各有其隱私權政策，建議您參閱相關說明。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">資料安全</h2>
                  <p className="leading-relaxed">
                    我們採用業界標準的安全措施保護您的資料。由於資料儲存於您的裝置上，我們建議您：
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>保持裝置作業系統更新</li>
                    <li>使用密碼或生物辨識鎖定您的裝置</li>
                    <li>定期備份您的裝置資料</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">兒童隱私</h2>
                  <p className="leading-relaxed">
                    Bubly 並非針對 13 歲以下兒童設計。我們不會故意收集任何兒童的個人資訊。若您發現有兒童向我們提供了個人資訊，請與我們聯繫，我們將立即刪除相關資料。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">您的權利</h2>
                  <p className="leading-relaxed mb-4">
                    您對您的資料擁有完全控制權：
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>存取權：</strong>您可以隨時在 APP 中查看所有資料</li>
                    <li><strong>刪除權：</strong>您可以隨時刪除 APP 中的任何資料</li>
                    <li><strong>可攜權：</strong>您可以匯出您的資料</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">政策更新</h2>
                  <p className="leading-relaxed">
                    我們可能會不時更新本隱私權政策。更新後的版本將在 APP 內及本頁面公告。重大變更時，我們會透過 APP 內通知告知您。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">聯絡我們</h2>
                  <p className="leading-relaxed">
                    若您對本隱私權政策有任何疑問，請透過以下方式聯絡我們：
                  </p>
                  <p className="mt-4">
                    <strong>電子郵件：</strong>
                    <a href="mailto:privacy@bubly.app" className="text-primary hover:underline ml-2">
                      privacy@bubly.app
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

export default Privacy;
