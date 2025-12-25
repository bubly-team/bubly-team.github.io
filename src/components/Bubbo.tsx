import { useState, useEffect } from "react";
import bubboImage from "@/assets/bubbo.png";
import { cn } from "@/lib/utils";

interface BubboProps {
  variant?: "default" | "waving" | "thinking" | "celebrating";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  interactive?: boolean;
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

export const Bubbo = ({ 
  variant = "default", 
  size = "md", 
  className,
  interactive = true 
}: BubboProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        sizeClasses[size],
        interactive && "cursor-pointer",
        className
      )}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      {/* Glow effect */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full transition-opacity duration-300",
          "bg-gradient-to-br from-bubly-sky/40 via-bubly-violet/30 to-bubly-pink/40",
          "blur-xl",
          isHovered ? "opacity-100 scale-110" : "opacity-60"
        )}
      />
      
      {/* Bubbo image */}
      <img
        src={bubboImage}
        alt="Bubbo - Bubly 吉祥物"
        className={cn(
          "relative z-10 w-full h-full object-contain drop-shadow-lg",
          "transition-transform duration-300",
          variant === "default" && "animate-float",
          variant === "waving" && "animate-wobble",
          variant === "celebrating" && "animate-bounce",
          isHovered && interactive && "scale-110 rotate-3"
        )}
      />

      {/* Sparkles on hover */}
      {isHovered && interactive && (
        <>
          <span className="absolute -top-2 -right-2 w-3 h-3 bg-bubly-sky rounded-full animate-ping" />
          <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-bubly-pink rounded-full animate-ping animation-delay-200" />
          <span className="absolute top-1/2 -right-3 w-2 h-2 bg-bubly-violet rounded-full animate-ping animation-delay-400" />
        </>
      )}
    </div>
  );
};

// Floating Bubbo that follows scroll
export const FloatingBubbo = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed right-8 z-40 transition-all duration-500 hidden lg:block"
      style={{ 
        top: `${Math.min(400, 120 + scrollY * 0.1)}px`,
        opacity: scrollY > 100 ? 1 : 0,
        transform: `translateY(${Math.sin(scrollY * 0.01) * 10}px)`
      }}
    >
      <Bubbo size="sm" className="pulse-glow" />
    </div>
  );
};
