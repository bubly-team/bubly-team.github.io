import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, CheckCircle, AlertTriangle, CreditCard, Scale, Zap, RefreshCw, MessageSquare, Gavel } from "lucide-react";
import { motion } from "framer-motion";

const Terms = () => {
  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content: `By accessing or using Bubly ("the App"), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the App.`
    },
    {
      icon: Zap,
      title: "Use of the App",
      content: `Bubly is a personal relationship management tool designed to help users organize contacts and nurture relationships with friends, family, and colleagues through reminders, notes, and AI-assisted features.

You are solely responsible for all content, data, and information you input into the App, including contact details, notes, and personal memories.`
    },
    {
      icon: FileText,
      title: "User Accounts",
      content: `Certain features of the App may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.`
    },
    {
      icon: AlertTriangle,
      title: "AI Features and User Responsibility",
      description: "The App includes AI-powered features (such as greeting or content generation) provided through third-party services, including but not limited to OpenAI.",
      items: [
        { label: "User Responsibility", desc: "You are solely responsible for the keywords, prompts, and context you provide to the AI. You agree not to use the AI features to generate content that is malicious, defamatory, harassing, hateful, or otherwise harmful." },
        { label: "Review Requirement", desc: "Bubly does not guarantee the accuracy, suitability, or appropriateness of AI-generated content. You must review all AI-generated messages before sending or sharing them." },
        { label: "Indemnification", desc: "You agree to indemnify and hold Bubly harmless from any claims, damages, or consequences resulting from your misuse of AI features or the sharing of inappropriate AI-generated content." },
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: `All rights, title, and interest in and to the App (excluding user-provided data) are and will remain the exclusive property of Bubly. This includes the App's design, code, and the mascot "Bubbo."`
    },
    {
      icon: FileText,
      title: "User Data Ownership",
      content: `You retain ownership of all personal data you input. By using Bubly, you grant us a limited, non-exclusive license to process this data solely to provide the App's features.`
    },
    {
      icon: CreditCard,
      title: "Subscriptions & Payments",
      content: `Bubly may offer free and paid plans. We reserve the right to modify pricing or features at any time. Payments are handled via the respective App Store platforms and are subject to their terms.`
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Conduct",
      description: "You agree not to:",
      items: [
        "Use the App for any unlawful purposes.",
        "Attempt to reverse-engineer or disrupt the App's services.",
        "Violate the privacy or intellectual property rights of others.",
      ]
    },
    {
      icon: RefreshCw,
      title: "Termination",
      content: `We reserve the right to suspend or terminate your access to the App at our sole discretion, without prior notice, for violations of these Terms or harmful conduct.`
    },
    {
      icon: AlertTriangle,
      title: "Disclaimer of Warranties",
      isWarning: true,
      content: `The App is provided on an "as is" and "as available" basis. Bubly makes no warranties, express or implied, regarding the reliability, availability, or accuracy of the App or its content.`
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      content: `To the maximum extent permitted by law, Bubly shall not be liable for any indirect, incidental, or consequential damages arising from your use of the App.`
    },
    {
      icon: MessageSquare,
      title: "Governing Law & Dispute Resolution",
      content: `These Terms shall be governed by the laws of your jurisdiction. Any disputes arising from these Terms shall be resolved through good-faith negotiations or, if necessary, binding arbitration.`
    },
  ];

  return (
    <Layout>
      <SEO
        title="Terms of Service"
        description="The rules and guidelines for using Bubly responsibly. Read our terms of service."
        path="/terms"
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bubly-pink/5 via-transparent to-transparent pointer-events-none" />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-bubly-pink/10 rounded-full blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-6 tracking-wide uppercase">
              <FileText className="w-4 h-4" />
              Legal Agreement
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms &amp; <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-4">
              The rules and guidelines for using Bubly responsibly.
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
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 border border-blue-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">📋 The Short Version</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ Use Bubly to nurture genuine relationships, not to spam</li>
                    <li>✓ Your data belongs to you — we just help you manage it</li>
                    <li>✓ Review AI-generated content before sending — it's your responsibility</li>
                    <li>✓ Be a good human — don't do illegal stuff with our app</li>
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
                <div className={`p-6 md:p-8 rounded-2xl border ${section.isWarning ? 'border-amber-500/30 bg-amber-500/5' : 'border-white/10 bg-white/[0.02]'} backdrop-blur-sm hover:border-white/20 transition-colors`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${section.isWarning ? 'bg-amber-500/20' : 'bg-gradient-bubly'} flex items-center justify-center flex-shrink-0`}>
                      <section.icon className={`w-5 h-5 md:w-6 md:h-6 ${section.isWarning ? 'text-amber-400' : 'text-white'}`} />
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

                    {section.content && typeof section.content === 'string' && (
                      <p className="text-sm md:text-base text-foreground/80 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    )}

                    {section.items && (
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-bubly-pink mt-1.5 flex-shrink-0" />
                            {typeof item === 'string' ? item : (
                              <span><strong className="text-foreground">{item.label}:</strong> {item.desc}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.subsections?.map((sub, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">{sub.subtitle}</h4>
                        {sub.content && (
                          <p className="text-sm text-foreground/70 leading-relaxed">{sub.content}</p>
                        )}
                        {sub.list && (
                          <ul className="space-y-2">
                            {sub.list.map((listItem, j) => (
                              <li key={j} className="flex items-start gap-3 text-sm text-foreground/70">
                                <span className="w-1.5 h-1.5 rounded-full bg-bubly-pink mt-1.5 flex-shrink-0" />
                                <span><strong className="text-foreground">{listItem.label}:</strong> {listItem.desc}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Contact Section */}
            <ScrollReveal>
              <div className="p-6 md:p-8 rounded-2xl border border-bubly-pink/30 bg-bubly-pink/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-bubly-pink/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-bubly-pink" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Questions About These Terms?</h3>
                    <p className="text-sm text-foreground/70 mb-4">
                      If you have any questions regarding these Terms &amp; Conditions, please contact us.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-bubly-pink hover:underline"
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
                to="/privacy"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                Privacy Policy
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

export default Terms;
