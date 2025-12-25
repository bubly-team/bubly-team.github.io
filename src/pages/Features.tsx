import { Layout } from "@/components/Layout";
import { Bubbo } from "@/components/Bubbo";
import { GlassCard } from "@/components/GlassCard";
import { Users, Sparkles, Bell, Heart, Tags, Calendar, MessageSquare, Zap } from "lucide-react";

const mainFeatures = [
  {
    icon: Users,
    title: "智能聯絡人管理",
    description: "輕鬆分類、標記您的人際網絡。透過智能分組功能，將朋友、家人、同事清晰整理，一目了然。",
    bubboVariant: "default" as const,
    gradient: "from-bubly-sky to-bubly-blue",
  },
  {
    icon: Sparkles,
    title: "AI 個人化祝福",
    description: "根據對方的個性、你們的關係，AI 自動生成專屬的祝福語句。每一則問候都獨一無二，充滿真心。",
    bubboVariant: "celebrating" as const,
    gradient: "from-bubly-violet to-bubly-pink",
  },
  {
    icon: Bell,
    title: "智能提醒系統",
    description: "生日、紀念日、重要節日...Bubly 會在適當時機提醒您，永不錯過表達關心的最佳時刻。",
    bubboVariant: "waving" as const,
    gradient: "from-bubly-pink to-bubly-sky",
  },
];

const additionalFeatures = [
  {
    icon: Heart,
    title: "關係維護追蹤",
    description: "記錄每次互動，了解聯繫頻率",
  },
  {
    icon: Tags,
    title: "自訂標籤分類",
    description: "靈活的標籤系統，按您的方式整理",
  },
  {
    icon: Calendar,
    title: "重要日期管理",
    description: "一鍵管理所有重要的日期",
  },
  {
    icon: MessageSquare,
    title: "訊息範本庫",
    description: "常用祝福語句，一鍵選用",
  },
  {
    icon: Zap,
    title: "快速操作",
    description: "簡潔介面，快速完成任務",
  },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-6">
              功能介紹
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              讓 <span className="gradient-text">Bubbo</span> 幫您
              <br />
              維護每段關係
            </h1>
            <p className="text-lg text-muted-foreground">
              結合 AI 智能與貼心設計，Bubly 讓人際關係的維護變得輕鬆、自然、有溫度。
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-20`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bubbo Illustration */}
                <div className="flex-1 flex justify-center">
                  <GlassCard className="p-12 relative">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-10`} />
                    <Bubbo 
                      size="xl" 
                      variant={feature.bubboVariant}
                      className="relative z-10"
                    />
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">更多功能</h2>
            <p className="text-muted-foreground">每個細節都為您的社交體驗而設計</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {additionalFeatures.map((feature) => (
              <GlassCard key={feature.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-4">
                  <feature.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GlassCard className="glass-strong text-center py-16 px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              準備好開始了嗎？
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              立即下載 Bubly，讓 AI 助手幫您維護珍貴的人際關係。
            </p>
            <a
              href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-bubly text-white font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              免費下載
            </a>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
