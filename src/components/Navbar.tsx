import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import bubboImage from "@/assets/bubbo.png";

const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/features", label: "功能介紹" },
  { href: "/about", label: "關於我們" },
  { href: "/contact", label: "聯絡我們" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 glass border-b border-white/10" 
          : "py-5 bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group"
        >
          <img 
            src={bubboImage} 
            alt="Bubly" 
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" 
          />
          <span className="text-2xl font-bold gradient-text">Bubly</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors link-underline py-1",
                location.pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          
          <a
            href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-gradient-bubly text-white font-medium text-sm hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            下載 APP
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 glass border-b border-white/10 transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-base font-medium py-2 transition-colors",
                location.pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://apps.apple.com/app/bubly-social-assistant/id6754884488"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-gradient-bubly text-white font-medium text-center hover:opacity-90 transition-all"
          >
            下載 APP
          </a>
        </div>
      </div>
    </header>
  );
};
