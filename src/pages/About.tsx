import { Layout } from "@/components/Layout";
import { Bubbo } from "@/components/Bubbo";
import { GlassCard } from "@/components/GlassCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Bubly 是什麼？",
    answer: "Bubly 是一款智慧社交助手 APP，幫助您管理聯絡人、記住重要日期，並透過 AI 生成個人化的祝福語句，讓您輕鬆維護每一段珍貴的人際關係。",
  },
  {
    question: "Bubly 如何保護我的隱私？",
    answer: "我們非常重視您的隱私。Bubly 不會收集或分享您的個人資料給第三方。所有聯絡人資訊都安全地儲存在您的裝置上，AI 生成功能也採用端到端加密技術。",
  },
  {
    question: "AI 祝福語句是如何運作的？",
    answer: "我們的 AI 會根據您與聯絡人的關係類型、過往互動紀錄，以及特定節日或場合，生成獨特且貼心的祝福語句。您可以直接使用或進行編輯調整。",
  },
  {
    question: "Bubly 支援哪些平台？",
    answer: "目前 Bubly 已在 iOS App Store 上架，支援 iPhone 和 iPad。Android 版本正在開發中，敬請期待！",
  },
  {
    question: "Bubly 是免費的嗎？",
    answer: "Bubly 提供基本功能免費使用。進階功能如無限制 AI 祝福生成、進階分析報告等，可透過訂閱方案解鎖。",
  },
  {
    question: "如何匯入我的聯絡人？",
    answer: "首次使用時，Bubly 會引導您從手機通訊錄匯入聯絡人。您也可以手動新增或透過 vCard 格式匯入。",
  },
  {
    question: "我可以自訂提醒頻率嗎？",
    answer: "當然可以！您可以為每位聯絡人設定不同的提醒頻率，從每週、每月到特定日期，完全依照您的需求調整。",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-6">
                關於我們
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                認識 <span className="gradient-text">Bubbo</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Bubbo 是 Bubly 的吉祥物，象徵著溫暖、連結與關懷。
                就像泡泡一樣，人與人之間的關係需要用心呵護，才能閃閃發光。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                我們創造 Bubly，是希望在這個忙碌的時代，
                幫助每個人用更簡單的方式維護珍貴的人際關係，
                讓每一次問候都恰到好處，每一份關心都被記得。
              </p>
            </div>

            {/* Bubbo */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <GlassCard className="p-16 relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-bubly-sky/20 via-bubly-violet/10 to-bubly-pink/20" />
                  <Bubbo size="xl" className="relative z-10" />
                </GlassCard>
                {/* Floating decorations */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-bubly-sky/30 animate-bubble-float" />
                <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-bubly-violet/20 animate-bubble-float" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 -right-8 w-6 h-6 rounded-full bg-bubly-pink/25 animate-bubble-float" style={{ animationDelay: "0.5s" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <GlassCard className="glass-strong p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">
                我們的<span className="gradient-text">故事</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  在這個數位時代，我們擁有無數的聯絡方式，卻常常忘記主動問候。
                  生日快樂說不出口，節日祝福來不及發送，重要的人漸漸被忙碌淹沒。
                </p>
                <p>
                  Bubly 的誕生，源自一個簡單的念頭：
                  <strong className="text-foreground">如果有個小助手，能在對的時間提醒我們關心對的人，該有多好？</strong>
                </p>
                <p>
                  於是，我們創造了 Bubbo — 一個可愛、貼心的智慧夥伴。
                  它不只是個 APP，更是您維護人際關係的好幫手。
                  讓每一句祝福都來得剛好，每一份關心都不會被遺忘。
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              常見<span className="gradient-text">問題</span>
            </h2>
            <p className="text-muted-foreground">
              關於 Bubly 的疑問，我們為您解答
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <GlassCard hover={false} className="p-2">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                    <AccordionTrigger className="text-left px-4 hover:no-underline hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
