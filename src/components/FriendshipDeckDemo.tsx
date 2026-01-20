import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Zap, Sparkles, RefreshCw, TrendingUp } from "lucide-react";

// Mock Data for the Deck
const updates = [
    {
        id: 1,
        name: "Sarah Chen",
        action: "Updated Bio",
        time: "2h ago",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        vibeScore: 92,
        vibeStatus: "On Fire! 🔥",
        color: "from-pink-500 to-rose-500"
    },
    {
        id: 2,
        name: "Mike Ross",
        action: "New Job at Tech",
        time: "5h ago",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
        vibeScore: 85,
        vibeStatus: "Going Strong 💪",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 3,
        name: "Emma Watson",
        action: "Birthday in 2 days",
        time: "Just now",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        vibeScore: 45,
        vibeStatus: "Needs a Nudge 👋",
        color: "from-purple-500 to-violet-500"
    }
];

export const FriendshipDeckDemo = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isCheckingVibe, setIsCheckingVibe] = useState(false);

    // Auto-rotate cards if not interacting
    useEffect(() => {
        if (isCheckingVibe) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % updates.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [isCheckingVibe]);

    const activeMethod = updates[activeIndex];

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">

                {/* Left Side: The Narrative */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bubly-violet/10 border border-bubly-violet/20 text-bubly-violet text-sm font-medium"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>New Feature: Friends & Sync</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-bubly-dark via-bubly-violet to-bubly-dark">
                        Stay in Sync. <br /> Check the Vibe.
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Missed a friend's new job update? Forgot to text back?
                        The <strong>Friendship Deck</strong> keeps you updated, while
                        <strong> Vibe Check</strong> acts as your relationship thermometer, ensuring you never lose touch.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-green-100 text-green-600">
                                <RefreshCw className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-bubly-dark">Smart Updates Feed</h4>
                                <p className="text-sm text-muted-foreground">Real-time updates without the noise.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-rose-100 text-rose-600">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-bubly-dark">AI Vibe Check</h4>
                                <p className="text-sm text-muted-foreground">Know exactly when to reach out.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: The Interactive Component */}
                <div className="relative h-[400px] flex items-center justify-center perspective-1000">
                    {/* Background Decorative Blobs */}
                    <div className="absolute inset-0 bg-gradient-to-br from-bubly-sky/20 to-bubly-pink/20 rounded-full blur-3xl opacity-50 animate-pulse" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeMethod.id}
                            initial={{ rotateX: 30, opacity: 0, y: 50 }}
                            animate={{ rotateX: 0, opacity: 1, y: 0 }}
                            exit={{ rotateX: -30, opacity: 0, y: -50 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="absolute w-full max-w-sm z-10"
                        >
                            <GlassCard className="p-6 border-2 border-white/50 shadow-xl backdrop-blur-xl bg-white/40">
                                {/* Header: Update Type */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="w-12 h-12 border-2 border-white shadow-md">
                                            <AvatarImage src={activeMethod.avatar} />
                                            <AvatarFallback>{activeMethod.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="font-bold text-lg text-bubly-dark">{activeMethod.name}</h3>
                                            <p className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                                                {activeMethod.time} • {activeMethod.action}
                                            </p>
                                        </div>
                                    </div>
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold text-white bg-gradient-to-r ${activeMethod.color}`}>
                                        NEW
                                    </span>
                                </div>

                                {/* Vibe Check Section */}
                                <div className="mt-6 p-4 rounded-xl bg-white/50 border border-white/60 shadow-inner">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Vibe Score</span>
                                        <Zap className={`w-4 h-4 ${activeMethod.vibeScore > 80 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`} />
                                    </div>

                                    <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                                        <motion.div
                                            className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${activeMethod.color}`}
                                            initial={{ width: "0%" }}
                                            animate={{ width: `${activeMethod.vibeScore}%` }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                        />
                                    </div>

                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-2xl font-black text-bubly-dark">{activeMethod.vibeScore}%</span>
                                        <span className="text-sm font-medium text-bubly-violet">{activeMethod.vibeStatus}</span>
                                    </div>
                                </div>

                                {/* Interaction Hint */}
                                <div className="mt-4 flex justify-center">
                                    <button
                                        onClick={() => setIsCheckingVibe(!isCheckingVibe)}
                                        className="text-xs text-muted-foreground hover:text-bubly-violet transition-colors flex items-center gap-1"
                                    >
                                        <RefreshCw className="w-3 h-3" />
                                        {isCheckingVibe ? "Resume Deck" : "Tap to Pause"}
                                    </button>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </AnimatePresence>

                    {/* Stack effect cards behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[85%] max-w-sm h-64 bg-white/30 rounded-2xl blur-sm scale-95 -z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[75%] max-w-sm h-64 bg-white/20 rounded-2xl blur-md scale-90 -z-20" />

                </div>
            </div>
        </div>
    );
};
