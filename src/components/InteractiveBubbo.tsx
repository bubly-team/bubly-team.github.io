import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import all Bubbo poses
import bubboDefault from "@/assets/bubbo.png";
import bubboWave from "@/assets/bubbo-wave.png";
import bubboPoint from "@/assets/bubbo-point.png";
import bubboThinking from "@/assets/bubbo-thinking.png";
import bubboSleepy from "@/assets/bubbo-sleepy.png";
import bubboNoIdea from "@/assets/bubbo-no-idea.png";

export type BubboPose = "default" | "wave" | "point" | "thinking" | "sleepy" | "no-idea";

const bubboImages: Record<BubboPose, string> = {
  default: bubboDefault,
  wave: bubboWave,
  point: bubboPoint,
  thinking: bubboThinking,
  sleepy: bubboSleepy,
  "no-idea": bubboNoIdea,
};

interface InteractiveBubboProps {
  size?: "sm" | "md" | "lg" | "xl";
  initialPose?: BubboPose;
  hoverPose?: BubboPose;
  className?: string;
  enableClick?: boolean;
  showTooltip?: boolean;
  enableEasterEgg?: boolean;
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

const tooltips: Record<BubboPose, string> = {
  default: "Hi there!",
  wave: "Hello! 👋",
  point: "That's you!",
  thinking: "Hmm...",
  sleepy: "Zzz...",
  "no-idea": "I don't know!",
};

// Easter egg particle component
const EasterEggParticles = ({ isActive }: { isActive: boolean }) => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    emoji: ["✨", "🌟", "💫", "⭐", "🎉", "🎊", "💖", "🫧"][i % 8],
    angle: (i * 360) / 20,
    delay: i * 0.05,
  }));

  return (
    <AnimatePresence>
      {isActive && (
        <>
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute text-lg pointer-events-none z-50"
              initial={{ 
                opacity: 1, 
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{ 
                opacity: [1, 1, 0],
                scale: [0, 1.5, 1],
                x: Math.cos(particle.angle * Math.PI / 180) * 120,
                y: Math.sin(particle.angle * Math.PI / 180) * 120,
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1,
                delay: particle.delay,
                ease: "easeOut"
              }}
            >
              {particle.emoji}
            </motion.span>
          ))}
          {/* Central burst */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-radial from-bubly-pink/50 via-bubly-violet/30 to-transparent"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export const InteractiveBubbo = ({
  size = "md",
  initialPose = "default",
  hoverPose = "wave",
  className = "",
  enableClick = true,
  showTooltip = true,
  enableEasterEgg = true,
}: InteractiveBubboProps) => {
  const [currentPose, setCurrentPose] = useState<BubboPose>(initialPose);
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [rapidClickCount, setRapidClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [easterEggMessage, setEasterEggMessage] = useState("");
  const [lastClickTime, setLastClickTime] = useState(0);

  const poses: BubboPose[] = ["default", "wave", "point", "thinking", "no-idea"];
  const easterEggMessages = [
    "Woohoo! You found me! 🎉",
    "That tickles! 😆",
    "I'm getting dizzy! 🌀",
    "Best friends forever! 💖",
    "You're amazing! ✨",
  ];

  const triggerEasterEgg = useCallback(() => {
    setShowEasterEgg(true);
    setEasterEggMessage(easterEggMessages[Math.floor(Math.random() * easterEggMessages.length)]);
    setTimeout(() => setShowEasterEgg(false), 2000);
    setRapidClickCount(0);
  }, []);

  const handleClick = () => {
    if (!enableClick) return;
    
    const now = Date.now();
    
    // Easter egg: detect rapid clicks (within 500ms)
    if (enableEasterEgg && now - lastClickTime < 500) {
      setRapidClickCount(prev => {
        const newCount = prev + 1;
        if (newCount >= 5) {
          triggerEasterEgg();
          return 0;
        }
        return newCount;
      });
    } else {
      setRapidClickCount(1);
    }
    setLastClickTime(now);
    
    const nextIndex = (clickCount + 1) % poses.length;
    setCurrentPose(poses[nextIndex]);
    setClickCount(nextIndex);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!enableClick || clickCount === 0) {
      setCurrentPose(hoverPose);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!enableClick || clickCount === 0) {
      setCurrentPose(initialPose);
    }
  };

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={showEasterEgg ? {
        rotate: [0, -10, 10, -10, 10, 0],
        scale: [1, 1.2, 1.2, 1.2, 1.2, 1],
      } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Easter egg particles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <EasterEggParticles isActive={showEasterEgg} />
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 -m-4 bg-gradient-radial from-bubly-violet/30 via-bubly-pink/20 to-transparent blur-2xl"
        animate={{
          opacity: showEasterEgg ? 1 : isHovered ? 0.8 : 0.4,
          scale: showEasterEgg ? 1.5 : isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Bubbo image with smooth transition */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentPose}
          src={bubboImages[currentPose]}
          alt="Bubbo"
          className={`${sizeClasses[size]} object-contain relative z-10 drop-shadow-xl`}
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
          transition={{ duration: 0.2 }}
        />
      </AnimatePresence>

      {/* Easter egg message */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-gradient-to-r from-bubly-pink/90 to-bubly-violet/90 backdrop-blur-md border border-white/30 text-sm font-bold whitespace-nowrap z-30 shadow-lg"
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {easterEggMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Regular Tooltip */}
      <AnimatePresence>
        {showTooltip && isHovered && !showEasterEgg && (
          <motion.div
            className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium whitespace-nowrap z-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {tooltips[currentPose]}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Scroll-triggered Bubbo that changes pose based on scroll position
interface ScrollBubboProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const ScrollBubbo = ({ className = "", size = "md" }: ScrollBubboProps) => {
  const [pose, setPose] = useState<BubboPose>("default");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage < 20) {
        setPose("wave");
      } else if (scrollPercentage < 40) {
        setPose("default");
      } else if (scrollPercentage < 60) {
        setPose("thinking");
      } else if (scrollPercentage < 80) {
        setPose("point");
      } else {
        setPose("sleepy");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div className={`${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={pose}
          src={bubboImages[pose]}
          alt="Bubbo"
          className={`${sizeClasses[size]} object-contain drop-shadow-xl`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>
    </motion.div>
  );
};

// Bubbo that follows cursor with premium animations
interface FollowCursorBubboProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const FollowCursorBubbo = ({ className = "", size = "lg" }: FollowCursorBubboProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ perspective: "1200px" }}
    >
      {/* Outer ambient glow - gentle breathing */}
      <motion.div 
        className="absolute inset-0 -m-20 bg-gradient-radial from-bubly-violet/15 via-bubly-sky/8 to-transparent blur-[80px] rounded-full"
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Inner glow - soft pulse */}
      <motion.div 
        className="absolute inset-0 -m-10 bg-gradient-radial from-bubly-pink/20 via-bubly-violet/10 to-transparent blur-3xl rounded-full"
        animate={{
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Subtle shimmer highlight */}
      <motion.div 
        className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-10 bg-gradient-to-r from-transparent via-white/8 to-transparent blur-2xl rounded-full"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          x: [-30, 30, -30],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* 3D container - gentle automatic rotation */}
      <motion.div
        className="relative"
        animate={{
          rotateY: [-4, 4, -4],
          rotateX: [2, -2, 2],
        }}
        transition={{ 
          rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Dynamic shadow for depth */}
        <motion.div
          className="absolute inset-0 top-6"
          animate={{
            x: [-3, 3, -3],
            y: [12, 16, 12],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={`${sizeClasses[size]} bg-bubly-violet/25 rounded-full blur-2xl`} />
        </motion.div>

        {/* Main Bubbo - elegant floating animation */}
        <motion.img
          src={bubboDefault}
          alt="Bubbo"
          className={`${sizeClasses[size]} object-contain relative z-10`}
          style={{
            filter: "drop-shadow(0 30px 60px rgba(167,139,250,0.4))",
          }}
          animate={{ 
            y: [0, -12, 0],
            rotate: [-1.5, 1.5, -1.5],
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </motion.div>

      {/* Sparkle particles - subtle and elegant */}
      <motion.div
        className="absolute -top-3 right-2 w-2 h-2 rounded-full bg-bubly-sky/50"
        animate={{
          y: [0, -18, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-4 -left-4 w-1.5 h-1.5 rounded-full bg-bubly-pink/40"
        animate={{
          y: [0, -14, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute top-1/4 -right-5 w-1 h-1 rounded-full bg-bubly-violet/30"
        animate={{
          y: [0, -12, 0],
          x: [0, 6, 0],
          opacity: [0.15, 0.5, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />
      
      {/* Extra sparkle for playfulness */}
      <motion.div
        className="absolute top-8 -left-2 w-1.5 h-1.5 rounded-full bg-bubly-sky/30"
        animate={{
          y: [0, -10, 0],
          opacity: [0.1, 0.4, 0.1],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </motion.div>
  );
};

// Random pose Bubbo with auto-changing
interface AutoChangeBubboProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  interval?: number;
}

export const AutoChangeBubbo = ({ 
  className = "", 
  size = "md",
  interval = 3000 
}: AutoChangeBubboProps) => {
  const [pose, setPose] = useState<BubboPose>("default");
  const poses: BubboPose[] = ["default", "wave", "thinking", "point", "no-idea"];

  useEffect(() => {
    const timer = setInterval(() => {
      setPose(poses[Math.floor(Math.random() * poses.length)]);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <motion.div className={className}>
      <AnimatePresence mode="wait">
        <motion.img
          key={pose}
          src={bubboImages[pose]}
          alt="Bubbo"
          className={`${sizeClasses[size]} object-contain drop-shadow-lg`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>
    </motion.div>
  );
};
