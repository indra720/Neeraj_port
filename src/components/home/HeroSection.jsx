import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Award,
  Globe,
  Building,
  Sparkles,
} from "lucide-react";
import { profileData } from "../../data/profileData";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-[#081B33] text-white pt-24 sm:pt-28 pb-16 lg:pb-24 flex items-center overflow-hidden">
      {/* Subtle luxury architectural background texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#C8A96B_1.5px,transparent_1.5px)] [background-size:32px_32px]"></div>

      {/* Decorative ambient gradient glows */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-[#1557A6]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#C8A96B]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle architectural vertical lines */}
      <div className="absolute inset-y-0 left-12 md:left-24 w-px bg-white/[0.04] pointer-events-none hidden sm:block"></div>
      <div className="absolute inset-y-0 right-12 md:right-24 w-px bg-white/[0.04] pointer-events-none hidden sm:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Story */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left pt-4 lg:pt-0">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A96B]/15 border border-[#C8A96B]/30 text-[#C8A96B] text-[11px] font-semibold tracking-[0.25em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B] animate-pulse"></span>
              <span>ENTREPRENEUR • BUSINESS LEADER</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.12]">
                Building Heritage. <br />
                <span className="gold-gradient-text italic font-normal">
                  Creating Opportunities.
                </span>
              </h1>

              <p className="font-serif text-lg sm:text-xl md:text-2xl text-gray-200 font-normal leading-relaxed italic max-w-2xl border-l-2 border-[#C8A96B] pl-4 sm:pl-5 my-4">
                "{profileData.supportingHeadline}"
              </p>
            </div>

            {/* Narrative Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl font-light">
              {profileData.shortBio}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/journey"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-sm bg-gradient-to-r from-[#C8A96B] to-[#B39352] text-[#081B33] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-gold-glow hover:brightness-105 transition-all duration-300 group"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/business"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm border border-[#C8A96B]/40 hover:border-[#C8A96B] bg-white/[0.03] hover:bg-white/[0.08] text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300"
              >
                <span>Discover Businesses</span>
              </Link>
            </div>

            {/* Credibility highlights */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#C8A96B]">
                  25+
                </p>
                <p className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  11
                </p>
                <p className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                  Business Verticals
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#C8A96B]">
                  200
                </p>
                <p className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                  Bigha Flagship
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  GCC & IN
                </p>
                <p className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                  Global Presence
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Gold frame halo accent */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-2xl bg-gradient-to-tr from-[#C8A96B]/30 via-transparent to-[#1557A6]/30 blur-xl opacity-75"></div>

              {/* Structural Frame */}
              <div className="relative rounded-xl overflow-hidden border border-[#C8A96B]/30 bg-gradient-to-b from-[#0E2B52]/60 to-[#081B33]/90 shadow-2xl p-2 sm:p-3">
                {/* Background architectural geometric lines within frame */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#C8A96B_1px,transparent_1px),linear-gradient(-45deg,#C8A96B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

                <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-[#102A4C] via-[#081B33] to-[#040D1A] flex items-end justify-center pt-6">
                  {/* Neeraj Sharma's Verified Cutout Portrait */}
                  <img
                    src={profileData.portrait}
                    alt="Neeraj Sharma — Entrepreneur & Business Leader"
                    className="w-full h-auto max-h-[520px] sm:max-h-[580px] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-[1.02]"
                  />

                  {/* Subtle lower gradient overlay for seamless composition */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#081B33] via-[#081B33]/70 to-transparent"></div>

                  {/* Prestige Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-[#081B33]/90 backdrop-blur-md border border-[#C8A96B]/40 rounded-lg p-3 sm:p-3.5 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
                          NEERAJ SHARMA
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#C8A96B] font-medium tracking-wider">
                          Joy Hospitality Group • Rajasthan & Dubai
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#C8A96B]/20 border border-[#C8A96B] flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-[#C8A96B]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Heritage Origin Tag */}
              <div className="mt-3 flex items-center justify-between px-2 text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Karauli & Hindaun City Roots
                </span>
                <span className="text-[#C8A96B]">Est. 1998</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 lg:mt-16 text-center flex flex-col items-center justify-center">
          <a
            href="#editorial-intro"
            className="group inline-flex flex-col items-center text-xs text-gray-400 hover:text-[#C8A96B] transition-colors"
            aria-label="Scroll to introduction"
          >
            <span className="tracking-[0.25em] uppercase text-[10px] mb-1 group-hover:tracking-[0.3em] transition-all">
              Discover Profile
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#C8A96B]" />
          </a>
        </div>
      </div>
    </section>
  );
}
