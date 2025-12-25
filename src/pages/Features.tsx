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
            <p className="text-center text-xs text-muted-foreground/50 mt-2">← 左右滑動查看更多 →</p>
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

      {/* Feature List - Minimal */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                And <span className="gradient-text">More</span>
              </h2>
            </div>
            
            <div className="space-y-3 md:space-y-6">
              {[
                { title: "Relationship Tracking", desc: "Record every interaction and understand contact frequency" },
                { title: "Custom Labels & Tags", desc: "Flexible tagging system to organize contacts your way" },
                { title: "Smart Date Management", desc: "All important dates managed in one intuitive calendar" },
                { title: "Message Templates", desc: "Common greetings ready to personalize and send" },
                { title: "Quick Actions", desc: "Clean interface for fast task completion" },
                { title: "Privacy First", desc: "Your data stays on your device, always secure" },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 80} direction="up">
                  <div className="group flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-500 hover:bg-white/5 border border-transparent hover:border-white/10">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-bubly mt-2 md:mt-2.5 group-hover:scale-150 transition-transform duration-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-0.5 md:mb-1 group-hover:gradient-text transition-all duration-500">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
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
