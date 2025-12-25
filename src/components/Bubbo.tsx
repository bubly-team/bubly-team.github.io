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

  return (
    <div
      className={cn(
        "relative transition-all duration-500 ease-out",
        sizeClasses[size],
        interactive && "cursor-pointer",
        className
      )}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      {/* Soft glow effect */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full transition-all duration-700 ease-out",
          "bg-gradient-to-br from-bubly-sky/30 via-bubly-violet/20 to-bubly-pink/30",
          "blur-2xl",
          isHovered ? "opacity-80 scale-125" : "opacity-50 scale-100"
        )}
      />
      
      {/* Bubbo image */}
      <img
        src={bubboImage}
        alt="Bubbo - Bubly mascot"
        className={cn(
          "relative z-10 w-full h-full object-contain",
          "transition-all duration-500 ease-out",
          "drop-shadow-[0_8px_24px_rgba(167,139,250,0.3)]",
          variant === "default" && "animate-float-gentle",
          isHovered && interactive && "scale-105 -translate-y-1"
        )}
      />

      {/* Subtle sparkles on hover */}
      {isHovered && interactive && (
        <>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-bubly-sky/60 rounded-full animate-fade-in" />
          <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-bubly-pink/50 rounded-full animate-fade-in" style={{ animationDelay: "0.1s" }} />
        </>
      )}
    </div>
  );
};

// Floating Bubbo that follows scroll
export const FloatingBubbo = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        "fixed right-8 z-40 transition-all duration-700 ease-out hidden lg:block",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      )}
      style={{ 
        top: `${Math.min(400, 150 + scrollY * 0.05)}px`,
      }}
    >
      <Bubbo size="sm" />
    </div>
  );
};
