import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>

            <GlassCard hover={false} className="prose prose-neutral dark:prose-invert max-w-none p-8 md:p-12">
              <div className="space-y-8 text-foreground/80">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
                  <p className="leading-relaxed">
                    Bubly ("we," "our," or "us") deeply values your privacy. This Privacy Policy explains how we collect, use, store, and protect the information you provide when using the Bubly application ("App").
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Data Collection</h2>
                  <p className="leading-relaxed mb-4">
                    <strong className="text-foreground">We are committed to not collecting your personal data.</strong> Bubly is designed with your privacy as the top priority:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All contact information is stored locally on your device only</li>
                    <li>We do not access, collect, or transmit your contact list</li>
                    <li>AI greeting generation does not store your conversation content</li>
                    <li>We do not use tracking technologies or advertising identifiers</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Data Storage</h2>
                  <p className="leading-relaxed">
                    All data you create in Bubly (including contact groups, reminder settings, personal preferences, etc.) is stored on your device. If you use iCloud sync, data is encrypted and synced through Apple's iCloud service—we cannot access this data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
                  <p className="leading-relaxed mb-4">
                    Bubly may use the following third-party services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Apple Services:</strong> App Store, iCloud (optional), Push Notifications</li>
                    <li><strong>AI Services:</strong> Used for generating greeting messages, but input content is not stored</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    These services have their own privacy policies—we recommend reviewing them.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                  <p className="leading-relaxed">
                    We employ industry-standard security measures to protect your data. Since data is stored on your device, we recommend:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Keep your device operating system updated</li>
                    <li>Use passcode or biometric authentication to lock your device</li>
                    <li>Regularly back up your device data</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
                  <p className="leading-relaxed">
                    Bubly is not designed for children under 13. We do not knowingly collect personal information from children. If you discover that a child has provided us with personal information, please contact us—we will promptly delete such data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
                  <p className="leading-relaxed mb-4">
                    You have complete control over your data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> You can view all your data in the App at any time</li>
                    <li><strong>Deletion:</strong> You can delete any data in the App at any time</li>
                    <li><strong>Portability:</strong> You can export your data</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Policy Updates</h2>
                  <p className="leading-relaxed">
                    We may update this Privacy Policy from time to time. Updated versions will be posted in the App and on this page. For significant changes, we will notify you through the App.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                  <p className="leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <p className="mt-4">
                    <strong>Email:</strong>
                    <a href="mailto:privacy@bubly.app" className="text-primary hover:underline ml-2 transition-colors duration-300">
                      privacy@bubly.app
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

export default Privacy;
