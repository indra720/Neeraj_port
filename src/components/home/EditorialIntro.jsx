import React from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  MapPin,
  History,
  Globe2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { profileData } from "../../data/profileData";

export default function EditorialIntro() {
  return (
    <section
      id="editorial-intro"
      className="py-20 sm:py-28 bg-[#F8F7F3] relative overflow-hidden"
    >
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96B]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1557A6]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="BIOGRAPHY & HERITAGE"
          title="Rooted in Craftsmanship. Built on Vision."
          subtitle="From the sacred stone quarries of Rajasthan to international boardrooms in Dubai and back to build India's future."
          align="center"
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Architectural Composition */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Architectural Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Rajasthan stone craftsmanship & classical architecture"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#C8A96B] block">
                    Architectural Lineage
                  </span>
                  <p className="font-serif text-base font-semibold">
                    Karauli Sandstone & Sacred Temple Masonry
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#081B33] text-white p-5 rounded-lg border border-[#C8A96B]/30 shadow-2xl max-w-[240px] sm:max-w-[280px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-[#C8A96B]/20 text-[#C8A96B]">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-white">
                      Dubai & Middle East
                    </h4>
                    <p className="text-[10px] text-gray-300">
                      2003 – 2013 Global Trade
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  A decade of cross-border operations connecting Indian
                  artisanal stone with Gulf infrastructure.
                </p>
              </div>

              {/* Decorative Corner Badge */}
              <div className="absolute -top-4 -left-4 bg-[#C8A96B] text-[#081B33] px-3.5 py-1.5 rounded-sm font-bold text-xs uppercase tracking-wider shadow-lg">
                Since 1998
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="border-l-4 border-[#C8A96B] pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1557A6]">
                The Entrepreneur's Foundation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#081B33] leading-snug">
                Where Generational Skill Meets Global Ambition
              </h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#536174] leading-relaxed">
              <p>
                Neeraj Sharma’s entrepreneurial story is anchored in Hindaun
                City, nestled within Rajasthan’s historic Karauli district. Born
                into a family deeply connected to natural stone craftsmanship
                and structural construction, he cultivated an early reverence
                for the raw endurance and sacred grace of Indian sandstone.
              </p>
              <p>
                Beginning his independent entrepreneurial journey in{" "}
                <strong>1998</strong>, he established robust foundations in
                natural stone export and traditional temple architecture,
                upholding the exacting geometric disciplines of Shilpa Shastra
                while developing direct quarry and artisan partnerships.
              </p>
              <p>
                In <strong>2003</strong>, driven by an ambition to bring India’s
                stonecraft to the global stage, he relocated to{" "}
                <strong>Dubai</strong>. Over the next decade across the UAE,
                Bahrain, and Saudi Arabia, he expanded cross-border trade,
                mastered complex commercial logistics, and participated in
                material supply corridors for some of the Middle East’s most
                ambitious architectural developments.
              </p>
              <p>
                Returning to India in <strong>2013</strong>, he spearheaded a
                strategic diversification from <strong>2014 onwards</strong>{" "}
                into real estate and luxury destination hospitality—founding the
                Joy Adventure Group and laying the groundwork for a pan-Indian
                network of integrated resort destinations.
              </p>
            </div>

            {/* Credibility Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-md bg-white border border-[#C8A96B]/20 shadow-sm">
                <div className="flex items-center gap-2.5 text-[#081B33] font-bold text-sm mb-1">
                  <MapPin className="w-4 h-4 text-[#C8A96B]" />
                  <span>Rajasthan Heritage</span>
                </div>
                <p className="text-xs text-[#536174]">
                  Karauli District & Hindaun City artisanal heritage and direct
                  quarry alliances.
                </p>
              </div>

              <div className="p-4 rounded-md bg-white border border-[#C8A96B]/20 shadow-sm">
                <div className="flex items-center gap-2.5 text-[#081B33] font-bold text-sm mb-1">
                  <Compass className="w-4 h-4 text-[#1557A6]" />
                  <span>Integrated Vision</span>
                </div>
                <p className="text-xs text-[#536174]">
                  Harmonizing heritage preservation, luxury hospitality, and
                  regional economic prosperity.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#081B33] hover:text-[#1557A6] group transition-colors"
              >
                <span>Read Complete Biography</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C8A96B]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
