import React from "react";
import { Layers, Globe, TrendingUp, Users, Quote } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { profileData } from "../../data/profileData";

export default function BusinessPhilosophy() {
  const getPrincipleIcon = (iconName) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="w-6 h-6 text-[#C8A96B]" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-[#1557A6]" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-[#C8A96B]" />;
      case "Users":
        return <Users className="w-6 h-6 text-[#1557A6]" />;
      default:
        return <Layers className="w-6 h-6 text-[#C8A96B]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#081B33] text-white relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="CORE VALUES & STRATEGY"
          title="Business Philosophy & Vision"
          subtitle="Four foundational pillars guiding every project, from sustainable quarrying to world-class hospitality."
          align="center"
          theme="dark"
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {profileData.principles.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-lg bg-[#0B2240] border border-[#C8A96B]/20 hover:border-[#C8A96B]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#081B33] border border-[#C8A96B]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getPrincipleIcon(item.icon)}
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#C8A96B]">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C8A96B] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                <span className="uppercase tracking-wider">Ethical Pillar</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Strong Closing Statement Banner */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto text-center p-8 sm:p-12 rounded-xl bg-gradient-to-r from-[#0E2B52] via-[#0B2240] to-[#0E2B52] border border-[#C8A96B]/40 shadow-2xl relative">
          <Quote className="w-10 h-10 text-[#C8A96B]/20 mx-auto mb-3" />

          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8A96B] block mb-3">
            Guiding Motto
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide leading-snug">
            "{profileData.closingStatement}"
          </blockquote>

          <p className="text-xs sm:text-sm text-gray-300 mt-4 max-w-xl mx-auto">
            Honoring generational Rajasthani craftsmanship while engineering
            scalable, modern enterprises that generate enduring socio-economic
            value.
          </p>
        </div>
      </div>
    </section>
  );
}
