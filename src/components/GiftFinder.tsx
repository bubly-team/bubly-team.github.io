import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Gift, Users, Calendar, Wallet, Check } from "lucide-react";
// Rose (flower & scent) images
import giftRoseCozy from "../assets/gift-rose-cozy.png";
import giftRoseNice from "../assets/gift-rose-nice.png";
import giftRoseSweet from "../assets/gift-rose-sweet.png";
import giftRoseWow from "../assets/gift-rose-wow.png";
// Owen (tech) images
import giftOwenCozy from "../assets/gift-owen-cozy.png";
import giftOwenNice from "../assets/gift-owen-nice.png";
import giftOwenSweet from "../assets/gift-owen-sweet.png";
import giftOwenWow from "../assets/gift-owen-wow.png";
// Zack (basketball) images
import giftZackCozy from "../assets/gift-zack-cozy.png";
import giftZackNice from "../assets/gift-zack-nice.png";
import giftZackSweet from "../assets/gift-zack-sweet.png";
import giftZackWow from "../assets/gift-zack-wow.png";

// Mock contacts with avatars (Same as GreetingGenerator)
const mockContacts = [
    {
        id: 1,
        name: "Rose",
        relationship: "Friend",
        avatar: "🌹",
        interests: "Flower and scent lover",
        color: "from-red-500/20 to-bubly-pink/20",
    },
    {
        id: 2,
        name: "Owen",
        relationship: "Coworker",
        avatar: "💻",
        interests: "Tech Lover",
        color: "from-bubly-sky/20 to-bubly-blue/20",
    },
    {
        id: 3,
        name: "Zack",
        relationship: "Classmate",
        avatar: "🏀",
        interests: "Loves playing basketball",
        color: "from-red-500/20 to-bubly-orange/20",
    },
];

const occasions = [
    { id: "birthday", label: "Birthday", icon: "🎂" },
    { id: "just-because", label: "Just Because", icon: "✨" },
    { id: "thank-you", label: "Thank You", icon: "🙏" },
    { id: "holiday", label: "Holiday", icon: "🎄" },
    { id: "anniversary", label: "Anniversary", icon: "🥂" },
    { id: "congrats", label: "Congrats", icon: "🎉" },
];

const budgets = [
    { id: "cozy", label: "Cozy", range: "Under $25", icon: "☕" },
    { id: "nice", label: "Nice", range: "$25 - $50", icon: "🌟" },
    { id: "sweet", label: "Sweet", range: "$50 - $100", icon: "💝" },
    { id: "wow", label: "WOW!", range: "$100+", icon: "💎" },
];

// Personalized gift results per contact (id) × budget
const giftResults: Record<number, Record<string, { title: string; image: string }>> = {
    // Rose — Flower and scent lover
    1: {
        cozy: { title: "Artisan Soap & Bath Set", image: giftRoseCozy },
        nice: { title: "Scented Candle Collection", image: giftRoseNice },
        sweet: { title: "Luxury Perfume Gift Box", image: giftRoseSweet },
        wow: { title: "Premium Fragrance & Floral Spa", image: giftRoseWow },
    },
    // Owen — Tech Lover
    2: {
        cozy: { title: "Phone Stand & Cable Kit", image: giftOwenCozy },
        nice: { title: "Wireless Charger Set", image: giftOwenNice },
        sweet: { title: "Noise-Cancelling Earbuds", image: giftOwenSweet },
        wow: { title: "Smart Watch Collection", image: giftOwenWow },
    },
    // Zack — Loves playing basketball
    3: {
        cozy: { title: "Sports Water Bottle & Towel", image: giftZackCozy },
        nice: { title: "Basketball Training Kit", image: giftZackNice },
        sweet: { title: "Premium Sports Gear Set", image: giftZackSweet },
        wow: { title: "Signature Basketball & Jersey", image: giftZackWow },
    },
};

export const GiftFinder = () => {
    const [step, setStep] = useState<"recipient" | "occasion" | "budget" | "result">("recipient");
    const [selections, setSelections] = useState({
        recipient: null as number | null,
        occasion: "",
        budget: "",
    });
    const [isGenerating, setIsGenerating] = useState(false);

    const handleContactSelect = (contactId: number) => {
        setSelections((prev) => ({ ...prev, recipient: contactId }));
        setStep("occasion");
    };

    const handleSelection = (key: keyof typeof selections, value: string) => {
        setSelections((prev) => ({ ...prev, [key]: value }));

        if (key === "occasion") setStep("budget");
        else if (key === "budget") {
            setIsGenerating(true);
            setTimeout(() => {
                setStep("result");
                setIsGenerating(false);
            }, 1500);
        }
    };

    const handleReset = () => {
        setStep("recipient");
        setSelections({ recipient: null, occasion: "", budget: "" });
        setIsGenerating(false);
    };

    const getStepProgress = () => {
        switch (step) {
            case "recipient": return 1;
            case "occasion": return 2;
            case "budget": return 3;
            case "result": return 4;
            default: return 1;
        }
    };

    const selectedBudget = budgets.find(b => b.id === selections.budget);
    const selectedContact = mockContacts.find(c => c.id === selections.recipient);
    const giftResult = selections.recipient && selections.budget
        ? giftResults[selections.recipient]?.[selections.budget]
        : undefined;

    return (
        <div className="w-full">
            {/* Header */}
            <div className="text-center mb-6 md:mb-8">
                <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-bubly-violet/10 via-bubly-pink/10 to-bubly-sky/10 backdrop-blur-sm border border-bubly-violet/20 mb-3 md:mb-4">
                    <Gift className="w-3.5 h-3.5 md:w-4 md:h-4 text-bubly-pink" />
                    <span className="text-xs md:text-sm font-medium gradient-text">Perfect Gift Every Time</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 px-4">
                    AI <span className="gradient-text">Gift Finder</span>
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base px-4">
                    Find the perfect gift for any person, occasion, and budget
                </p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-1 md:gap-2 mb-6 md:mb-8">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center">
                        <div className={`
              w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold transition-all duration-300
              ${i <= getStepProgress()
                                ? "bg-gradient-bubly text-white scale-110"
                                : "bg-muted text-muted-foreground"
                            }
            `}>
                            {i}
                        </div>
                        {i < 4 && (
                            <div className={`w-6 md:w-16 h-0.5 mx-0.5 md:mx-1 transition-all duration-300 ${i < getStepProgress() ? "bg-bubly-violet/40" : "bg-muted"
                                }`} />
                        )}
                    </div>
                ))}
            </div>

            {/* Content Area */}
            <div className="min-h-[320px] md:min-h-[400px]">
                {isGenerating ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-12 h-full"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-20 h-20 mb-6 text-6xl flex items-center justify-center"
                        >
                            🎁
                        </motion.div>
                        <p className="text-lg font-medium gradient-text">Searching specifically for you...</p>
                    </motion.div>
                ) : (
                    <AnimatePresence mode="wait">
                        {/* Step 1: Recipient (Updated to use mockContacts like AI Blessing) */}
                        {step === "recipient" && (
                            <motion.div
                                key="recipient"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <Users className="w-5 h-5 text-bubly-violet" />
                                    <span className="font-medium">Who is this gift for?</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                                    {mockContacts.map((contact) => (
                                        <motion.button
                                            key={contact.id}
                                            onClick={() => handleContactSelect(contact.id)}
                                            className={`
                        group relative p-5 md:p-6 rounded-2xl border-2 transition-all duration-300
                        active:scale-95 md:hover:scale-105 hover:shadow-xl
                        bg-gradient-to-br ${contact.color}
                        border-white/20 hover:border-bubly-violet/40
                        touch-manipulation
                      `}
                                            whileHover={{ y: -4 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                                                <div className="text-4xl md:text-6xl">{contact.avatar}</div>
                                                <div>
                                                    <h4 className="font-bold text-base md:text-lg">{contact.name}</h4>
                                                    <p className="text-xs text-muted-foreground">{contact.relationship}</p>
                                                </div>
                                                <div className="text-xs text-muted-foreground/80">
                                                    {contact.interests}
                                                </div>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Occasion */}
                        {step === "occasion" && (
                            <motion.div
                                key="occasion"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <Calendar className="w-5 h-5 text-bubly-pink" />
                                    <span className="font-medium">What's the occasion?</span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {occasions.map((option) => (
                                        <motion.button
                                            key={option.id}
                                            onClick={() => handleSelection("occasion", option.id)}
                                            className="p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-bubly-pink/40 transition-all duration-200 group flex flex-col items-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span className="text-3xl">{option.icon}</span>
                                            <span className="font-medium text-sm">{option.label}</span>
                                        </motion.button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setStep("recipient")}
                                    className="w-full text-center text-sm text-muted-foreground mt-4 hover:text-foreground"
                                >
                                    Back
                                </button>
                            </motion.div>
                        )}

                        {/* Step 3: Budget (Updated layout) */}
                        {step === "budget" && (
                            <motion.div
                                key="budget"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <Wallet className="w-5 h-5 text-bubly-sky" />
                                    <span className="font-medium">What's your budget?</span>
                                </div>
                                {/* 4 columns on medium screens, centered text, no arrows */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                                    {budgets.map((option) => (
                                        <motion.button
                                            key={option.id}
                                            onClick={() => handleSelection("budget", option.id)}
                                            className="p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-bubly-sky/40 transition-all duration-200 group flex flex-col items-center justify-center gap-2 text-center h-full"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span className="text-3xl mb-1">{option.icon}</span>
                                            <div className="font-bold text-base">{option.label}</div>
                                            <div className="text-xs text-muted-foreground">{option.range}</div>
                                        </motion.button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setStep("occasion")}
                                    className="w-full text-center text-sm text-muted-foreground mt-4 hover:text-foreground"
                                >
                                    Back
                                </button>
                            </motion.div>
                        )}

                        {/* Step 4: Result (Dynamic image matches budget) */}
                        {step === "result" && (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-6 text-center"
                            >
                                <div className="py-2">
                                    <p className="text-sm text-muted-foreground mb-1">
                                        Perfect gift for {selectedContact?.name || "your friend"}
                                    </p>
                                    <h4 className="text-2xl font-bold gradient-text">{giftResult?.title || "Special Gift"}</h4>
                                </div>

                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group mx-auto max-w-md">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                                    <img
                                        src={giftResult?.image || giftRoseNice}
                                        alt="Gift Recommendation"
                                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end text-white">
                                        <div className="text-left">
                                            <p className="text-xs font-medium opacity-80 mb-1">Recommended Choice</p>
                                            <p className="font-bold text-lg">{giftResult?.title}</p>
                                        </div>
                                        <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-bold">
                                            {selectedBudget?.range}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-sm text-green-400">
                                    <Check className="w-4 h-4" />
                                    <span>Matches {occasions.find(o => o.id === selections.occasion)?.label} vibe</span>
                                </div>

                                <button
                                    onClick={handleReset}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-bubly text-white font-medium hover:shadow-lg active:scale-95 transition-all duration-200"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    Find Another Gift
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
};
