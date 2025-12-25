import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { InteractiveBubbo } from "@/components/InteractiveBubbo";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Bubbo variants
import bubboMain from "@/assets/bubbo.png";
import bubboCool from "@/assets/bubbo-cool.png";
import bubboMusic from "@/assets/bubbo-music.png";
import bubboArtist from "@/assets/bubbo-artist.png";
import bubboProfessor from "@/assets/bubbo-professor.png";
import bubboSport from "@/assets/bubbo-sport.png";

const faqs = [
  {
    question: "What is Bubly?",
    answer: "Bubly is an intelligent social assistant app that helps you manage contacts, remember important dates, and generate personalized greetings through AI, making it easy to nurture every precious relationship.",
  },
  {
    question: "How does Bubly protect my privacy?",
    answer: "We take your privacy very seriously. Bubly does not collect or share your personal data with third parties. All contact information is securely stored on your device, and AI features use end-to-end encryption.",
  },
  {
    question: "How does the AI greeting feature work?",
    answer: "Our AI generates unique and thoughtful greeting messages based on your relationship type, past interactions, and specific occasions or holidays. You can use them directly or edit as needed.",
  },
  {
    question: "Which platforms does Bubly support?",
    answer: "Bubly is currently available on the iOS App Store, supporting iPhone and iPad. An Android version is in development—stay tuned!",
  },
  {
    question: "Is Bubly free?",
    answer: "Bubly offers free basic features. Advanced features like unlimited AI greetings and detailed analytics can be unlocked through subscription plans.",
  },
  {
    question: "How do I import my contacts?",
    answer: "When you first use Bubly, the app will guide you to import contacts from your phone's address book. You can also manually add contacts or import via vCard format.",
  },
  {
    question: "Can I customize reminder frequency?",
    answer: "Absolutely! You can set different reminder frequencies for each contact—weekly, monthly, or specific dates—completely tailored to your needs.",
  },
];

const values = [
  {
    title: "Connection",
    description: "We believe meaningful relationships are the foundation of a fulfilling life.",
    emoji: "💝",
  },
  {
    title: "Simplicity",
    description: "Technology should simplify life, not complicate it.",
    emoji: "✨",
  },
  {
    title: "Privacy",
    description: "Your personal connections deserve the highest level of protection.",
    emoji: "🔒",
  },
  {
    title: "Delight",
    description: "Every interaction with Bubly should bring a smile to your face.",
    emoji: "🎉",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section - Immersive */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-bubly-violet/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-bubly-sky/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-bubly-pink/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-24">
            {/* Mobile: Bubbo first for better visual hierarchy */}
            <ScrollReveal direction="up" delay={100} className="lg:hidden flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 -m-8 bg-gradient-radial from-bubly-violet/25 via-bubly-pink/15 to-transparent blur-2xl animate-breathe" />
                <div className="absolute inset-0 -m-12 rounded-full border border-bubly-violet/10 animate-spin-slow" style={{ animationDuration: "30s" }} />
                <div className="relative">
                  <img 
                    src={bubboMain} 
                    alt="Bubbo" 
                    className="w-40 h-40 object-contain animate-float-gentle drop-shadow-[0_20px_40px_rgba(167,139,250,0.4)]"
                  />
                </div>
                <div className="absolute -top-4 -right-2 w-10 h-10 animate-drift">
                  <img src={bubboCool} alt="" className="w-full h-full object-contain opacity-80" />
                </div>
                <div className="absolute -bottom-2 -left-4 w-9 h-9 animate-drift" style={{ animationDelay: "2s" }}>
                  <img src={bubboMusic} alt="" className="w-full h-full object-contain opacity-80" />
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="right" className="flex-1 text-center lg:text-left">
              <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full glass text-[10px] md:text-xs font-medium text-muted-foreground mb-4 md:mb-6 tracking-wide uppercase">
                About Us
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 leading-tight">
                Meet <span className="gradient-text">Bubbo</span>
              </h1>
              <p className="text-sm md:text-xl text-muted-foreground leading-relaxed mb-4 md:mb-6">
                Bubbo is Bubly's mascot, symbolizing warmth, connection, and care.
                Like bubbles, relationships need tender attention to shine bright.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                We created Bubly to help everyone maintain meaningful relationships 
                in this busy world—making every greeting timely and every care remembered.
              </p>
            </ScrollReveal>

            {/* Desktop: Bubbo Showcase */}
            <ScrollReveal direction="left" delay={200} className="hidden lg:flex flex-1 justify-center">
              <div className="relative">
                <div className="absolute inset-0 -m-12 bg-gradient-radial from-bubly-violet/25 via-bubly-pink/15 to-transparent blur-3xl animate-breathe" />
                <div className="absolute inset-0 -m-20 rounded-full border border-bubly-violet/10 animate-spin-slow" style={{ animationDuration: "30s" }} />
                <div className="absolute inset-0 -m-32 rounded-full border border-bubly-pink/5 animate-spin-slow" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
                <div className="relative">
                  <img 
                    src={bubboMain} 
                    alt="Bubbo" 
                    className="w-64 h-64 object-contain animate-float-gentle drop-shadow-[0_30px_60px_rgba(167,139,250,0.4)]"
                  />
                </div>
                <div className="absolute -top-8 -right-4 w-16 h-16 animate-drift">
                  <img src={bubboCool} alt="" className="w-full h-full object-contain opacity-80" />
                </div>
                <div className="absolute -bottom-4 -left-8 w-14 h-14 animate-drift" style={{ animationDelay: "2s" }}>
                  <img src={bubboMusic} alt="" className="w-full h-full object-contain opacity-80" />
                </div>
                <div className="absolute top-1/2 -right-12 w-12 h-12 animate-drift" style={{ animationDelay: "4s" }}>
                  <img src={bubboArtist} alt="" className="w-full h-full object-contain opacity-70" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Story - Premium */}
      <section className="py-16 md:py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-violet/3 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-12">
              <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full glass text-[10px] md:text-xs font-medium text-muted-foreground mb-3 md:mb-4 tracking-wide uppercase">
                Our Journey
              </span>
              <h2 className="text-2xl md:text-4xl font-bold">
                The <span className="gradient-text">Story</span> Behind Bubly
              </h2>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-bubly-sky/10 via-bubly-violet/5 to-bubly-pink/10 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-50" />
              
              <div className="relative p-5 md:p-12 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    In this digital age, we have countless ways to connect, yet we often forget to reach out.
                    Birthday wishes go unsent, holiday greetings arrive too late, and important people slowly fade into the noise of busy life.
                  </p>
                  <p>
                    Bubly was born from a simple idea:
                    <span className="text-foreground font-medium"> What if there was a little helper that reminded us to care for the right people at the right time?</span>
                  </p>
                  <p>
                    That's how Bubbo came to be—a cute, thoughtful AI companion.
                    More than just an app, it's your partner in nurturing relationships,
                    making every greeting perfectly timed and every care unforgettable.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-8 md:mb-16">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full glass text-[10px] md:text-xs font-medium text-muted-foreground mb-3 md:mb-4 tracking-wide uppercase">
              What We Believe
            </span>
            <h2 className="text-2xl md:text-4xl font-bold">
              Our <span className="gradient-text">Values</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal 
                key={value.title} 
                delay={index * 100} 
                direction="up"
                className="group"
              >
                <div className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-500 hover:bg-white/5 border border-transparent hover:border-white/10">
                  <div className="text-2xl md:text-4xl mb-2 md:mb-4 transition-transform duration-500 group-hover:scale-110">
                    {value.emoji}
                  </div>
                  <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2 group-hover:gradient-text transition-all duration-500">
                    {value.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Bubbos - Horizontal Scroll on Mobile */}
      <section className="py-12 md:py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-pink/3 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <ScrollReveal className="text-center mb-8 md:mb-16">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full glass text-[10px] md:text-xs font-medium text-muted-foreground mb-3 md:mb-4 tracking-wide uppercase">
              The Family
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
              Meet the <span className="gradient-text">Bubbos</span>
            </h2>
            <p className="text-xs md:text-base text-muted-foreground max-w-xl mx-auto">
              Each Bubbo represents a different personality, just like your diverse circle of friends
            </p>
          </ScrollReveal>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4">
              {[
                { img: bubboMain, name: "Original", size: "w-20 h-20" },
                { img: bubboCool, name: "Cool", size: "w-18 h-18" },
                { img: bubboMusic, name: "Music", size: "w-18 h-18" },
                { img: bubboArtist, name: "Artist", size: "w-18 h-18" },
                { img: bubboProfessor, name: "Professor", size: "w-18 h-18" },
                { img: bubboSport, name: "Sport", size: "w-18 h-18" },
              ].map((bubbo, index) => (
                <div key={bubbo.name} className="flex-shrink-0 snap-center">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <img 
                        src={bubbo.img} 
                        alt={bubbo.name}
                        className={`${bubbo.size} object-contain`}
                      />
                    </div>
                    <span className="mt-2 text-[10px] font-medium text-muted-foreground/60">
                      {bubbo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground/50 mt-1">← 左右滑動查看更多 →</p>
          </div>

          {/* Desktop: Flex wrap */}
          <div className="hidden md:flex flex-wrap justify-center items-end gap-6 md:gap-10">
            {[
              { img: bubboMain, name: "Original", size: "w-28 h-28" },
              { img: bubboCool, name: "Cool", size: "w-24 h-24" },
              { img: bubboMusic, name: "Music", size: "w-24 h-24" },
              { img: bubboArtist, name: "Artist", size: "w-24 h-24" },
              { img: bubboProfessor, name: "Professor", size: "w-24 h-24" },
              { img: bubboSport, name: "Sport", size: "w-24 h-24" },
            ].map((bubbo, index) => (
              <ScrollReveal 
                key={bubbo.name} 
                delay={index * 80} 
                direction="up"
                className="group"
              >
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 -m-2 bg-gradient-radial from-bubly-violet/20 via-transparent to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img 
                      src={bubbo.img} 
                      alt={bubbo.name}
                      className={`${bubbo.size} object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2`}
                    />
                  </div>
                  <span className="mt-3 text-xs font-medium text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
                    {bubbo.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Premium */}
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-8 md:mb-16">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full glass text-[10px] md:text-xs font-medium text-muted-foreground mb-3 md:mb-4 tracking-wide uppercase">
              FAQ
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xs md:text-base text-muted-foreground">
              Everything you need to know about Bubly
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200} className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-bubly-sky/5 via-bubly-violet/5 to-bubly-pink/5 rounded-2xl md:rounded-3xl blur-xl" />
              
              <div className="relative rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                      className="border-white/5 last:border-0"
                    >
                      <AccordionTrigger className="text-left px-4 md:px-6 py-4 md:py-5 hover:no-underline hover:bg-white/5 transition-colors duration-300 text-sm md:text-base font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 md:px-6 pb-4 md:pb-5 text-xs md:text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-32 relative overflow-hidden">
        {/* Ambient backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-violet/5 to-bubly-violet/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-bubly-violet/20 via-bubly-pink/10 to-transparent blur-3xl opacity-60 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center">
              {/* Interactive Bubbo */}
              <div className="relative inline-block mb-10">
                <div className="absolute inset-0 -m-6 bg-gradient-radial from-bubly-violet/25 via-bubly-pink/15 to-transparent blur-2xl animate-breathe" />
                <InteractiveBubbo 
                  size="lg" 
                  initialPose="default" 
                  hoverPose="wave" 
                  enableClick={true}
                  showTooltip={true}
                />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Join the <span className="gradient-text">Bubly Family</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
                Start nurturing your relationships today with Bubbo by your side.
              </p>
              
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
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-5 text-muted-foreground hover:text-foreground font-medium transition-all duration-300"
                >
                  Get in touch
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

export default About;
