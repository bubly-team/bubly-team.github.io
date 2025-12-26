import { motion } from "framer-motion";

interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
    avatar: string;
    rating: number;
}

const testimonials: TestimonialProps[] = [
    {
        quote: "Bubly saved my friendship! I used to always forget birthdays, now I never miss a chance to say happy birthday with a heartfelt message.",
        author: "Sarah M.",
        role: "College Student",
        avatar: "👩‍🎓",
        rating: 5,
    },
    {
        quote: "The AI greetings are incredibly personal. My friends think I spend hours crafting these messages, but it only takes seconds!",
        author: "Alex K.",
        role: "Working Professional",
        avatar: "👨‍💼",
        rating: 5,
    },
    {
        quote: "As someone with 200+ contacts, Bubly is a lifesaver. It helps me stay connected with everyone who matters.",
        author: "Megan L.",
        role: "Social Butterfly",
        avatar: "🦋",
        rating: 5,
    },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: TestimonialProps; index: number }) => {
    return (
        <motion.div
            className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
        >
            {/* Glow effect on hover */}
            <div className="absolute -inset-px bg-gradient-to-br from-bubly-sky/20 via-bubly-violet/10 to-bubly-pink/20 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

            {/* Rating stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                        key={i}
                        className="text-bubly-violet text-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + i * 0.1 }}
                    >
                        ★
                    </motion.span>
                ))}
            </div>

            {/* Quote */}
            <blockquote className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-bubly-sky/20 to-bubly-violet/20 flex items-center justify-center text-xl md:text-2xl">
                    {testimonial.avatar}
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">{testimonial.author}</p>
                    <p className="text-xs md:text-sm text-muted-foreground/70">{testimonial.role}</p>
                </div>
            </div>
        </motion.div>
    );
};

interface TestimonialsSectionProps {
    className?: string;
}

export const TestimonialsSection = ({ className = "" }: TestimonialsSectionProps) => {
    return (
        <section className={`py-16 md:py-24 overflow-hidden relative ${className}`}>
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-pink/3 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full glass text-[10px] md:text-xs font-medium text-muted-foreground mb-3 md:mb-4 tracking-wide uppercase">
                        Featured Feedback
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                        How Bubly Can <span className="gradient-text">Help You</span> 💝
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                        Imagine how Bubly could transform your relationships
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.author}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12 md:mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <a
                        href="https://apps.apple.com/us/app/bubly-social-assistant/id6754884488"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                        <span>Try Bubly and share your story</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
