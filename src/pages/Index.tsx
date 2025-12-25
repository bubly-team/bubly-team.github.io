import { Layout } from "@/components/Layout";
import { Bubbo } from "@/components/Bubbo";
import { GlassCard } from "@/components/GlassCard";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Users, Sparkles, Bell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// App screenshots
import screenshot1 from "@/assets/app-screenshot-1.png";
import screenshot3 from "@/assets/app-screenshot-3.png";
import screenshot4 from "@/assets/app-screenshot-4.png";
import screenshot5 from "@/assets/app-screenshot-5.png";
import screenshot6 from "@/assets/app-screenshot-6.png";

const features = [
  {
    icon: Users,
    title: "Smart Contact Management",
    description: "Organize and categorize your connections effortlessly",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Greetings",
    description: "Generate personalized messages for every occasion",
  },
  {
    icon: Bell,
    title: "Intelligent Reminders",
    description: "Never miss an important moment to connect",
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
                ✨ Your Social Companion
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
                <span className="gradient-text">Manage contacts.</span>
                <br />
                <span className="text-foreground">Stay close.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Bubly is your intelligent social assistant that helps you nurture relationships, 
                send thoughtful greetings, and never forget the moments that matter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <a
                  href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-bubly text-white font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on App Store
                </a>
                
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass font-semibold transition-all duration-300 hover:bg-white/80 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            {/* Bubbo Mascot */}
            <div className="flex-1 flex justify-center relative">
              <div className="relative">
                {/* Decorative rings - subtle */}
                <div className="absolute inset-0 -m-12 rounded-full border border-bubly-sky/10 animate-breathe" />
                <div className="absolute inset-0 -m-20 rounded-full border border-bubly-violet/5 animate-breathe" style={{ animationDelay: "1s" }} />
                
                <Bubbo size="xl" className="animate-float-gentle" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See <span className="gradient-text">Bubly</span> in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A beautifully designed app that makes managing relationships feel natural
            </p>
          </div>

          {/* Phone mockups */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            {/* Left phone - slightly behind */}
            <div className="lg:-mr-8 lg:opacity-80 lg:scale-90 transition-all duration-500 hover:opacity-100 hover:scale-95">
              <PhoneMockup image={screenshot6} />
              <p className="text-center mt-6 text-sm font-medium text-muted-foreground">Event Calendar</p>
            </div>

            {/* Center phone - main focus */}
            <div className="relative z-10 lg:scale-100">
              <PhoneMockup image={screenshot3} />
              <p className="text-center mt-6 text-sm font-medium gradient-text">Smart Dashboard</p>
            </div>

            {/* Right phone - slightly behind */}
            <div className="lg:-ml-8 lg:opacity-80 lg:scale-90 transition-all duration-500 hover:opacity-100 hover:scale-95">
              <PhoneMockup image={screenshot4} />
              <p className="text-center mt-6 text-sm font-medium text-muted-foreground">AI Greetings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase Section */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Feature 1: Contact Management */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Know Your <span className="gradient-text">Bubbles</span> Better
              </h3>
              <p className="text-muted-foreground max-w-lg">
                Keep track of hobbies, interests, and important milestones in one place. 
                Add personal notes and never forget what matters to your friends.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <PhoneMockup image={screenshot5} />
            </div>
          </div>

          {/* Feature 2: Home Dashboard */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Because Relationships <span className="gradient-text">Deserve</span> to Be Remembered
              </h3>
              <p className="text-muted-foreground max-w-lg">
                Your universe of friends at a glance. Track birthdays, anniversaries, 
                and special moments with an intelligent calendar that keeps you connected.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <PhoneMockup image={screenshot1} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Core Features</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bubly combines AI technology with thoughtful design to make relationship management effortless
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <GlassCard key={feature.title} className="text-center group">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-bubly mb-6 transition-all duration-500 group-hover:scale-105"
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
              className="inline-flex items-center gap-2 text-primary font-medium transition-all duration-300 hover:gap-3"
            >
              Explore All Features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GlassCard className="glass-strong text-center py-16 px-8">
            <Bubbo size="lg" className="mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Using <span className="gradient-text">Bubly</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Download now and let Bubbo help you maintain every precious relationship in your life.
            </p>
            <a
              href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-bubly text-white font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg"
            >
              Free Download
            </a>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
