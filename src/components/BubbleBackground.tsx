import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
}

export const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generatedBubbles: Bubble[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 30,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setBubbles(generatedBubbles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: "-20%",
            background: `linear-gradient(135deg, 
              hsl(195 100% 75% / ${bubble.opacity}), 
              hsl(262 83% 70% / ${bubble.opacity * 0.8}),
              hsl(320 80% 70% / ${bubble.opacity * 0.6})
            )`,
            animation: `bubbleFloat ${bubble.duration}s ease-in-out infinite`,
            animationDelay: `${bubble.delay}s`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
};
