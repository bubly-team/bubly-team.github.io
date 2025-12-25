import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Smile, Award, Zap, Copy, Check } from "lucide-react";
import bubboThinking from "../assets/bubbo-thinking.png";
import bubboWave from "../assets/bubbo-wave.png";

// Mock contacts with avatars
const mockContacts = [
  {
    id: 1,
    name: "Megan",
    relationship: "Coworker & Friend",
    avatar: "🎨",
    interests: "Art and music lover",
    occasion: "Birthday",
    color: "from-bubly-pink/20 to-bubly-violet/20",
  },
  {
    id: 2,
    name: "Alex",
    relationship: "Best Friend",
    avatar: "⚽",
    interests: "Sports enthusiast",
    occasion: "Birthday",
    color: "from-bubly-sky/20 to-bubly-blue/20",
  },
  {
    id: 3,
    name: "Sarah",
    relationship: "Classmate",
    avatar: "📚",
    interests: "Book lover",
    occasion: "Graduation",
    color: "from-bubly-violet/20 to-bubly-pink/20",
  },
];

// Vibe options matching the app screenshot
const vibes = [
  {
    id: "warm",
    label: "Warm",
    subtitle: "Sincere & Caring",
    icon: Heart,
    color: "bg-gradient-to-br from-pink-400/10 to-pink-500/5",
    activeColor: "bg-gradient-to-br from-pink-400/20 to-pink-500/10",
    borderColor: "border-pink-400/30",
  },
  {
    id: "fun",
    label: "Fun",
    subtitle: "Witty & Playful",
    icon: Smile,
    color: "bg-gradient-to-br from-yellow-400/10 to-orange-500/5",
    activeColor: "bg-gradient-to-br from-yellow-400/20 to-orange-500/10",
    borderColor: "border-yellow-400/30",
  },
  {
    id: "formal",
    label: "Formal",
    subtitle: "Polite & Proper",
    icon: Award,
    color: "bg-gradient-to-br from-blue-400/10 to-blue-500/5",
    activeColor: "bg-gradient-to-br from-blue-400/20 to-blue-500/10",
    borderColor: "border-blue-400/30",
  },
  {
    id: "short",
    label: "Short",
    subtitle: "Quick & Direct",
    icon: Zap,
    color: "bg-gradient-to-br from-purple-400/10 to-purple-500/5",
    activeColor: "bg-gradient-to-br from-purple-400/20 to-purple-500/10",
    borderColor: "border-purple-400/30",
  },
];

// Pre-generated messages for each contact and vibe
const generatedMessages: Record<number, Record<string, string>> = {
  1: {
    warm: "Happy Birthday, Megan! 🎉 I'm so glad I get to call you not just a coworker but a real friend. Your taste in art and music always inspires me, and I hope this year brings you countless moments of creativity and joy!",
    fun: "🎨 Happy Birthday, Megan! 🎂 May your day be as colorful as your art and as harmonious as your favorite songs! Here's to another year of being the coolest coworker-turned-bestie ever! 🎉",
    formal: "Dear Megan, Wishing you a wonderful birthday filled with joy and success. I truly appreciate your friendship and creative spirit. May this year bring you continued growth and fulfillment.",
    short: "Happy Birthday, Megan! 🎉 Hope your day is as amazing as you are!",
  },
  2: {
    warm: "Happy Birthday, Alex! 🎂 Having you as my best friend has been one of life's greatest gifts. Your energy and passion for sports always motivates me. Here's to another year of adventures together!",
    fun: "⚽ GOAL! It's Alex's Birthday! 🎉 Time to celebrate the MVP of friendship! May your year be filled with wins, high-fives, and awesome moments! Let's gooo! 🏆",
    formal: "Dear Alex, I extend my warmest birthday wishes to you. Your friendship has been invaluable, and I look forward to many more years of shared experiences and mutual support.",
    short: "Happy Birthday, buddy! 🎉 Here's to another great year!",
  },
  3: {
    warm: "Congratulations on your graduation, Sarah! 📚✨ Your dedication to learning has always amazed me. This is just the beginning of an incredible journey, and I'm so proud to have shared this time with you!",
    fun: "📚🎓 Sarah's graduating! Time to throw those caps in the air! 🎉 You crushed it! Now go out there and show the world what you're made of, bookworm extraordinaire! 🌟",
    formal: "Dear Sarah, Congratulations on achieving this significant milestone. Your academic dedication serves as an inspiration. I wish you continued success in your future endeavors.",
    short: "Congrats on graduating, Sarah! 🎓 So proud of you!",
  },
};

export const AIAssistantDemo = () => {
  const [step, setStep] = useState<"select" | "vibe" | "generate" | "result">("select");
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);
  const [displayedMessage, setDisplayedMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleContactSelect = (contactId: number) => {
    setSelectedContact(contactId);
    setTimeout(() => setStep("vibe"), 300);
  };

  const handleVibeSelect = (vibeId: string) => {
    setSelectedVibe(vibeId);
    setStep("generate");
    generateMessage(selectedContact, vibeId);
  };

  const generateMessage = (contactId: number | null, vibeId: string | null) => {
    setIsGenerating(true);
    setDisplayedMessage("");

    setTimeout(() => {
      setStep("result");

      // Get the message with the passed parameters instead of state
      let message = "Sorry, something went wrong. Please try again!";

      if (contactId !== null && vibeId !== null) {
        const contactMessages = generatedMessages[contactId];

        if (contactMessages && contactMessages[vibeId]) {
          message = contactMessages[vibeId];
        }
      }

      // Typing effect
      let index = 0;
      const interval = setInterval(() => {
        if (index <= message.length) {
          setDisplayedMessage(message.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setIsGenerating(false);
        }
      }, 20);
    }, 1500);
  };

  const handleReset = () => {
    setStep("select");
    setSelectedContact(null);
    setSelectedVibe(null);
    setDisplayedMessage("");
    setIsGenerating(false);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(displayedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedContactData = mockContacts.find(c => c.id === selectedContact);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Demo Container */}
      <div className="relative">
        {/* Glass Card */}
        <div className="glass rounded-2xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-10 relative overflow-hidden">
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-bubly-violet/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-bubly-pink/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-bubly-violet/10 via-bubly-pink/10 to-bubly-sky/10 backdrop-blur-sm border border-bubly-violet/20 mb-3 md:mb-4">
                <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-bubly-violet" />
                <span className="text-xs md:text-sm font-medium gradient-text">Try It Yourself</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 px-4">
                AI-Powered <span className="gradient-text">Greeting Generator</span>
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base px-4">
                Select a contact and craft the perfect message in seconds
              </p>
            </div>

            {/* Progress Steps - Mobile optimized */}
            <div className="flex items-center justify-center gap-1 md:gap-2 mb-6 md:mb-8">
              {["select", "vibe", "result"].map((s, i) => (
                <div key={s} className="flex items-center">
                  <div className={`
                    w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold transition-all duration-300
                    ${step === s || (s === "result" && step === "generate")
                      ? "bg-gradient-bubly text-white scale-110"
                      : ["select", "vibe"].indexOf(s) < ["select", "vibe", "generate", "result"].indexOf(step)
                      ? "bg-bubly-violet/20 text-bubly-violet"
                      : "bg-muted text-muted-foreground"
                    }
                  `}>
                    {i + 1}
                  </div>
                  {i < 2 && (
                    <div className={`w-6 md:w-16 h-0.5 mx-0.5 md:mx-1 transition-all duration-300 ${
                      ["select", "vibe"].indexOf(s) < ["select", "vibe", "generate", "result"].indexOf(step)
                        ? "bg-bubly-violet/40"
                        : "bg-muted"
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Content Area */}
            <div className="min-h-[320px] md:min-h-[400px]">
              <AnimatePresence mode="wait">
                {/* Step 1: Select Contact */}
                {step === "select" && (
                  <motion.div
                    key="select"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <p className="text-center text-xs md:text-base font-medium text-muted-foreground mb-4 md:mb-6 px-4">
                      Choose who you want to send a message to:
                    </p>
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
                            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-bubly-violet/10 text-bubly-violet text-xs font-medium">
                              🎉 {contact.occasion}
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Select Vibe */}
                {step === "vibe" && (
                  <motion.div
                    key="vibe"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {selectedContactData && (
                      <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                        <div className="text-2xl md:text-3xl">{selectedContactData.avatar}</div>
                        <div className="text-left">
                          <p className="text-xs md:text-sm text-muted-foreground">Creating message for</p>
                          <p className="font-bold text-base md:text-lg">{selectedContactData.name}</p>
                        </div>
                      </div>
                    )}

                    <p className="text-center text-xs md:text-base font-medium text-muted-foreground mb-4 md:mb-6 px-4">
                      Choose the vibe for your message:
                    </p>

                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {vibes.map((vibe) => {
                        const Icon = vibe.icon;
                        return (
                          <motion.button
                            key={vibe.id}
                            onClick={() => handleVibeSelect(vibe.id)}
                            className={`
                              group relative p-4 md:p-6 rounded-2xl border-2 transition-all duration-300
                              active:scale-95 md:hover:scale-105 hover:shadow-xl
                              ${vibe.color} ${vibe.borderColor}
                              hover:border-opacity-60
                              touch-manipulation
                            `}
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="flex flex-col items-center text-center space-y-1.5 md:space-y-2">
                              <Icon className="w-7 h-7 md:w-10 md:h-10 opacity-60" />
                              <div>
                                <h4 className="font-bold text-base md:text-lg">{vibe.label}</h4>
                                <p className="text-xs text-muted-foreground hidden md:block">{vibe.subtitle}</p>
                              </div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>

                    <button
                      onClick={handleReset}
                      className="w-full mt-4 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      ← Back to contacts
                    </button>
                  </motion.div>
                )}

                {/* Step 3: Generating */}
                {step === "generate" && (
                  <motion.div
                    key="generate"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-24 h-24 mb-6"
                    >
                      <img src={bubboThinking} alt="Bubbo thinking" className="w-full h-full object-contain" />
                    </motion.div>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <p className="text-lg font-medium gradient-text">Bubbo is crafting your message...</p>
                    </motion.div>
                    <div className="flex gap-2 mt-4">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full bg-bubly-violet"
                          animate={{ y: [0, -10, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Result */}
                {step === "result" && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <motion.img
                        src={bubboWave}
                        alt="Bubbo waving"
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      />
                      <div className="text-left">
                        <p className="text-xs md:text-sm text-muted-foreground">Your message is ready!</p>
                        <p className="font-bold text-sm md:text-lg gradient-text">
                          {vibes.find(v => v.id === selectedVibe)?.label} vibes for {selectedContactData?.name}
                        </p>
                      </div>
                    </div>

                    {/* Message Display */}
                    <div className="relative p-4 md:p-6 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm border border-white/30 shadow-lg">
                      <p className="text-xs sm:text-sm md:text-base leading-relaxed text-foreground/90 min-h-[100px] md:min-h-[120px] pr-8">
                        {displayedMessage}
                        {isGenerating && (
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="inline-block w-0.5 h-3 md:h-4 bg-bubly-violet ml-1"
                          />
                        )}
                      </p>

                      {!isGenerating && (
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          onClick={handleCopy}
                          className="absolute top-3 md:top-4 right-3 md:right-4 p-1.5 md:p-2 rounded-lg bg-white/50 hover:bg-white/80 active:scale-90 transition-all duration-200 border border-white/40 touch-manipulation"
                        >
                          {copied ? (
                            <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                          )}
                        </motion.button>
                      )}
                    </div>

                    {!isGenerating && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-2 md:gap-3"
                      >
                        <button
                          onClick={() => {
                            setStep("vibe");
                            setSelectedVibe(null);
                            setDisplayedMessage("");
                          }}
                          className="flex-1 px-4 md:px-6 py-2.5 md:py-3 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/10 active:scale-95 transition-all duration-200 text-xs md:text-sm font-medium touch-manipulation"
                        >
                          Try Another Vibe
                        </button>
                        <button
                          onClick={handleReset}
                          className="flex-1 px-4 md:px-6 py-2.5 md:py-3 rounded-xl bg-gradient-bubly text-white font-medium hover:shadow-lg active:scale-95 transition-all duration-200 text-xs md:text-sm touch-manipulation"
                        >
                          Start Over
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Floating Bubbo - Desktop only */}
        <motion.div
          className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-32 h-32"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={bubboWave}
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
