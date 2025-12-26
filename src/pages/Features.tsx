import { Layout } from "@/components/Layout";
import { Bubbo } from "@/components/Bubbo";
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

// Bubbo variants
import bubboCool from "@/assets/bubbo-cool.png";
import bubboArtist from "@/assets/bubbo-artist.png";
import bubboProfessor from "@/assets/bubbo-professor.png";

const mainFeatures = [
  {
    tag: "Contact Management",
    title: "Know Your Bubbles Better",
    description: "Keep track of hobbies, interests, and important milestones in one place. Add personal notes, gift ideas, and never forget what matters to your friends.",
    screenshot: screenshot5,
    bubbo: bubboCool,
    gradient: "from-bubly-sky/30 via-bubly-violet/20 to-bubly-pink/30",
  },
  {
    tag: "AI Greetings",
    title: "Craft Perfect Wishes",
    description: "Generate personalized greetings in any vibe—warm, fun, formal, or short. Every message is unique and tailored to your relationship.",
    screenshot: screenshot4,
    bubbo: bubboArtist,
    gradient: "from-bubly-pink/30 via-bubly-violet/20 to-bubly-sky/30",
  },
  {
    tag: "Smart Calendar",
    title: "Never Miss a Moment",
    description: "Track birthdays, anniversaries, and special events with an intelligent calendar. Get timely reminders so you're always prepared to celebrate.",
    screenshot: screenshot6,
    bubbo: bubboProfessor,
    gradient: "from-bubly-violet/30 via-bubly-pink/20 to-bubly-sky/30",
  },
];

const highlights = [
  {
    title: "Dashboard Overview",
    description: "See all your connections at a glance with an elegant, intuitive interface.",
    screenshot: screenshot3,
  },
  {
    title: "Relationship Universe",
    description: "Your personal galaxy of friends, organized beautifully.",
    screenshot: screenshot1,
  },
  {
    title: "Contact Profiles",
    description: "Rich profiles with interests, notes, and important dates.",
    screenshot: screenshot2,
  },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero Section - Immersive */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-bubly-violet/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-bubly-sky/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-bubly-pink/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full glass text-[10px] md:text-xs font-medium text-muted-foreground mb-4 md:mb-6 tracking-wide uppercase">
              Features
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 leading-tight">
              Let <span className="gradient-text">Bubbo</span> Help You
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Nurture Every Relationship
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              Combining AI intelligence with thoughtful design, Bubly makes relationship management effortless, natural, and meaningful.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Features - Premium Showcase */}
      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="space-y-16 md:space-y-32">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 md:gap-12 lg:gap-20`}
              >
                {/* Content */}
                <ScrollReveal 
                  direction={index % 2 === 0 ? "right" : "left"} 
                  className="flex-1 text-center lg:text-left"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-bubly-violet/10 text-bubly-violet text-[10px] md:text-xs font-medium tracking-wide mb-3 md:mb-4">
                    {feature.tag}
                  </span>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                    {feature.title.split(' ').map((word, i, arr) => 
                      i === arr.length - 1 ? (
                        <span key={i} className="gradient-text">{word}</span>
                      ) : (
                        <span key={i}>{word} </span>
                      )
                    )}
                  </h2>
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                    {feature.description}
                  </p>
                </ScrollReveal>

                {/* Screenshot with Bubbo */}
                <ScrollReveal 
                  direction={index % 2 === 0 ? "left" : "right"} 
                  delay={200}
                  className="flex-1 flex justify-center"
                >
                  <div className="relative group">
                    {/* Ambient glow */}
                    <div className={`absolute -inset-4 md:-inset-6 bg-gradient-to-br ${feature.gradient} rounded-[2rem] md:rounded-[3rem] blur-2xl md:blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700`} />
                    
                    {/* Screenshot */}
                    <div className="relative w-[200px] md:w-[280px] lg:max-w-[320px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] md:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] border border-white/10 transition-transform duration-700 group-hover:-translate-y-2">
                      <img 
                        src={feature.screenshot} 
                        alt={feature.title} 
                        className="w-full h-auto"
                      />
                    </div>
                    
                    {/* Floating Bubbo */}
                    <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-16 h-16 md:w-24 md:h-24 animate-float-gentle">
                      <img 
                        src={feature.bubbo} 
                        alt="Bubbo" 
                        className="w-full h-full object-contain drop-shadow-xl"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Highlights - Horizontal Scroll on Mobile */}
      <section className="py-16 md:py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-violet/3 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <ScrollReveal className="text-center mb-8 md:mb-16">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full glass text-[10px] md:text-xs font-medium text-muted-foreground mb-3 md:mb-4 tracking-wide uppercase">
              App Highlights
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              Designed with <span className="gradient-text">Care</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
              Every screen crafted for a delightful experience
            </p>
          </ScrollReveal>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 px-2 scrollbar-hide snap-x snap-mandatory -mx-4">
              {highlights.map((item, index) => (
                <div 
                  key={item.title} 
                  className="flex-shrink-0 w-[75vw] max-w-[280px] snap-center first:ml-4 last:mr-4"
                >
                  <div className="relative">
                    <div className="relative mb-4">
                      <div className="absolute -inset-2 bg-gradient-to-br from-bubly-sky/20 via-bubly-violet/15 to-bubly-pink/20 rounded-[1.5rem] blur-xl opacity-40" />
                      <div className="relative rounded-[1.25rem] overflow-hidden shadow-[0_15px_40px_-12px_rgba(0,0,0,0.2)] border border-white/10">
                        <img 
                          src={item.screenshot} 
                          alt={item.title} 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    <div className="text-center px-2">
                      <h3 className="text-base font-bold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground/50 mt-2">← Swipe to explore →</p>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
            {highlights.map((item, index) => (
              <ScrollReveal 
                key={item.title} 
                delay={index * 150} 
                direction="up"
                className="group"
              >
                <div className="relative">
                  <div className="relative mb-6">
                    <div className="absolute -inset-3 bg-gradient-to-br from-bubly-sky/20 via-bubly-violet/15 to-bubly-pink/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                    <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-white/10 transition-transform duration-700 group-hover:-translate-y-2">
                      <img 
                        src={item.screenshot} 
                        alt={item.title} 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="text-center px-2">
                    <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-500">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feature List - Modern Bento Grid Design */}
      <section className="py-16 md:py-24 overflow-hidden relative">
        {/* Enhanced ambient background with animated gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-bubly-violet/10 via-background to-background pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bubly-violet/30 to-transparent" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-[10%] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-bubly-violet/15 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-[10%] w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-bubly-pink/15 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-bubly-sky/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-4 md:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bubly-violet opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-bubly-violet"></span>
              </span>
              <span className="text-[10px] md:text-xs font-medium text-muted-foreground tracking-widest uppercase">
                Additional Features
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              And There's <span className="gradient-text">So Much More</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
              Discover the full suite of features designed to make relationship management effortless
            </p>
          </ScrollReveal>

          {/* Bento Grid Layout */}
          <div className="max-w-6xl mx-auto">
            {/* Mobile: Single column stack */}
            <div className="md:hidden space-y-4">
              {[
                {
                  icon: "🔄",
                  title: "Relationship Tracking",
                  desc: "Record every interaction and understand contact frequency with intelligent insights",
                  accent: "bubly-violet"
                },
                {
                  icon: "🏷️",
                  title: "Custom Labels & Tags",
                  desc: "Flexible tagging system to organize contacts your way with unlimited categories",
                  accent: "bubly-pink"
                },
                {
                  icon: "📅",
                  title: "Smart Date Management",
                  desc: "All important dates managed in one intuitive calendar with smart reminders",
                  accent: "bubly-sky"
                },
                {
                  icon: "💬",
                  title: "Message Templates",
                  desc: "Common greetings ready to personalize and send in seconds",
                  accent: "bubly-violet"
                },
                {
                  icon: "⚡",
                  title: "Quick Actions",
                  desc: "Clean interface for fast task completion and seamless workflow",
                  accent: "bubly-pink"
                },
                {
                  icon: "🔒",
                  title: "Privacy First",
                  desc: "Your data stays on your device, always secure and under your control",
                  accent: "bubly-sky"
                },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 80} direction="up">
                  <div className="group relative overflow-hidden">
                    {/* Animated border gradient */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-bubly-violet via-bubly-pink to-bubly-sky opacity-0 group-active:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative bg-background/80 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
                      <div className="flex items-start gap-4">
                        {/* Icon badge */}
                        <div className="relative flex-shrink-0">
                          <div className="text-2xl w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                            {item.icon}
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-base mb-1">{item.title}</h3>
                          <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Desktop: Bento Grid */}
            <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-5">
              {/* Large Feature Card - Relationship Tracking */}
              <ScrollReveal delay={0} direction="up" className="col-span-2 row-span-2">
                <div className="group relative h-full overflow-hidden rounded-3xl">
                  {/* Animated gradient border */}
                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-bubly-violet via-bubly-pink to-bubly-sky background-animate opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Spotlight effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(167,139,250,0.15), transparent 40%)'
                    }}
                  />
                  
                  <div className="relative h-full bg-background/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/5">
                    {/* Floating decoration */}
                    <div className="absolute top-6 right-6 w-20 h-20 lg:w-28 lg:h-28 bg-gradient-to-br from-bubly-violet/20 to-bubly-pink/20 rounded-full blur-2xl" />
                    <div className="absolute bottom-10 right-10 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-bubly-sky/20 to-bubly-violet/20 rounded-full blur-xl" />
                    
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Number badge */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-bubly-violet to-bubly-pink text-white font-bold text-lg lg:text-xl shadow-lg shadow-bubly-violet/30">
                          01
                        </span>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-bubly-violet/10 border border-bubly-violet/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-bubly-violet animate-pulse" />
                          <span className="text-[10px] font-medium text-bubly-violet uppercase tracking-wider">Core Feature</span>
                        </div>
                      </div>
                      
                      {/* Icon */}
                      <div className="text-5xl lg:text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        🔄
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:gradient-text transition-all duration-500">
                        Relationship Tracking
                      </h3>
                      
                      <p className="text-muted-foreground text-base lg:text-lg leading-relaxed flex-1">
                        Record every interaction and understand contact frequency with intelligent insights. Track your communication patterns and strengthen your bonds over time.
                      </p>
                      
                      {/* Feature highlights */}
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex flex-wrap gap-2">
                          {['Interaction Log', 'Frequency Analysis', 'Smart Insights'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-muted-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Custom Labels Card */}
              <ScrollReveal delay={100} direction="up">
                <div className="group relative h-full min-h-[200px] overflow-hidden rounded-3xl">
                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-bubly-pink/50 to-bubly-violet/50 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full bg-background/80 backdrop-blur-xl rounded-3xl p-6 lg:p-7 border border-white/5">
                    <div className="absolute top-4 right-4 w-16 h-16 bg-bubly-pink/20 rounded-full blur-xl" />
                    
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-bubly-pink to-bubly-violet text-white font-bold text-sm shadow-lg shadow-bubly-pink/30 mb-4">
                      02
                    </span>
                    
                    <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      🏷️
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 group-hover:gradient-text transition-all duration-500">
                      Custom Labels & Tags
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Flexible tagging system to organize contacts your way
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Smart Date Card */}
              <ScrollReveal delay={200} direction="up">
                <div className="group relative h-full min-h-[200px] overflow-hidden rounded-3xl">
                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-bubly-sky/50 to-bubly-violet/50 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full bg-background/80 backdrop-blur-xl rounded-3xl p-6 lg:p-7 border border-white/5">
                    <div className="absolute top-4 right-4 w-16 h-16 bg-bubly-sky/20 rounded-full blur-xl" />
                    
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-bubly-sky to-bubly-violet text-white font-bold text-sm shadow-lg shadow-bubly-sky/30 mb-4">
                      03
                    </span>
                    
                    <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      📅
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 group-hover:gradient-text transition-all duration-500">
                      Smart Date Management
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Intuitive calendar with smart reminders
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Message Templates Card */}
              <ScrollReveal delay={300} direction="up">
                <div className="group relative h-full min-h-[200px] overflow-hidden rounded-3xl">
                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-bubly-violet/50 to-bubly-sky/50 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full bg-background/80 backdrop-blur-xl rounded-3xl p-6 lg:p-7 border border-white/5">
                    <div className="absolute top-4 right-4 w-16 h-16 bg-bubly-violet/20 rounded-full blur-xl" />
                    
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-bubly-violet to-bubly-sky text-white font-bold text-sm shadow-lg shadow-bubly-violet/30 mb-4">
                      04
                    </span>
                    
                    <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      💬
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 group-hover:gradient-text transition-all duration-500">
                      Message Templates
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Ready-to-use greetings for any occasion
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Wide Card - Quick Actions */}
              <ScrollReveal delay={400} direction="up" className="col-span-2">
                <div className="group relative h-full overflow-hidden rounded-3xl">
                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-bubly-pink via-bubly-violet to-bubly-sky opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full bg-background/80 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-bubly-pink/15 rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-bubly-violet/15 rounded-full blur-xl" />
                    
                    <div className="relative z-10 flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-bubly-pink to-bubly-violet text-white font-bold text-lg shadow-lg shadow-bubly-pink/30">
                          05
                        </span>
                      </div>
                      
                      <div className="text-4xl lg:text-5xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        ⚡
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:gradient-text transition-all duration-500">
                          Quick Actions
                        </h3>
                        <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                          Clean interface for fast task completion. Do more with fewer taps and seamless workflow integration.
                        </p>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="hidden lg:flex items-center gap-3">
                        {[1, 2, 3].map((i) => (
                          <div 
                            key={i}
                            className="w-3 h-3 rounded-full bg-gradient-to-r from-bubly-violet to-bubly-pink opacity-30 group-hover:opacity-100 transition-all duration-500"
                            style={{ transitionDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Privacy Card - Full width bottom */}
              <ScrollReveal delay={500} direction="up" className="col-span-3">
                <div className="group relative overflow-hidden rounded-3xl">
                  {/* Premium animated border */}
                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-bubly-sky via-bubly-violet via-bubly-pink to-bubly-sky background-animate opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-background/80 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/5">
                    {/* Floating decorations */}
                    <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-24 h-24 bg-bubly-sky/20 rounded-full blur-2xl" />
                    <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-24 h-24 bg-bubly-pink/20 rounded-full blur-2xl" />
                    
                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 text-center lg:text-left">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-bubly-sky via-bubly-violet to-bubly-pink text-white font-bold text-xl shadow-lg shadow-bubly-violet/30">
                          06
                        </span>
                        
                        <div className="text-4xl lg:text-5xl transform group-hover:scale-110 transition-transform duration-500">
                          🔒
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                          <h3 className="text-xl lg:text-2xl font-bold group-hover:gradient-text transition-all duration-500">
                            Privacy First
                          </h3>
                          <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-medium">
                            SECURE
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-2xl">
                          Your data stays on your device, always secure and under your control. We believe privacy is a fundamental right, not a feature.
                        </p>
                      </div>
                      
                      {/* Security indicators */}
                      <div className="hidden lg:flex flex-col gap-2">
                        {['End-to-End', 'Local Storage', 'No Tracking'].map((item, i) => (
                          <div key={item} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                            <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        {/* Ambient backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-violet/5 to-bubly-violet/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-gradient-radial from-bubly-violet/20 via-bubly-pink/10 to-transparent blur-3xl opacity-60 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center">
              {/* Bubbo */}
              <div className="relative inline-block mb-6 md:mb-10">
                <div className="absolute inset-0 -m-4 md:-m-6 bg-gradient-radial from-bubly-violet/25 via-bubly-pink/15 to-transparent blur-2xl animate-breathe" />
                <Bubbo size="md" className="relative animate-float-gentle drop-shadow-[0_20px_50px_rgba(167,139,250,0.4)] md:hidden" />
                <Bubbo size="lg" className="relative animate-float-gentle drop-shadow-[0_20px_50px_rgba(167,139,250,0.4)] hidden md:block" />
              </div>
              
              <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Ready to <span className="gradient-text">Get Started</span>?
              </h2>
              
              <p className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto mb-6 md:mb-10 leading-relaxed px-4">
                Download Bubly now and let AI help you nurture your precious relationships.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <a
                  href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-10 py-4 md:py-5 rounded-full bg-gradient-bubly text-white font-semibold transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(167,139,250,0.5)] hover:scale-[1.03] shadow-xl text-sm md:text-base"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download Free on App Store
                </a>
                
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-5 text-muted-foreground hover:text-foreground font-medium transition-all duration-300 text-sm md:text-base"
                >
                  Have questions?
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
