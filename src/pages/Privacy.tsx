import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Eye, Database, Bell, Users, Globe, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Privacy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Information You Provide",
          items: [
            "Contact names, relationships, and notes you add to the app",
            "Important dates such as birthdays and anniversaries",
            "Preferences and settings you configure",
            "Feedback or support requests you submit",
          ]
        },
        {
          subtitle: "Automatically Collected Information",
          items: [
            "App usage analytics (anonymized and aggregated)",
            "Device information for compatibility purposes",
            "Crash reports to improve app stability",
          ]
        },
      ]
    },
    {
      icon: Database,
      title: "How We Store Your Data",
      content: [
        {
          subtitle: "Local-First Architecture",
          description: "Bubly is designed with privacy at its core. All your personal data—including contacts, notes, and reminders—is stored locally on your device. We do not have access to this information."
        },
        {
          subtitle: "iCloud Sync (Optional)",
          description: "If you enable iCloud sync, your data is encrypted and stored in your personal iCloud account. This data is protected by Apple's security infrastructure, and we cannot access it."
        },
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      items: [
        "To provide and maintain the Bubly service",
        "To generate AI-powered greeting suggestions (processed without storing your inputs)",
        "To send you reminders and notifications you've configured",
        "To improve app performance and user experience",
        "To respond to your support requests",
      ]
    },
    {
      icon: Globe,
      title: "Third-Party Services",
      content: [
        {
          subtitle: "AI Services",
          description: "We use AI providers to generate greeting suggestions. Your prompts are processed in real-time and are not stored or used for training purposes."
        },
        {
          subtitle: "Apple Services",
          description: "We integrate with Apple's ecosystem including App Store, iCloud (optional), and Push Notifications. These services are governed by Apple's Privacy Policy."
        },
        {
          subtitle: "Analytics",
          description: "We may use anonymized analytics to understand how users interact with the app. This data cannot be used to identify individual users."
        },
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "We implement industry-standard security measures to protect your information. Since data is primarily stored on your device, we recommend:",
      items: [
        "Keeping your device's operating system updated",
        "Using a strong passcode or biometric authentication",
        "Enabling Find My iPhone for device protection",
        "Regularly backing up your device",
      ]
    },
    {
      icon: Users,
      title: "Children's Privacy",
      description: "Bubly is not intended for children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete such data."
    },
    {
      icon: Bell,
      title: "Your Rights & Choices",
      items: [
        { label: "Access", desc: "View all your data within the app at any time" },
        { label: "Correction", desc: "Edit or update your information directly in the app" },
        { label: "Deletion", desc: "Delete any or all of your data from the app" },
        { label: "Export", desc: "Export your data for personal use" },
        { label: "Opt-out", desc: "Disable optional features like analytics or notifications" },
      ]
    },
  ];

  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Your data stays on your phone. No tracking, no ads. Learn how Bubly protects your privacy with local-first architecture."
        path="/privacy"
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bubly-violet/5 via-transparent to-transparent pointer-events-none" />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-bubly-sky/10 rounded-full blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-6 tracking-wide uppercase">
              <Shield className="w-4 h-4" />
              Your Privacy Matters
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-4">
              We believe privacy is a fundamental right. Here's how we protect yours.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Effective Date: December 26, 2025 • Version 1.0
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Summary Banner */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 border border-green-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">🔒 Privacy at a Glance</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ Your data stays on your device — we don't collect it</li>
                    <li>✓ No tracking, no ads, no data selling</li>
                    <li>✓ AI processing is real-time only — nothing is stored</li>
                    <li>✓ You have full control to access, edit, or delete your data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            {sections.map((section, idx) => (
              <ScrollReveal key={idx}>
                <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-colors">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-bubly flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Section {idx + 1}</span>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">{section.title}</h2>
                    </div>
                  </div>

                  <div className="pl-0 md:pl-16 space-y-4">
                    {section.description && (
                      <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                        {section.description}
                      </p>
                    )}

                    {section.content?.map((block, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">{block.subtitle}</h4>
                        {block.description && (
                          <p className="text-sm text-foreground/70 leading-relaxed">{block.description}</p>
                        )}
                        {block.items && (
                          <ul className="space-y-2">
                            {block.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-3 text-sm text-foreground/70">
                                <span className="w-1.5 h-1.5 rounded-full bg-bubly-violet mt-1.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {section.items && !section.content && (
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-bubly-violet mt-1.5 flex-shrink-0" />
                            {typeof item === 'string' ? item : (
                              <span><strong className="text-foreground">{item.label}:</strong> {item.desc}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Policy Updates */}
            <ScrollReveal>
              <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-bubly flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Updates</span>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">Changes to This Policy</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed md:pl-16">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make material changes, we will notify you through the app or via email. We encourage you to review this policy periodically.
                </p>
              </div>
            </ScrollReveal>

            {/* Contact Section */}
            <ScrollReveal>
              <div className="p-6 md:p-8 rounded-2xl border border-bubly-violet/30 bg-bubly-violet/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-bubly-violet/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-bubly-violet" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Questions or Concerns?</h3>
                    <p className="text-sm text-foreground/70 mb-4">
                      If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to reach out.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-bubly-violet hover:underline"
                    >
                      Contact Us <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/terms"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                Terms of Service
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
