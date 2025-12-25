import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";

const Terms = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Terms of <span className="gradient-text">Service</span>
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>

            <GlassCard hover={false} className="prose prose-neutral dark:prose-invert max-w-none p-8 md:p-12">
              <div className="space-y-8 text-foreground/80">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
                  <p className="leading-relaxed">
                    Welcome to Bubly (the "Service"). By downloading, installing, or using this application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Service Description</h2>
                  <p className="leading-relaxed">
                    Bubly is an intelligent social assistant application that provides the following features:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Contact management and categorization</li>
                    <li>Important date reminders</li>
                    <li>AI-assisted greeting message generation</li>
                    <li>Interaction history tracking</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">User Responsibilities</h2>
                  <p className="leading-relaxed mb-4">
                    When using the Service, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide truthful and accurate information</li>
                    <li>Not use the Service for any illegal or unauthorized purpose</li>
                    <li>Not attempt to damage, interfere with, or bypass any security features of the Service</li>
                    <li>Not use the Service to send spam or harass others</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
                  <p className="leading-relaxed">
                    The Service and all its content, including but not limited to text, graphics, logos, icons, images, software, and its arrangement, are the property of Bubly or its licensors and are protected by copyright and other intellectual property laws.
                  </p>
                  <p className="leading-relaxed mt-4">
                    Greeting messages you generate using the AI feature may be freely used, shared, and modified, but not for commercial purposes or claimed as output from third-party AI services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Subscription Services</h2>
                  <p className="leading-relaxed mb-4">
                    Bubly offers free basic features and paid subscription services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Free Version:</strong> Basic contact management, limited AI greeting generation</li>
                    <li><strong>Subscription:</strong> Unlimited feature access, advanced analytics, priority support</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    Subscription fees are charged through your Apple ID account. Subscriptions auto-renew unless cancelled at least 24 hours before the current period ends.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
                  <p className="leading-relaxed">
                    The Service is provided "as is" without any express or implied warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>The Service will be uninterrupted or error-free</li>
                    <li>Service results will be accurate or reliable</li>
                    <li>AI-generated content will be suitable for all occasions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                  <p className="leading-relaxed">
                    To the maximum extent permitted by law, Bubly and its affiliates, officers, directors, employees, or agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use or inability to use the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Service Changes and Termination</h2>
                  <p className="leading-relaxed">
                    We reserve the right to modify, suspend, or terminate the Service (or any part thereof) at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or termination of the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Terms Modification</h2>
                  <p className="leading-relaxed">
                    We may modify these Terms of Service from time to time. Modified terms will be posted on this page and become effective immediately upon posting. Your continued use of the Service after modification constitutes acceptance of the modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
                  <p className="leading-relaxed">
                    These Terms of Service shall be governed by the laws of the Republic of China (Taiwan), without regard to conflict of law principles. Any disputes arising from these terms shall be subject to the jurisdiction of the Taipei District Court, Taiwan, R.O.C.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                  <p className="leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <p className="mt-4">
                    <strong>Email:</strong>
                    <a href="mailto:legal@bubly.app" className="text-primary hover:underline ml-2 transition-colors duration-300">
                      legal@bubly.app
                    </a>
                  </p>
                </section>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
