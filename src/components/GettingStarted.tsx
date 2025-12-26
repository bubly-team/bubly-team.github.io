import { motion } from "framer-motion";

// Bubbo images for steps
import bubboWave from "@/assets/bubbo-wave.png";
import bubboThinking from "@/assets/bubbo-thinking.png";
import bubboPoint from "@/assets/bubbo-point.png";

interface StepProps {
    number: number;
    title: string;
    description: string;
    bubbo: string;
    color: string;
}

const steps: StepProps[] = [
    {
        number: 1,
        title: "Add Your Contacts",
        description: "Import or add friends, family, and colleagues. Include their birthdays, anniversaries, and interests.",
        bubbo: bubboWave,
        color: "from-bubly-sky to-bubly-violet",
    },
    {
        number: 2,
        title: "Set Reminders",
        description: "Never miss important dates. Bubly notifies you at the perfect time to reach out.",
        bubbo: bubboThinking,
        color: "from-bubly-violet to-bubly-pink",
    },
    {
        number: 3,
        title: "Send AI Greetings",
        description: "Generate personalized messages in seconds. Copy, customize, and share the love!",
        bubbo: bubboPoint,
        color: "from-bubly-pink to-bubly-sky",
    },
];

const StepCard = ({ step, index }: { step: StepProps; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Step number and line */}
                <div className="relative flex flex-col items-center">
                    {/* Number badge */}
                    <motion.div
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {step.number}
                    </motion.div>

                    {/* Connecting line (hidden for last item) */}
                    {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-white/20 to-transparent" />
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                        {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                        {step.description}
                    </p>
                </div>

                {/* Bubbo illustration */}
                <motion.div
                    className="relative w-20 h-20 md:w-28 md:h-28"
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className={`absolute inset-0 bg-gradient-radial ${step.color.replace('to-', 'via-')}/20 to-transparent blur-xl rounded-full`} />
                    <img
                        src={step.bubbo}
                        alt={`Step ${step.number}`}
                        className="w-full h-full object-contain relative z-10 drop-shadow-lg"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

interface GettingStartedProps {
    className?: string;
}

export const GettingStarted = ({ className = "" }: GettingStartedProps) => {
    return (
        <section className={`py-16 md:py-24 overflow-hidden relative ${className}`}>
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bubly-sky/3 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full glass text-[10px] md:text-xs font-medium text-muted-foreground mb-3 md:mb-4 tracking-wide uppercase">
                        Quick Start
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                        Get Started in <span className="gradient-text">3 Simple Steps</span> 🚀
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                        Start nurturing your relationships in minutes, not hours
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="max-w-3xl mx-auto space-y-10 md:space-y-16">
                    {steps.map((step, index) => (
                        <StepCard key={step.number} step={step} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12 md:mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <a
                        href="https://apps.apple.com/us/app/bubly-social-assistant/id6754884488"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group btn-premium inline-flex items-center justify-center gap-3 px-8 py-4 text-white shadow-lg shadow-bubly-violet/30 hover:shadow-xl hover:shadow-bubly-violet/40 hover:-translate-y-1 active:scale-[0.98]"
                    >
                        <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                        <span className="relative z-10">Try Bubly Free</span>
                    </a>
                    <p className="mt-4 text-xs text-muted-foreground/60">
                        No credit card required • Free to download
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default GettingStarted;
