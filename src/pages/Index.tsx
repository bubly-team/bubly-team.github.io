import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

import { HeroParticles, AmbientOrbs, GradientMesh, Sparkles } from "@/components/HeroParticles";
import { GlassCard } from "@/components/GlassCard";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { FollowCursorBubbo, InteractiveBubbo } from "@/components/InteractiveBubbo";
import { AIAssistantDemo } from "@/components/AIAssistantDemo";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GettingStarted } from "@/components/GettingStarted";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// App screenshots
import screenshotGiftFinder from "@/assets/app-screenshot-gift-finder.png";
import screenshotCalendar from "@/assets/app-screenshot-calendar.png";
import screenshotAIBlessing from "@/assets/app-screenshot-ai-blessings.png";
import screenshot4 from "@/assets/app-screenshot-4.png";
import screenshot5 from "@/assets/app-screenshot-5.png";
import screenshot6 from "@/assets/app-screenshot-6.png";

// Bubbo poses for features
import bubboThinking from "@/assets/bubbo-thinking.png";
import bubboPoint from "@/assets/bubbo-point.png";
import bubboWave from "@/assets/bubbo-wave.png";

// QR Code
import appQRCode from "@/assets/app-qrcode.png";

const APP_STORE_URL = "https://apps.apple.com/us/app/bubly-social-assistant/id6754884488";

const coreFeatures = [
  {
    title: "Gift Finder",
    subtitle: "Never Run Out of Ideas",
    description: "Discover curated treasures for every recipient - luxury, quirky, elegant or thoughtful.",
    screenshot: screenshotGiftFinder,
    // bubbo: bubboThinking,
    // gradient: "from-bubly-sky/30 via-bubly-violet/20 to-bubly-pink/30",
  },
  {
    title: "AI Greetings",
    subtitle: "Craft Perfect Wishes",
    description: "Generate personalized messages in any vibe—warm, fun, formal, or short.",
    screenshot: screenshotAIBlessing,
    // bubbo: bubboWave,
    // gradient: "from-bubly-pink/30 via-bubly-violet/20 to-bubly-sky/30",
  },
  {
    title: "Event Calendar",
    subtitle: "Never Miss a Moment",
    description: "Track birthdays, anniversaries, and special moments with an intelligent calendar.",
    screenshot: screenshotCalendar,
    // bubbo: bubboPoint,
    // gradient: "from-bubly-violet/30 via-bubly-pink/20 to-bubly-sky/30",
  },
];

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <SEO
        title="Bubly — Never Forget a Birthday Again | AI Social Assistant"
        description="Your AI-powered sidekick for remembering birthdays, sending heartfelt messages, and keeping friendships alive. Smart contact management & relationship tracker. Free on iOS."
        path="/"
      />
      {/* Hero Section - Clean & Elegant */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Enhanced background layers */}
        <GradientMesh />
        <AmbientOrbs />
        <HeroParticles />
        <Sparkles />

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16 xl:gap-24">

            {/* Mobile Bubbo - Shown first on mobile for instant visibility */}
            <div className="lg:hidden flex justify-center items-center w-full mb-2">
              <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px]">
                {/* Floating Emojis - Mobile compact version */}
                <div className="absolute -top-1 left-2 text-lg sm:text-xl animate-float-gentle" style={{ animationDuration: "4s" }}>🎓</div>
                <div className="absolute top-2 -right-1 text-lg sm:text-xl animate-float-gentle" style={{ animationDuration: "5s", animationDelay: "0.5s" }}>🎂</div>
                <div className="absolute bottom-1/4 -right-1 text-lg sm:text-xl animate-float-gentle" style={{ animationDuration: "5.5s", animationDelay: "1.5s" }}>✨</div>
                <div className="absolute -bottom-1 left-6 text-lg sm:text-xl animate-float-gentle" style={{ animationDuration: "4.5s", animationDelay: "2s" }}>🎉</div>

                {/* Soft glow behind Bubbo */}
                <div className="absolute inset-0 m-6 bg-gradient-radial from-bubly-violet/25 via-bubly-pink/15 to-transparent blur-xl rounded-full" />

                {/* Bubbo - Mobile size */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 scale-60 sm:scale-75">
                  <FollowCursorBubbo size="lg" />
                </div>
              </div>
            </div>

            {/* Left - Text Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-bubly-violet/10 via-bubly-pink/10 to-bubly-sky/10 backdrop-blur-md border border-bubly-violet/20 mb-4 lg:mb-8 animate-fade-in shadow-[0_0_20px_rgba(167,139,250,0.15)]">
                <span className="text-sm font-medium bg-gradient-to-r from-bubly-violet via-bubly-pink to-bubly-sky bg-clip-text text-transparent">
                  ✨ Your AI Social Companion
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4 lg:mb-6 animate-slide-up">
                <span className="gradient-text">Never Forget</span>
                <br />
                <span className="text-foreground">Who Matters</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 lg:mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Bubly helps you nurture every relationship with AI-powered reminders, personalized greetings, and smart contact management.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start mb-6 lg:mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-premium inline-flex items-center justify-center gap-3 px-6 py-3 lg:px-8 lg:py-4 text-white shadow-lg shadow-bubly-violet/30 hover:shadow-xl hover:shadow-bubly-violet/40 hover:-translate-y-1 active:scale-[0.98]"
                >
                  <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <span className="relative z-10">Download Free</span>
                </a>

                <Link
                  to="/features"
                  className="group btn-glass inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Trust */}
              <div className="flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start text-xs lg:text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2">
                  <span className="text-bubly-violet">★★★★★</span>
                  <span>5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🔒</span>
                  <span>Privacy First</span>
                </div>
              </div>
            </div>

            {/* Right - Bubbo with floating emojis (Desktop only) */}
            <div className="hidden lg:flex flex-1 justify-center items-center w-full">
              <div className="relative w-[420px] h-[420px]">

                {/* Floating Emojis - Campus & Friends theme */}
                <div className="absolute -top-2 left-8 text-4xl animate-float-gentle" style={{ animationDuration: "4s" }}>🎓</div>
                <div className="absolute top-8 -right-2 text-3xl animate-float-gentle" style={{ animationDuration: "5s", animationDelay: "0.5s" }}>🎂</div>
                <div className="absolute top-1/4 -left-4 text-3xl animate-float-gentle" style={{ animationDuration: "6s", animationDelay: "1s" }}>💝</div>
                <div className="absolute bottom-1/4 -right-2 text-4xl animate-float-gentle" style={{ animationDuration: "5.5s", animationDelay: "1.5s" }}>✨</div>
                <div className="absolute -bottom-2 left-12 text-3xl animate-float-gentle" style={{ animationDuration: "4.5s", animationDelay: "2s" }}>🎉</div>
                <div className="absolute bottom-8 right-8 text-2xl animate-float-gentle" style={{ animationDuration: "5s", animationDelay: "2.5s" }}>📚</div>
                <div className="absolute top-1/2 -left-6 text-2xl animate-float-gentle" style={{ animationDuration: "6s", animationDelay: "0.8s" }}>🫶</div>
                <div className="absolute top-12 left-1/4 text-xl animate-float-gentle" style={{ animationDuration: "5s", animationDelay: "1.2s" }}>☕</div>

                {/* Soft glow behind Bubbo */}
                <div className="absolute inset-0 m-16 bg-gradient-radial from-bubly-violet/20 via-bubly-pink/10 to-transparent blur-3xl rounded-full" />

                {/* Bubbo - Center with enhanced presence */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <FollowCursorBubbo size="xl" />
                </div>

                {/* Decorative rings */}
                <div className="absolute inset-0 m-4 rounded-full border border-bubly-sky/10 animate-spin-slow" style={{ animationDuration: "25s" }} />
                <div className="absolute inset-0 m-12 rounded-full border border-dashed border-bubly-violet/10 animate-spin-slow" style={{ animationDuration: "35s", animationDirection: "reverse" }} />
              </div>
            </div>
          </div>

          {/* QR Code - Below hero on mobile, floating on desktop */}
          <div className="mt-8 flex justify-center lg:hidden">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="p-1 bg-white rounded-lg">
                <img src={appQRCode} alt="QR Code" className="w-12 h-12" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Scan to</p>
                <p className="text-sm font-semibold">Download App</p>
              </div>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
        >
          <div className="w-5 h-8 rounded-full border border-muted-foreground/20 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-muted-foreground/30 animate-bounce-soft" />
          </div>
        </div>
      </section>

      {/* Core Features Section - Premium Design */}
      <section className="py-12 md:py-24 overflow-hidden relative">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-violet/3 to-transparent pointer-events-none" />

        {/* Floating campus/friendship emojis - hidden on mobile */}
        <div className="hidden md:block absolute top-16 right-[10%] text-2xl animate-float-gentle opacity-40" style={{ animationDuration: "6s" }}>🎓</div>
        <div className="hidden md:block absolute top-1/4 left-[7%] text-xl animate-float-gentle opacity-35" style={{ animationDuration: "7s", animationDelay: "1s" }}>☕</div>
        <div className="hidden md:block absolute bottom-1/4 right-[8%] text-2xl animate-float-gentle opacity-40" style={{ animationDuration: "8s", animationDelay: "2s" }}>🤝</div>
        <div className="hidden md:block absolute bottom-20 left-[12%] text-xl animate-float-gentle opacity-35" style={{ animationDuration: "6.5s", animationDelay: "0.5s" }}>📸</div>

        <div className="container mx-auto px-4 relative">
          <ScrollReveal className="text-center mb-8 md:mb-20">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-3 md:mb-4 tracking-wide uppercase">
              🚀 Core Features
            </span>
            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
              Everything You Need to <br className="hidden md:block" />
              <span className="gradient-text">Stay Connected</span> 🫂
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
              Bubly combines AI technology with thoughtful design to make relationship management effortless
            </p>
          </ScrollReveal>

          {/* Feature Cards - Horizontal Scroll on Mobile, Grid on Desktop */}
          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-12 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {coreFeatures.map((feature, index) => (
              <ScrollReveal
                key={feature.title}
                delay={index * 150}
                direction="up"
                className="group flex-shrink-0 w-[280px] md:w-auto snap-center"
              >
                <div className="relative h-full">
                  {/* Screenshot with glow and floating Bubbo */}
                  <div className="relative mb-4 md:mb-8">
                    <div className={`absolute -inset-2 md:-inset-4  rounded-[2rem] md:rounded-[2.5rem] blur-xl md:blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700`} />
                    <div className="relative rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] md:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-white/10 transition-transform duration-700 group-hover:-translate-y-2">
                      <img
                        src={feature.screenshot}
                        alt={feature.title}
                        className="w-full h-auto"
                      />
                    </div>

                  </div>

                  {/* Text content */}
                  <div className="text-center px-2">
                    <span className="text-[10px] md:text-xs font-medium text-muted-foreground/60 tracking-widest uppercase mb-1 md:mb-2 block">
                      {feature.subtitle}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:gradient-text transition-all duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Scroll hint for mobile */}
          <div className="flex md:hidden justify-center mt-4 gap-1.5">
            <div className="w-6 h-1 rounded-full bg-bubly-violet/60" />
            <div className="w-1.5 h-1 rounded-full bg-muted-foreground/30" />
            <div className="w-1.5 h-1 rounded-full bg-muted-foreground/30" />
          </div>

          <ScrollReveal delay={500} className="text-center mt-10 md:mt-16">
            <Link
              to="/features"
              className="group btn-glass inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base"
            >
              <span>Explore All Features</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>



      {/* AI Assistant Demo Section - Interactive */}
      <section className="py-12 md:py-24 overflow-hidden relative">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-bubly-sky/3 via-transparent to-bubly-pink/3 pointer-events-none" />

        {/* Floating emojis - hidden on mobile */}
        <div className="hidden md:block absolute top-20 left-[8%] text-3xl animate-float-gentle opacity-50" style={{ animationDuration: "6s" }}>💌</div>
        <div className="hidden md:block absolute top-1/3 right-[10%] text-2xl animate-float-gentle opacity-40" style={{ animationDuration: "7s", animationDelay: "1s" }}>✨</div>
        <div className="hidden md:block absolute bottom-20 left-[12%] text-2xl animate-float-gentle opacity-45" style={{ animationDuration: "8s", animationDelay: "2s" }}>🎉</div>
        <div className="hidden md:block absolute bottom-1/3 right-[8%] text-xl animate-float-gentle opacity-40" style={{ animationDuration: "6.5s", animationDelay: "0.5s" }}>💝</div>

        <div className="container mx-auto px-4 relative">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-3 md:mb-4 tracking-wide uppercase">
              ✨ Interactive Demo
            </span>
            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
              Experience the <span className="gradient-text">AI Magic</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
              See how Bubly's AI crafts personalized greetings that feel genuine and heartfelt
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="up">
            <AIAssistantDemo />
          </ScrollReveal>
        </div>
      </section>

      {/* Getting Started Section */}
      <GettingStarted />



      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section - Premium Immersive */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        {/* Layered ambient backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-violet/5 to-bubly-violet/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-radial from-bubly-violet/20 via-bubly-pink/10 to-transparent blur-3xl opacity-60 pointer-events-none" />
        <div className="hidden md:block absolute top-0 left-1/4 w-[400px] h-[400px] bg-bubly-sky/10 rounded-full blur-3xl pointer-events-none" />
        <div className="hidden md:block absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-bubly-pink/10 rounded-full blur-3xl pointer-events-none" />

        {/* Floating celebration emojis - hidden on mobile */}
        <div className="hidden md:block absolute top-20 left-[15%] text-2xl animate-float-gentle opacity-50" style={{ animationDuration: "5s" }}>🎊</div>
        <div className="hidden md:block absolute top-1/3 right-[12%] text-xl animate-float-gentle opacity-40" style={{ animationDuration: "6s", animationDelay: "1s" }}>💕</div>
        <div className="hidden md:block absolute bottom-1/3 left-[10%] text-2xl animate-float-gentle opacity-45" style={{ animationDuration: "7s", animationDelay: "2s" }}>🌈</div>
        <div className="hidden md:block absolute bottom-24 right-[15%] text-xl animate-float-gentle opacity-40" style={{ animationDuration: "5.5s", animationDelay: "0.5s" }}>🎈</div>
        <div className="hidden md:block absolute top-1/2 left-[5%] text-xl animate-float-gentle opacity-35" style={{ animationDuration: "8s", animationDelay: "1.5s" }}>🌻</div>
        <div className="hidden md:block absolute top-1/4 right-[5%] text-xl animate-float-gentle opacity-35" style={{ animationDuration: "6.5s", animationDelay: "3s" }}>💐</div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              {/* Interactive Bubbo with enhanced effects */}
              <div className="relative inline-block mb-8 md:mb-12">
                <div className="absolute inset-0 -m-4 md:-m-8 bg-gradient-radial from-bubly-violet/30 via-bubly-pink/15 to-transparent blur-xl md:blur-2xl animate-breathe" />
                <div className="hidden md:block absolute inset-0 -m-16 rounded-full border border-bubly-violet/10 animate-spin-slow" style={{ animationDuration: "30s" }} />
                <div className="hidden md:block absolute inset-0 -m-24 rounded-full border border-bubly-pink/5 animate-spin-slow" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
                <InteractiveBubbo
                  size="md"
                  initialPose="default"
                  hoverPose="wave"
                  enableClick={true}
                  showTooltip={false}
                />
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Your Relationships
                <br />
                <span className="gradient-text">Deserve Better</span> 💝
              </h2>

              {/* Subtext */}
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
                Join thousands who use Bubly to nurture meaningful connections.
                Download now and let Bubbo be your social companion.
              </p>

              {/* CTA Buttons + QR Code */}
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8 justify-center items-center">
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center w-full sm:w-auto">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group btn-premium inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-10 md:py-5 text-sm md:text-base text-white shadow-xl shadow-bubly-violet/30 hover:shadow-2xl hover:shadow-bubly-violet/40 hover:-translate-y-1 active:scale-[0.98] w-full sm:w-auto"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    <span className="relative z-10">Download Free</span>
                  </a>

                  <Link
                    to="/features"
                    className="group inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-5 text-sm md:text-base text-muted-foreground hover:text-foreground font-medium transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* QR Code - Desktop only */}
                <div className="hidden lg:flex flex-col items-center gap-3 pl-8 border-l border-white/10">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-br from-bubly-sky/20 via-bubly-violet/10 to-bubly-pink/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-2 bg-white rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={appQRCode}
                        alt="Scan to download Bubly"
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  </a>
                  <p className="text-xs text-muted-foreground/60">Scan to download</p>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="mt-16 pt-12 border-t border-white/5">
                <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground/60">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-bubly-sky/40 to-bubly-violet/40 border-2 border-background flex items-center justify-center text-xs font-medium"
                        >
                          {['🎉', '💝', '✨', '🌟'][i - 1]}
                        </div>
                      ))}
                    </div>
                    <span>Loved by users worldwide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-bubly-violet">★★★★★</span>
                    <span>5.0 App Store Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🔒</span>
                    <span>Privacy First</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
