import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Bubbo } from "@/components/Bubbo";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you for your message!", {
      description: "Bubbo has received it. We'll get back to you soon. ✨",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <Layout>
      {/* Hero Section - Immersive */}
      <section className="relative py-32 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-bubly-violet/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-bubly-sky/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-bubly-pink/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Content */}
            <ScrollReveal direction="right" className="flex-1 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-6 tracking-wide uppercase">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Let's <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Whether it's feature suggestions, bug reports, or partnership inquiries, 
                Bubbo and the team would love to hear from you.
              </p>
              
              {/* Quick contact options */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="mailto:support@bubly.app"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-bubly-violet" />
                  <span className="font-medium">support@bubly.app</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Bubbo */}
            <ScrollReveal direction="left" delay={200} className="flex-1 flex justify-center">
              <div className="relative">
                {/* Ambient glow */}
                <div className="absolute inset-0 -m-12 bg-gradient-radial from-bubly-violet/25 via-bubly-pink/15 to-transparent blur-3xl animate-breathe" />
                
                {/* Orbital rings */}
                <div className="absolute inset-0 -m-16 rounded-full border border-bubly-violet/10 animate-spin-slow" style={{ animationDuration: "30s" }} />
                <div className="absolute inset-0 -m-24 rounded-full border border-bubly-pink/5 animate-spin-slow" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
                
                <Bubbo size="xl" className="relative animate-float-gentle drop-shadow-[0_30px_60px_rgba(167,139,250,0.4)]" />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-8 w-3 h-3 rounded-full bg-bubly-sky/60 animate-drift" />
                <div className="absolute -bottom-6 -left-4 w-2 h-2 rounded-full bg-bubly-pink/50 animate-drift" style={{ animationDelay: "2s" }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-violet/3 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info - Sidebar */}
            <ScrollReveal direction="right" className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                <p className="text-muted-foreground">
                  We typically respond within 24 hours
                </p>
              </div>
              
              {/* Email Card */}
              <div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bubly-sky to-bubly-violet flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:gradient-text transition-all duration-500">Email Us</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      For any inquiries or support
                    </p>
                    <a
                      href="mailto:support@bubly.app"
                      className="text-sm font-medium text-primary hover:underline transition-colors duration-300"
                    >
                      support@bubly.app
                    </a>
                  </div>
                </div>
              </div>

              {/* Feedback Card */}
              <div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bubly-violet to-bubly-pink flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:gradient-text transition-all duration-500">Share Feedback</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Your suggestions drive our improvement
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      Leave a review on the App Store
                    </p>
                  </div>
                </div>
              </div>

              {/* App Store Link */}
              <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-bubly-violet/5 to-bubly-pink/5">
                <p className="text-sm text-muted-foreground mb-4">
                  Want to experience Bubly?
                </p>
                <a
                  href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-medium transition-all duration-300 hover:gap-3"
                >
                  <span className="gradient-text">Download on App Store</span>
                  <ArrowRight className="w-4 h-4 text-bubly-violet transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="left" delay={200} className="lg:col-span-3">
              <div className="relative">
                {/* Subtle glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-bubly-sky/10 via-bubly-violet/5 to-bubly-pink/10 rounded-3xl blur-2xl opacity-50" />
                
                <div className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          maxLength={100}
                          className={`bg-white/5 border-white/10 focus:border-bubly-violet/50 transition-colors duration-300 ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          maxLength={255}
                          className={`bg-white/5 border-white/10 focus:border-bubly-violet/50 transition-colors duration-300 ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        maxLength={200}
                        className={`bg-white/5 border-white/10 focus:border-bubly-violet/50 transition-colors duration-300 ${errors.subject ? 'border-red-500' : ''}`}
                      />
                      {errors.subject && <p className="text-xs text-red-400">{errors.subject}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us what's on your mind..."
                        value={formData.message}
                        onChange={handleChange}
                        maxLength={2000}
                        rows={5}
                        className={`bg-white/5 border-white/10 focus:border-bubly-violet/50 transition-colors duration-300 resize-none ${errors.message ? 'border-red-500' : ''}`}
                      />
                      {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 rounded-xl bg-gradient-bubly hover:opacity-90 text-white font-semibold transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(167,139,250,0.4)] hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-violet/5 to-bubly-violet/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-bubly-violet/15 via-bubly-pink/10 to-transparent blur-3xl opacity-60 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="gradient-text">Get Started</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Download Bubly and let Bubbo help you nurture every relationship.
              </p>
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
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
