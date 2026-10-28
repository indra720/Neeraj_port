import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ShieldCheck, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Business", path: "/business" },
    { name: "Projects", path: "/projects" },
    { name: "Journey", path: "/journey" },
    { name: "Achievements", path: "/achievements" },
    { name: "Media", path: "/media" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#081B33]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#C8A96B]/25"
          : "bg-[#081B33]/80 backdrop-blur-sm py-4 md:py-5 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Typographic Logo */}
          <Link to="/" className="group flex flex-col tracking-wider">
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-[0.18em] text-white group-hover:text-[#C8A96B] transition-colors uppercase">
              NEERAJ SHARMA
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.28em] text-[#C8A96B] uppercase font-medium flex items-center gap-1.5 mt-0.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C8A96B]"></span>
              Entrepreneur • Business Leader
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide uppercase transition-all duration-200 ${
                    active
                      ? "text-[#C8A96B] font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C8A96B] shadow-[0_0_8px_#C8A96B] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-sm bg-gradient-to-r from-[#C8A96B] to-[#B39352] text-[#081B33] font-semibold text-xs tracking-wider uppercase shadow-md hover:shadow-gold-glow hover:brightness-105 transition-all duration-300"
            >
              <span>Business Enquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-3">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-sm bg-[#C8A96B] text-[#081B33] text-[11px] font-bold uppercase tracking-wider"
            >
              Enquire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#C8A96B] focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] sm:top-[69px] bg-[#081B33]/98 backdrop-blur-xl border-b border-[#C8A96B]/30 shadow-2xl transition-all duration-300 max-h-[85vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            <div className="grid grid-cols-1 divide-y divide-white/10">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3.5 text-sm tracking-wider uppercase font-medium transition-colors ${
                      active
                        ? "text-[#C8A96B] font-semibold pl-2 border-l-2 border-[#C8A96B]"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#C8A96B]/60" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-sm bg-gradient-to-r from-[#C8A96B] to-[#B39352] text-[#081B33] font-bold text-xs uppercase tracking-widest shadow-lg"
              >
                <span>Initiate Business Enquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-center text-[11px] text-gray-400">
                Official Portfolio of Neeraj Sharma • Joy Hospitality Group
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
