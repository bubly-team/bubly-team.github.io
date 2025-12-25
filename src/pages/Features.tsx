import { Layout } from "@/components/Layout";
import { Bubbo } from "@/components/Bubbo";
import { GlassCard } from "@/components/GlassCard";
import { Users, Sparkles, Bell, Heart, Tags, Calendar, MessageSquare, Zap } from "lucide-react";

const mainFeatures = [
  {
    icon: Users,
    title: "Smart Contact Management",
    description: "Effortlessly organize and categorize your personal network. Use intelligent grouping to keep friends, family, and colleagues clearly organized at a glance.",
    gradient: "from-bubly-sky to-bubly-blue",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Greetings",
    description: "Generate personalized greeting messages based on your relationship and the recipient's personality. Every message is unique and heartfelt.",
    gradient: "from-bubly-violet to-bubly-pink",
  },
  {
    icon: Bell,
    title: "Intelligent Reminders",
    description: "Birthdays, anniversaries, important holidays... Bubly reminds you at the perfect moment, so you never miss a chance to show you care.",
    gradient: "from-bubly-pink to-bubly-sky",
  },
];

const additionalFeatures = [
  {
    icon: Heart,
    title: "Relationship Tracking",
    description: "Record every interaction, understand contact frequency",
  },
  {
    icon: Tags,
    title: "Custom Labels",
    description: "Flexible tagging system, organize your way",
  },
  {
    icon: Calendar,
    title: "Date Management",
    description: "Manage all important dates in one place",
  },
  {
    icon: MessageSquare,
    title: "Message Templates",
    description: "Common greetings, ready to use",
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description: "Clean interface, fast task completion",
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
              Features
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let <span className="gradient-text">Bubbo</span> Help You
              <br />
              Nurture Every Relationship
            </h1>
            <p className="text-lg text-muted-foreground">
              Combining AI intelligence with thoughtful design, Bubly makes relationship management effortless, natural, and meaningful.
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
            <h2 className="text-3xl font-bold mb-4">More Features</h2>
            <p className="text-muted-foreground">Every detail designed for your social experience</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Download Bubly now and let AI help you nurture your precious relationships.
            </p>
            <a
              href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-bubly text-white font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Free Download
            </a>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
