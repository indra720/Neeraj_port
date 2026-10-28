import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Globe,
  Shield,
} from "lucide-react";
import { profileData } from "../../data/profileData";
import { businessCategories } from "../../data/businessData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#051224] text-gray-300 border-t border-[#C8A96B]/20 relative overflow-hidden">
      {/* Background Architectural Texture Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Editorial Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white uppercase block">
                NEERAJ SHARMA
              </span>
              <span className="text-[10px] tracking-[0.28em] text-[#C8A96B] uppercase font-semibold block mt-1">
                Entrepreneur • Business Leader
              </span>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Shaping India’s regional development through timeless natural
              stonecraft, international commercial acumen, and visionary
              hospitality destinations.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1.5 border-l-2 border-[#C8A96B]/50 pl-3">
              <p className="font-medium text-white/90">Heritage Roots:</p>
              <p>Hindaun City, Karauli District, Rajasthan, India</p>
              <p className="text-gray-400 text-[11px]">
                Joy Adventure Group • Joy Hospitality Group
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8A96B]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#C8A96B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  About Neeraj
                </Link>
              </li>
              <li>
                <Link
                  to="/journey"
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  Professional Journey
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  Business Verticals
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/achievements"
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  Business Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Sectors Columns */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8A96B]">
              Key Business Verticals
            </h3>
            <ul className="space-y-2 text-sm">
              {businessCategories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/business/${cat.slug}`}
                    className="hover:text-[#C8A96B] transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C8A96B]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Alliances & Engagement */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8A96B]">
              Institutional Engagement
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Open to high-level strategic partnerships, institutional real
              estate development, and global trade collaborations.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#1557A6] hover:bg-[#1C68C4] text-white text-xs font-semibold tracking-wider uppercase transition-colors w-full justify-center"
            >
              <span>Schedule Formal Discussion</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <div className="pt-2 text-[11px] text-gray-400 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>Confidential business discussions ensured</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Gold Accent */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {currentYear} Neeraj Sharma. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Building Heritage. Creating Opportunities.</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/about"
              className="hover:text-[#C8A96B] transition-colors"
            >
              Overview
            </Link>
            <span>•</span>
            <Link
              to="/contact"
              className="hover:text-[#C8A96B] transition-colors"
            >
              Privacy & Enquiries
            </Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-[#C8A96B] transition-colors py-1 px-2 rounded border border-white/10 hover:border-[#C8A96B]/50"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
