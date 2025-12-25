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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseDistance, setMouseDistance] = useState(1); // 0 = close, 1 = far
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      setMousePosition({ x, y });
      
      // Calculate distance from center for glow intensity
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );
      const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
      const normalizedDistance = Math.min(distance / (maxDistance * 0.5), 1);
      setMouseDistance(normalizedDistance);
      setIsNear(normalizedDistance < 0.4);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 25 }}
    >
      {/* Outer soft glow - responds to mouse proximity */}
      <motion.div 
        className="absolute inset-0 -m-16 bg-gradient-radial from-bubly-violet/20 via-bubly-sky/10 to-transparent blur-[60px] rounded-full"
        animate={{
          opacity: isNear ? 0.9 : 0.4,
          scale: isNear ? 1.3 : 1,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* Inner glow - breathing animation */}
      <motion.div 
        className="absolute inset-0 -m-8 bg-gradient-radial from-bubly-pink/25 via-bubly-violet/15 to-transparent blur-3xl rounded-full"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Shimmer highlight effect */}
      <motion.div 
        className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl rounded-full"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* 3D container with perspective transform */}
      <motion.div
        className="relative"
        animate={{
          rotateY: mousePosition.x * 3,
          rotateX: -mousePosition.y * 2,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Shadow layer for depth */}
        <motion.div
          className="absolute inset-0 top-4"
          animate={{
            x: mousePosition.x * -0.5,
            y: Math.abs(mousePosition.y) * 0.3 + 10,
            opacity: isNear ? 0.25 : 0.15,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
        >
          <div className={`${sizeClasses[size]} bg-bubly-violet/30 rounded-full blur-2xl`} />
        </motion.div>

        {/* Main Bubbo image with floating + subtle rotation */}
        <motion.img
          src={bubboDefault}
          alt="Bubbo"
          className={`${sizeClasses[size]} object-contain relative z-10`}
          style={{
            filter: `drop-shadow(0 ${isNear ? 35 : 25}px ${isNear ? 70 : 50}px rgba(167,139,250,${isNear ? 0.5 : 0.35}))`,
          }}
          animate={{ 
            y: [0, -10, 0],
            rotate: [-1, 1, -1],
            scale: isNear ? 1.02 : 1,
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.4, ease: "easeOut" },
          }}
        />
      </motion.div>

      {/* Subtle particle accents */}
      <motion.div
        className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-bubly-sky/60"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1 -left-3 w-1.5 h-1.5 rounded-full bg-bubly-pink/50"
        animate={{
          y: [0, -12, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 -right-4 w-1 h-1 rounded-full bg-bubly-violet/40"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
