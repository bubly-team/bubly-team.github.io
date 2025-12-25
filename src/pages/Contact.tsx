import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Bubbo } from "@/components/Bubbo";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("感謝您的來信！我們會盡快回覆您。", {
      description: "Bubbo 已收到您的訊息 ✨",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-6">
              聯絡我們
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              有任何<span className="gradient-text">問題</span>嗎？
            </h1>
            <p className="text-lg text-muted-foreground">
              無論是功能建議、問題回報或合作洽談，我們都很樂意聆聽您的聲音。
            </p>
          </div>

          {/* Bubbo waving */}
          <div className="flex justify-center mb-12">
            <Bubbo size="lg" variant="waving" />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-bubly flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">電子郵件</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      有任何問題，歡迎來信
                    </p>
                    <a
                      href="mailto:support@bubly.app"
                      className="text-primary hover:underline"
                    >
                      support@bubly.app
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-bubly flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">意見回饋</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      您的建議是我們進步的動力
                    </p>
                    <p className="text-sm text-muted-foreground">
                      也可以直接在 App Store 留下評論
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="glass-strong">
                <div className="text-center py-4">
                  <p className="text-muted-foreground mb-4">
                    想要更多資訊？
                  </p>
                  <a
                    href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    前往 App Store
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </a>
                </div>
              </GlassCard>
            </div>

            {/* Contact Form */}
            <GlassCard className="glass-strong">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">您的姓名</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="請輸入姓名"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">電子郵件</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">主題</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="請輸入主題"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">訊息內容</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="請輸入您想說的話..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-bubly hover:opacity-90 text-white"
                >
                  {isSubmitting ? (
                    "發送中..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      送出訊息
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
