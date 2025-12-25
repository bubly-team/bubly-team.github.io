import { Layout } from "@/components/Layout";
import { Bubbo } from "@/components/Bubbo";
import { GlassCard } from "@/components/GlassCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Bubly?",
    answer: "Bubly is an intelligent social assistant app that helps you manage contacts, remember important dates, and generate personalized greetings through AI, making it easy to nurture every precious relationship.",
  },
  {
    question: "How does Bubly protect my privacy?",
    answer: "We take your privacy very seriously. Bubly does not collect or share your personal data with third parties. All contact information is securely stored on your device, and AI features use end-to-end encryption.",
  },
  {
    question: "How does the AI greeting feature work?",
    answer: "Our AI generates unique and thoughtful greeting messages based on your relationship type, past interactions, and specific occasions or holidays. You can use them directly or edit as needed.",
  },
  {
    question: "Which platforms does Bubly support?",
    answer: "Bubly is currently available on the iOS App Store, supporting iPhone and iPad. An Android version is in development—stay tuned!",
  },
  {
    question: "Is Bubly free?",
    answer: "Bubly offers free basic features. Advanced features like unlimited AI greetings and detailed analytics can be unlocked through subscription plans.",
  },
  {
    question: "How do I import my contacts?",
    answer: "When you first use Bubly, the app will guide you to import contacts from your phone's address book. You can also manually add contacts or import via vCard format.",
  },
  {
    question: "Can I customize reminder frequency?",
    answer: "Absolutely! You can set different reminder frequencies for each contact—weekly, monthly, or specific dates—completely tailored to your needs.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-6">
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Meet <span className="gradient-text">Bubbo</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Bubbo is Bubly's mascot, symbolizing warmth, connection, and care.
                Like bubbles, relationships need tender attention to shine bright.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We created Bubly to help everyone maintain meaningful relationships 
                in this busy world—making every greeting timely and every care remembered.
              </p>
            </div>

            {/* Bubbo */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <GlassCard className="p-16 relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-bubly-sky/20 via-bubly-violet/10 to-bubly-pink/20" />
                  <Bubbo size="xl" className="relative z-10" />
                </GlassCard>
                {/* Floating decorations - subtle */}
                <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-bubly-sky/20 animate-float-gentle" />
                <div className="absolute -bottom-6 -left-6 w-10 h-10 rounded-full bg-bubly-violet/15 animate-float-gentle" style={{ animationDelay: "2s" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <GlassCard className="glass-strong p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In this digital age, we have countless ways to connect, yet we often forget to reach out.
                  Birthday wishes go unsent, holiday greetings arrive too late, and important people slowly fade into the noise of busy life.
                </p>
                <p>
                  Bubly was born from a simple idea:
                  <strong className="text-foreground"> What if there was a little helper that reminded us to care for the right people at the right time?</strong>
                </p>
                <p>
                  That's how Bubbo came to be—a cute, thoughtful AI companion.
                  More than just an app, it's your partner in nurturing relationships,
                  making every greeting perfectly timed and every care unforgettable.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Common questions about Bubly, answered
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <GlassCard hover={false} className="p-2">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                    <AccordionTrigger className="text-left px-4 hover:no-underline hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
