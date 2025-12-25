import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Bubbo } from "@/components/Bubbo";
import { BubboGallery, FloatingBubbos } from "@/components/BubboGallery";
import { HeroParticles, AmbientOrbs, GradientMesh } from "@/components/HeroParticles";
import { GlassCard } from "@/components/GlassCard";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// App screenshots
import screenshot1 from "@/assets/app-screenshot-1.png";
import screenshot2 from "@/assets/app-screenshot-2.png";
import screenshot3 from "@/assets/app-screenshot-3.png";
import screenshot4 from "@/assets/app-screenshot-4.png";
import screenshot5 from "@/assets/app-screenshot-5.png";
import screenshot6 from "@/assets/app-screenshot-6.png";

const coreFeatures = [
  {
    title: "Smart Contacts",
    subtitle: "Know Your Bubbles",
    description: "Track hobbies, interests, and milestones. Add personal notes and never forget what matters.",
    screenshot: screenshot5,
    gradient: "from-bubly-sky/30 via-bubly-violet/20 to-bubly-pink/30",
  },
  {
    title: "AI Greetings",
    subtitle: "Craft Perfect Wishes",
    description: "Generate personalized messages in any vibe—warm, fun, formal, or short.",
    screenshot: screenshot4,
    gradient: "from-bubly-pink/30 via-bubly-violet/20 to-bubly-sky/30",
  },
  {
    title: "Event Calendar",
    subtitle: "Never Miss a Moment",
    description: "Track birthdays, anniversaries, and special moments with an intelligent calendar.",
    screenshot: screenshot6,
    gradient: "from-bubly-violet/30 via-bubly-pink/20 to-bubly-sky/30",
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
      {/* Hero Section - Immersive */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Layered backgrounds */}
        <GradientMesh />
        <AmbientOrbs />
        <HeroParticles />
        
        {/* Floating decorative Bubbos */}
        <FloatingBubbos />
        
        {/* Content with parallax */}
        <div 
          className="container mx-auto px-4 py-20 relative z-10"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div 
              className="flex-1 text-center lg:text-left"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <div className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-6 animate-fade-in backdrop-blur-md">
                <span className="mr-2 animate-pulse">✨</span>
                Your Social Companion
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-slide-up tracking-tight">
                <span className="gradient-text">Manage contacts.</span>
                <br />
                <span className="text-foreground">Stay close.</span>
              </h1>
              
              <p 
                className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-slide-up leading-relaxed"
                style={{ animationDelay: "0.1s" }}
              >
                Bubly is your intelligent social assistant that helps you nurture relationships, 
                send thoughtful greetings, and never forget the moments that matter.
              </p>
              
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" 
                style={{ animationDelay: "0.2s" }}
              >
                <a
                  href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-bubly text-white font-semibold transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(167,139,250,0.5)] hover:scale-[1.02] shadow-lg"
                >
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on App Store
                </a>
                
                <Link
                  to="/features"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-500 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            {/* Bubbo Mascot with parallax */}
            <div 
              className="flex-1 flex justify-center relative"
              style={{ transform: `translateY(${scrollY * -0.15}px)` }}
            >
              <div className="relative">
                {/* Animated orbital rings */}
                <div className="absolute inset-0 -m-16 rounded-full border border-bubly-sky/10 animate-spin-slow" style={{ animationDuration: "25s" }} />
                <div className="absolute inset-0 -m-24 rounded-full border border-bubly-violet/8 animate-spin-slow" style={{ animationDuration: "35s", animationDirection: "reverse" }} />
                <div className="absolute inset-0 -m-32 rounded-full border border-bubly-pink/5 animate-spin-slow" style={{ animationDuration: "45s" }} />
                
                {/* Glowing backdrop */}
                <div className="absolute inset-0 -m-8 rounded-full bg-gradient-radial from-bubly-violet/20 via-transparent to-transparent blur-3xl animate-breathe" />
                
                <Bubbo size="xl" className="animate-float-gentle drop-shadow-[0_30px_60px_rgba(167,139,250,0.3)]" />
                
                {/* Floating accent dots */}
                <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-bubly-sky/60 animate-drift" />
                <div className="absolute -bottom-2 -left-6 w-2 h-2 rounded-full bg-bubly-pink/50 animate-drift" style={{ animationDelay: "2s" }} />
                <div className="absolute top-1/2 -right-8 w-2.5 h-2.5 rounded-full bg-bubly-violet/40 animate-drift" style={{ animationDelay: "4s" }} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
          style={{ 
            animationDelay: "1s",
            opacity: Math.max(0, 1 - scrollY / 200)
          }}
        >
          <span className="text-xs text-muted-foreground/50 tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-muted-foreground/20 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-muted-foreground/40 animate-bounce-soft" />
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-24 overflow-hidden relative">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-bubly-violet/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <ScrollReveal className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-4 tracking-wide uppercase">
              App Preview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See <span className="gradient-text">Bubly</span> in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A beautifully designed app that makes managing relationships feel natural
            </p>
          </ScrollReveal>

          {/* Screenshots showcase */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 max-w-5xl mx-auto">
            {/* Left screenshot */}
            <ScrollReveal delay={0} direction="up" className="w-full md:w-1/3 md:mt-12">
              <div className="transition-all duration-700 hover:-translate-y-2 group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-bubly-sky/20 via-bubly-violet/10 to-bubly-pink/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white/10 backdrop-blur-sm">
                    <img src={screenshot6} alt="Event Calendar" className="w-full h-auto" />
                  </div>
                </div>
                <p className="text-center mt-5 text-sm font-medium text-muted-foreground/80 group-hover:text-foreground transition-colors duration-500">Event Calendar</p>
              </div>
            </ScrollReveal>

            {/* Center screenshot - featured */}
            <ScrollReveal delay={150} direction="up" className="w-full md:w-1/3 z-10 md:-mt-8">
              <div className="transition-all duration-700 hover:-translate-y-3 group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-bubly-sky/30 via-bubly-violet/20 to-bubly-pink/30 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(167,139,250,0.4)] border border-primary/20 ring-1 ring-white/10">
                    <img src={screenshot3} alt="Smart Dashboard" className="w-full h-auto" />
                  </div>
                </div>
                <p className="text-center mt-5 text-sm font-semibold gradient-text">Smart Dashboard</p>
              </div>
            </ScrollReveal>

            {/* Right screenshot */}
            <ScrollReveal delay={300} direction="up" className="w-full md:w-1/3 md:mt-12">
              <div className="transition-all duration-700 hover:-translate-y-2 group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-bubly-pink/20 via-bubly-violet/10 to-bubly-sky/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white/10 backdrop-blur-sm">
                    <img src={screenshot4} alt="AI Greetings" className="w-full h-auto" />
                  </div>
                </div>
                <p className="text-center mt-5 text-sm font-medium text-muted-foreground/80 group-hover:text-foreground transition-colors duration-500">AI Greetings</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Feature Showcase Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Feature 1: Contact Management */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            <ScrollReveal direction="right" className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-bubly-violet/10 text-bubly-violet text-xs font-medium tracking-wide">
                Contact Details
              </span>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Know Your <span className="gradient-text">Bubbles</span> Better
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Keep track of hobbies, interests, and important milestones in one place. 
                Add personal notes and never forget what matters to your friends.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200} className="flex-1 flex justify-center">
              <div className="relative group transition-all duration-700 hover:-translate-y-2">
                <div className="absolute -inset-3 bg-gradient-to-br from-bubly-sky/20 via-bubly-violet/15 to-bubly-pink/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative max-w-[280px] rounded-[2rem] overflow-hidden shadow-[0_25px_70px_-20px_rgba(0,0,0,0.25)] border border-white/10">
                  <img src={screenshot5} alt="Contact Management" className="w-full h-auto" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Feature 2: Home Dashboard */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <ScrollReveal direction="left" className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-bubly-pink/10 text-bubly-pink text-xs font-medium tracking-wide">
                Your Universe
              </span>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Relationships <span className="gradient-text">Deserve</span> to Be Remembered
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Your universe of friends at a glance. Track birthdays, anniversaries, 
                and special moments with an intelligent calendar that keeps you connected.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200} className="flex-1 flex justify-center">
              <div className="relative group transition-all duration-700 hover:-translate-y-2">
                <div className="absolute -inset-3 bg-gradient-to-br from-bubly-pink/20 via-bubly-violet/15 to-bubly-sky/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative max-w-[280px] rounded-[2rem] overflow-hidden shadow-[0_25px_70px_-20px_rgba(0,0,0,0.25)] border border-white/10">
                  <img src={screenshot1} alt="Home Dashboard" className="w-full h-auto" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bubbo Gallery Section */}
      <section className="py-24 overflow-hidden relative">
        <BubboGallery />
      </section>

      {/* Core Features Section - Premium Design */}
      <section className="py-24 overflow-hidden relative">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-violet/3 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <ScrollReveal className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-4 tracking-wide uppercase">
              Core Features
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything You Need to <br className="hidden md:block" />
              <span className="gradient-text">Stay Connected</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Bubly combines AI technology with thoughtful design to make relationship management effortless
            </p>
          </ScrollReveal>
          
          {/* Feature Cards - Horizontal Scroll on Mobile, Grid on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {coreFeatures.map((feature, index) => (
              <ScrollReveal 
                key={feature.title} 
                delay={index * 150} 
                direction="up"
                className="group"
              >
                <div className="relative h-full">
                  {/* Screenshot with glow */}
                  <div className="relative mb-8">
                    <div className={`absolute -inset-4 bg-gradient-to-br ${feature.gradient} rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700`} />
                    <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-white/10 transition-transform duration-700 group-hover:-translate-y-2">
                      <img 
                        src={feature.screenshot} 
                        alt={feature.title} 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Text content */}
                  <div className="text-center px-2">
                    <span className="text-xs font-medium text-muted-foreground/60 tracking-widest uppercase mb-2 block">
                      {feature.subtitle}
                    </span>
                    <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={500} className="text-center mt-16">
            <Link
              to="/features"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-500 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20"
            >
              Explore All Features
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section - Premium Immersive */}
      <section className="py-32 relative overflow-hidden">
        {/* Layered ambient backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-violet/5 to-bubly-violet/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-bubly-violet/20 via-bubly-pink/10 to-transparent blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-bubly-sky/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-bubly-pink/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              {/* Floating Bubbo with enhanced glow */}
              <div className="relative inline-block mb-12">
                <div className="absolute inset-0 -m-8 bg-gradient-radial from-bubly-violet/30 via-bubly-pink/15 to-transparent blur-2xl animate-breathe" />
                <div className="absolute inset-0 -m-16 rounded-full border border-bubly-violet/10 animate-spin-slow" style={{ animationDuration: "30s" }} />
                <div className="absolute inset-0 -m-24 rounded-full border border-bubly-pink/5 animate-spin-slow" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
                <Bubbo size="lg" className="relative animate-float-gentle drop-shadow-[0_20px_50px_rgba(167,139,250,0.4)]" />
              </div>
              
              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Relationships
                <br />
                <span className="gradient-text">Deserve Better</span>
              </h2>
              
              {/* Subtext */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Join thousands who use Bubly to nurture meaningful connections. 
                Download now and let Bubbo be your social companion.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-bubly text-white font-semibold transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(167,139,250,0.5)] hover:scale-[1.03] shadow-xl"
                >
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download Free on App Store
                </a>
                
                <Link
                  to="/features"
                  className="group inline-flex items-center gap-2 px-8 py-5 text-muted-foreground hover:text-foreground font-medium transition-all duration-300"
                >
                  Learn more about features
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
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
                          {['🎉', '💝', '✨', '🌟'][i-1]}
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
