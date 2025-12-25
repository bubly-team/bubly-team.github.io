import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-bubly-violet/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-bubly-pink/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-6 tracking-wide uppercase">
              <FileText className="w-3.5 h-3.5" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: December 2024
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-bubly-pink/5 via-bubly-violet/5 to-bubly-sky/5 rounded-3xl blur-2xl opacity-50" />
              
              <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <div className="space-y-12 text-foreground/80">
                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-sm">1</span>
                      Acceptance of Terms
                    </h2>
                    <p className="leading-relaxed pl-11">
                      Welcome to Bubly (the "Service"). By downloading, installing, or using this application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-sm">2</span>
                      Service Description
                    </h2>
                    <div className="pl-11">
                      <p className="leading-relaxed mb-4">
                        Bubly is an intelligent social assistant application that provides the following features:
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Contact management and categorization",
                          "Important date reminders",
                          "AI-assisted greeting message generation",
                          "Interaction history tracking",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-bubly-violet mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-sm">3</span>
                      User Responsibilities
                    </h2>
                    <div className="pl-11">
                      <p className="leading-relaxed mb-4">
                        When using the Service, you agree to:
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Provide truthful and accurate information",
                          "Not use the Service for any illegal or unauthorized purpose",
                          "Not attempt to damage, interfere with, or bypass any security features of the Service",
                          "Not use the Service to send spam or harass others",
                          "Comply with all applicable laws and regulations",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-bubly-violet mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-sm">4</span>
                      Intellectual Property
                    </h2>
                    <div className="pl-11">
                      <p className="leading-relaxed mb-4">
                        The Service and all its content, including but not limited to text, graphics, logos, icons, images, software, and its arrangement, are the property of Bubly or its licensors and are protected by copyright and other intellectual property laws.
                      </p>
                      <p className="leading-relaxed text-muted-foreground">
                        Greeting messages you generate using the AI feature may be freely used, shared, and modified, but not for commercial purposes or claimed as output from third-party AI services.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-sm">5</span>
                      Subscription Services
                    </h2>
                    <div className="pl-11">
                      <p className="leading-relaxed mb-4">
                        Bubly offers free basic features and paid subscription services:
                      </p>
                      <ul className="space-y-3 mb-4">
                        {[
                          { label: "Free Version", desc: "Basic contact management, limited AI greeting generation" },
                          { label: "Subscription", desc: "Unlimited feature access, advanced analytics, priority support" },
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-bubly-violet mt-2 flex-shrink-0" />
                            <span><strong className="text-foreground">{item.label}:</strong> {item.desc}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="leading-relaxed text-muted-foreground">
                        Subscription fees are charged through your Apple ID account. Subscriptions auto-renew unless cancelled at least 24 hours before the current period ends.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-sm">6</span>
                      Disclaimer
                    </h2>
                    <div className="pl-11">
                      <p className="leading-relaxed mb-4">
                        The Service is provided "as is" without any express or implied warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that:
                      </p>
                      <ul className="space-y-3">
                        {[
                          "The Service will be uninterrupted or error-free",
                          "Service results will be accurate or reliable",
                          "AI-generated content will be suitable for all occasions",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-bubly-violet mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-sm">7</span>
                      Limitation of Liability
                    </h2>
                    <p className="leading-relaxed pl-11">
                      To the maximum extent permitted by law, Bubly and its affiliates, officers, directors, employees, or agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use or inability to use the Service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-sm">8</span>
                      Service Changes and Termination
                    </h2>
                    <p className="leading-relaxed pl-11">
                      We reserve the right to modify, suspend, or terminate the Service (or any part thereof) at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or termination of the Service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-sm">9</span>
                      Terms Modification
                    </h2>
                    <p className="leading-relaxed pl-11">
                      We may modify these Terms of Service from time to time. Modified terms will be posted on this page and become effective immediately upon posting. Your continued use of the Service after modification constitutes acceptance of the modified terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-sm">10</span>
                      Governing Law
                    </h2>
                    <p className="leading-relaxed pl-11">
                      These Terms of Service shall be governed by the laws of the Republic of China (Taiwan), without regard to conflict of law principles. Any disputes arising from these terms shall be subject to the jurisdiction of the Taipei District Court, Taiwan, R.O.C.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-gradient-bubly flex items-center justify-center text-white text-sm">11</span>
                      Contact Information
                    </h2>
                    <div className="pl-11">
                      <p className="leading-relaxed mb-4">
                        If you have any questions about these Terms of Service, please contact us:
                      </p>
                      <a 
                        href="mailto:legal@bubly.app" 
                        className="inline-flex items-center gap-2 text-primary hover:underline transition-colors duration-300"
                      >
                        legal@bubly.app
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16">
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
