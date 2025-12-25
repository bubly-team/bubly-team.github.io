import { Layout } from "@/components/Layout";
import { Bubbo } from "@/components/Bubbo";
import { GlassCard } from "@/components/GlassCard";
import { Users, Sparkles, Bell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Users,
    title: "智能聯絡人管理",
    description: "輕鬆分類、標記您的人際網絡",
  },
  {
    icon: Sparkles,
    title: "AI 個人化祝福",
    description: "生成貼心、專屬的節日問候",
  },
  {
    icon: Bell,
    title: "智能提醒系統",
    description: "永不錯過重要的聯繫時刻",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-6 animate-fade-in">
                ✨ 全新社交體驗
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
                <span className="gradient-text">Manage contacts.</span>
                <br />
                <span className="text-foreground">Stay close.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Bubly 是您的智慧社交助手，幫助您管理聯絡人、發送個人化祝福，
                讓每一次互動都充滿溫度。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <a
                  href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-bubly text-white font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store 下載
                </a>
                
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass font-semibold hover:bg-white/80 transition-all group"
                >
                  了解更多
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            {/* Bubbo Mascot */}
            <div className="flex-1 flex justify-center relative">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 -m-8 rounded-full border-2 border-bubly-sky/20 animate-pulse" />
                <div className="absolute inset-0 -m-16 rounded-full border border-bubly-violet/10 animate-pulse" style={{ animationDelay: "0.5s" }} />
                
                <Bubbo size="xl" className="animate-float pulse-glow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">核心功能</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bubly 結合 AI 技術，讓人際關係維護變得輕鬆自然
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <GlassCard key={feature.title} className="text-center group">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-bubly mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              查看所有功能
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GlassCard className="glass-strong text-center py-16 px-8">
            <Bubbo size="lg" className="mx-auto mb-8" variant="celebrating" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              開始使用 <span className="gradient-text">Bubly</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              立即下載，讓 Bubbo 成為您的社交助手，維護每一段珍貴的關係。
            </p>
            <a
              href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-bubly text-white font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
            >
              免費下載
            </a>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
