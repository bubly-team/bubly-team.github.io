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
          subtitle: "Personal Information",
          description: "We collect information you voluntarily provide when using the App, including: Contact information you enter, such as names, birthdays, anniversaries, relationship tags, and personal notes you enter. User-generated content such as keywords, prompts, and context provided for AI features."
        },
        {
          subtitle: "Usage Data",
          description: "We may collect limited, anonymous usage data (such as feature usage frequency and app performance metrics) to improve the App. This data does not directly identify you."
        },
        {
          subtitle: "Device Permissions",
          description: "While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission: Pictures and other information from your Device's camera and photo library. We use this information to provide features of Our Service, to improve and customize Our Service. The information will only be simply stored on Your device. You can enable or disable access to this information at any time, through Your Device settings."
        },
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      description: "We use your information solely to:",
      items: [
        "Provide and maintain the App's core functionality.",
        "Organize contacts and relationship data.",
        "Generate AI-assisted content (such as greetings or suggestions).",
        "Send reminders and notifications.",
        "Improve App performance and user experience.",
      ],
      note: "AI Processing Transparency: For AI-powered features, limited information (such as a contact's name, occasion, and relevant keywords) is sent to third-party AI service providers, including but not limited to OpenAI. We ensure that these providers process data in accordance with their strict privacy policies. For instance, data sent via API is generally not used to train their models."
    },
    {
      icon: Database,
      title: "Data Storage & Security",
      description: "Your contact data is primarily stored locally on your device to ensure maximum privacy. Any data transmitted for AI processing or cloud backup (if enabled) is encrypted during transit and at rest."
    },
    {
      icon: Shield,
      title: "Data Sharing",
      description: "We do not sell or rent your personal information. We may share limited data with trusted service providers solely for the purpose of operating the App (e.g., AI processing or analytics), under strict confidentiality obligations."
    },
    {
      icon: Globe,
      title: "Third-Party Services",
      description: "Bubly may use third-party services to support certain features, including AI functionality. These services operate under their own privacy policies, and Bubly does not control their data practices. We encourage you to review their privacy policies for more information."
    },
    {
      icon: Bell,
      title: "Your Rights (GDPR, CCPA, PDPA)",
      description: "Depending on your location, you have the right to:",
      items: [
        { label: "Access", desc: "Request a copy of your personal data." },
        { label: "Correction", desc: "Update inaccurate information." },
        { label: "Deletion", desc: "Request the removal of your data." },
        { label: "Portability", desc: "Request a transfer of your data to another service." },
      ],
      note: "You can manage or delete your data within the App settings or contact us for assistance."
    },
    {
      icon: Database,
      title: "Data Retention",
      description: "We retain your personal data only for as long as necessary to provide the App's services. If you delete the App or your account, your local data will be removed immediately. Cloud-synced data (if any) will be deleted within 30 days of your request."
    },
    {
      icon: Users,
      title: "Children's Privacy",
      description: "Bubly is not intended for children under 13 (or the local age of consent). We do not knowingly collect information from children."
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
              Bubly values your privacy. Here's how we collect, use, store, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Last Updated: February 21, 2026
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
                    <li>✓ Your contact data stays on your device — we don't collect it</li>
                    <li>✓ No selling or renting of your personal information</li>
                    <li>✓ AI processing uses minimal data and is not used for model training</li>
                    <li>✓ You have full control to access, correct, or delete your data</li>
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
                      <div key={i} className="space-y-2" >
                        <h4 className="text-sm font-semibold text-foreground">{block.subtitle}</h4>
                        {block.description && (
                          <p className="text-sm text-foreground/70 leading-relaxed">{block.description}</p>
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

                    {section.note && (
                      <p className="text-sm text-foreground/60 leading-relaxed italic border-l-2 border-bubly-violet/40 pl-3">
                        {section.note}
                      </p>
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
                  We may update this Privacy Policy from time to time. Continued use of the App indicates acceptance of the updated policy.
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
                      If you have any questions about this Privacy Policy or your data, please contact us.
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
