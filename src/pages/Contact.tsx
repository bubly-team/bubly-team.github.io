import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { InteractiveBubbo } from "@/components/InteractiveBubbo";
import { Mail, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

const Contact = () => {
  // Load Tally embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section - Immersive */}
      <section className="relative py-12 md:py-32 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-bubly-violet/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-bubly-sky/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-bubly-pink/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            {/* Content */}
            <ScrollReveal direction="right" className="flex-1 text-center lg:text-left">
              <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full glass text-[10px] md:text-xs font-medium text-muted-foreground mb-4 md:mb-6 tracking-wide uppercase">
                Contact Us
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 leading-tight">
                Let's <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-sm md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8">
                Whether it's feature suggestions, bug reports, or partnership inquiries,
                Bubbo and the team would love to hear from you.
              </p>

              {/* Quick contact options */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <a
                  href="mailto:support@bubly.app"
                  className="group inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm md:text-base"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-bubly-violet" />
                  <span className="font-medium">support@bubly.app</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Bubbo - Hidden on mobile, shown on desktop */}
            <ScrollReveal direction="left" delay={200} className="hidden lg:flex flex-1 justify-center">
              <div className="relative">
                <div className="absolute inset-0 -m-12 bg-gradient-radial from-bubly-violet/25 via-bubly-pink/15 to-transparent blur-3xl animate-breathe" />
                <div className="absolute inset-0 -m-16 rounded-full border border-bubly-violet/10 animate-spin-slow" style={{ animationDuration: "30s" }} />
                <div className="absolute inset-0 -m-24 rounded-full border border-bubly-pink/5 animate-spin-slow" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
                <InteractiveBubbo
                  size="xl"
                  initialPose="wave"
                  hoverPose="point"
                  enableClick={true}
                  showTooltip={true}
                />
                <div className="absolute -top-4 -right-8 w-3 h-3 rounded-full bg-bubly-sky/60 animate-drift" />
                <div className="absolute -bottom-6 -left-4 w-2 h-2 rounded-full bg-bubly-pink/50 animate-drift" style={{ animationDelay: "2s" }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Feedback Form Section - Tally Embed */}
      <section className="py-12 md:py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-violet/3 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Info - Sidebar */}
            <ScrollReveal direction="right" className="lg:col-span-2 space-y-4 md:space-y-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Get in Touch</h2>
                <p className="text-xs md:text-base text-muted-foreground">
                  We typically respond within 24 hours
                </p>
              </div>

              {/* Email Card */}
              <div className="group p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-500">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-bubly-sky to-bubly-violet flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base mb-0.5 md:mb-1">Email Us</h3>
                    <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-3">
                      For any inquiries or support
                    </p>
                    <a
                      href="mailto:support@bubly.app"
                      className="text-xs md:text-sm font-medium text-primary hover:underline"
                    >
                      support@bubly.app
                    </a>
                  </div>
                </div>
              </div>

              {/* Feedback Card */}
              <div className="group p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-500">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-bubly-violet to-bubly-pink flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base mb-0.5 md:mb-1">Share Feedback</h3>
                    <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-3">
                      Your suggestions drive our improvement
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground/70">
                      Fill out the form or leave a review
                    </p>
                  </div>
                </div>
              </div>

              {/* App Store Link */}
              <div className="p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10 bg-gradient-to-br from-bubly-violet/5 to-bubly-pink/5">
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                  Want to experience Bubly?
                </p>
                <a
                  href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-medium text-sm md:text-base"
                >
                  <span className="gradient-text">Download on App Store</span>
                  <ArrowRight className="w-4 h-4 text-bubly-violet" />
                </a>
              </div>
            </ScrollReveal>

            {/* Tally Form Embed */}
            <ScrollReveal direction="left" delay={200} className="lg:col-span-3">
              <div className="relative">
                {/* Glow effect behind form */}
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-bubly-sky/10 via-bubly-violet/5 to-bubly-pink/10 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-50" />

                <div className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
                  {/* Header */}
                  <div className="px-5 md:px-8 pt-5 md:pt-8 pb-2 md:pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-bubly-violet" />
                      <h3 className="text-lg md:text-xl font-bold">Send Us a Message</h3>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      We'd love to hear from you! Fill out the form below.
                    </p>
                  </div>

                  {/* Tally Embed iframe */}
                  <div className="px-2 md:px-4 pb-2 md:pb-4">
                    <iframe
                      data-tally-src="https://tally.so/embed/xXrj2r?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                      loading="lazy"
                      width="100%"
                      height="500"
                      frameBorder="0"
                      title="Bubly Feedback Form"
                      className="w-full min-h-[400px] md:min-h-[500px]"
                      style={{ border: 'none' }}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-violet/5 to-bubly-violet/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-radial from-bubly-violet/15 via-bubly-pink/10 to-transparent blur-3xl opacity-60 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                Ready to <span className="gradient-text">Get Started</span>?
              </h2>
              <p className="text-xs md:text-base text-muted-foreground mb-6 md:mb-8">
                Download Bubly and let Bubbo help you nurture every relationship.
              </p>
              <a
                href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-10 py-4 md:py-5 rounded-full bg-gradient-bubly text-white font-semibold text-sm md:text-base shadow-xl"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download Free on App Store
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

