import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingBubbo } from "./Bubbo";
import { BubbleBackground } from "./BubbleBackground";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col mesh-gradient">
      <BubbleBackground />
      <Navbar />
      <FloatingBubbo />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
