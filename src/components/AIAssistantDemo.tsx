import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCw, Sparkles, Gift } from "lucide-react";
import bubboThinking from "../assets/bubbo-thinking.png";
import bubboWave from "../assets/bubbo-wave.png";
import { GreetingGenerator } from "./GreetingGenerator";
import { GiftFinder } from "./GiftFinder";

export const AIAssistantDemo = () => {
  const [activeTab, setActiveTab] = useState<"blessing" | "gift">("blessing");

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Demo Container */}
      <div className="relative">
        {/* Glass Card */}
        <div className="glass rounded-2xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-10 relative overflow-hidden transition-all duration-500 min-h-[600px]">
          {/* Decorative gradient orbs - Dynamic based on tab */}
          <div className={`absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 rounded-full blur-3xl transition-colors duration-500 ${activeTab === 'blessing' ? 'bg-bubly-violet/10' : 'bg-bubly-pink/10'}`} />
          <div className={`absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 rounded-full blur-3xl transition-colors duration-500 ${activeTab === 'blessing' ? 'bg-bubly-pink/10' : 'bg-bubly-sky/10'}`} />

          <div className="relative z-10 flex flex-col h-full">

            {/* Tab Switcher */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex relative">
                {/* Active Tab Background Animation */}
                <motion.div
                  className="absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-sm"
                  initial={false}
                  animate={{
                    x: activeTab === "blessing" ? 0 : "100%",
                    width: "50%"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />

                <button
                  onClick={() => setActiveTab("blessing")}
                  className={`
                    relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2
                    ${activeTab === "blessing" ? "text-bubly-violet" : "text-muted-foreground hover:text-foreground"}
                  `}
                >
                  <Sparkles className="w-4 h-4" />
                  AI Blessing
                </button>
                <button
                  onClick={() => setActiveTab("gift")}
                  className={`
                    relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2
                    ${activeTab === "gift" ? "text-bubly-pink" : "text-muted-foreground hover:text-foreground"}
                  `}
                >
                  <Gift className="w-4 h-4" />
                  Gift Finder
                </button>
              </div>
            </div>

            {/* Content Transition */}
            <AnimatePresence mode="wait">
              {activeTab === "blessing" ? (
                <motion.div
                  key="blessing"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <GreetingGenerator />
                </motion.div>
              ) : (
                <motion.div
                  key="gift"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <GiftFinder />
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Floating Bubbo - Desktop only - Changes pose based on Tab */}
        <motion.div
          className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-32 h-32"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={activeTab === 'blessing' ? bubboWave : bubboThinking}
            alt="Bubbo"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Bottom hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-6 text-xs md:text-sm text-muted-foreground/60"
      >
        This is a preview demo. Download the app for the full AI experience.
      </motion.p>
    </div>
  );
};
