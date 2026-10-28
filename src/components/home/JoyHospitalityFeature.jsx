import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Palmtree,
  Sparkles,
  Building,
  Info,
} from "lucide-react";
import { profileData } from "../../data/profileData";

export default function JoyHospitalityFeature() {
  const { joyGroup } = profileData;

  return (
    <section className="py-20 sm:py-28 bg-[#051224] text-white relative overflow-hidden border-y border-[#C8A96B]/20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-[#1557A6]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Label */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A96B]/20 border border-[#C8A96B]/40 text-[#C8A96B] text-[11px] font-semibold tracking-[0.25em] uppercase">
            <Palmtree className="w-3.5 h-3.5 text-[#C8A96B]" />
            <span>FEATURED DESTINATION PLATFORM</span>
          </div>
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Joy Hospitality Group
          </h2>
          <p className="mt-3 font-serif text-lg sm:text-xl text-[#C8A96B] italic">
            "{joyGroup.headline}"
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            {joyGroup.description}
          </p>
        </div>

        {/* Featured Showcase Box */}
        <div className="bg-[#081B33] rounded-xl border border-[#C8A96B]/30 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Panel */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] bg-[#051224]">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
                alt="200-Bigha Flagship Joy Adventure Resort"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-transparent to-black/30"></div>

              {/* Badge overlay */}
              <div className="absolute top-5 left-5 bg-[#081B33]/90 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-[#C8A96B]/40">
                <span className="text-[10px] text-[#C8A96B] font-bold tracking-widest uppercase block">
                  Flagship Destination
                </span>
                <span className="text-white text-xs font-semibold">
                  Rajasthan, India
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-serif text-lg sm:text-xl font-bold">
                  200-Bigha Integrated Eco-Adventure & Heritage Resort
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  Combining Rajasthan sandstone architecture with modern
                  experiential tourism.
                </p>
              </div>
            </div>

            {/* Content & Metrics Panel */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#C8A96B] font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Profile-Reported Project Highlights</span>
                </div>

                <div className="space-y-3">
                  {joyGroup.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C8A96B] flex-shrink-0 mt-1" />
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visually Attractive Profile-Reported Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-6 border-t border-white/10">
                {joyGroup.reportedMetrics.slice(0, 3).map((metric, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-[#051224] border border-[#C8A96B]/20 text-center"
                  >
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                      {metric.label}
                    </span>
                    <div className="flex items-baseline justify-center gap-1 my-0.5">
                      <span className="font-serif text-xl sm:text-2xl font-bold text-[#C8A96B]">
                        {metric.value}
                      </span>
                      <span className="text-xs text-white/80 font-medium">
                        {metric.unit}
                      </span>
                    </div>
                    <span className="text-[9px] text-gray-400 block truncate">
                      {metric.sub}
                    </span>
                  </div>
                ))}

                {joyGroup.reportedMetrics.slice(3, 5).map((metric, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-[#051224] border border-[#C8A96B]/20 text-center col-span-1 sm:col-span-1"
                  >
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                      {metric.label}
                    </span>
                    <div className="flex items-baseline justify-center gap-1 my-0.5">
                      <span className="font-serif text-xl sm:text-2xl font-bold text-[#C8A96B]">
                        {metric.value}
                      </span>
                      <span className="text-xs text-white/80 font-medium">
                        {metric.unit}
                      </span>
                    </div>
                    <span className="text-[9px] text-gray-400 block truncate">
                      {metric.sub}
                    </span>
                  </div>
                ))}

                <div className="p-3 rounded-lg bg-[#0E2B52]/50 border border-[#1557A6]/40 text-center col-span-2 sm:col-span-1 flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-wider text-[#C8A96B] font-bold block">
                    Pan-India Scale
                  </span>
                  <span className="text-xs text-white font-medium mt-1">
                    Integrated Multi-Sector
                  </span>
                </div>
              </div>

              {/* Strict Content Accuracy Note */}
              <div className="flex items-start gap-2 p-3 rounded bg-white/[0.03] border border-white/10 text-[11px] text-gray-400">
                <Info className="w-3.5 h-3.5 text-[#C8A96B] flex-shrink-0 mt-0.5" />
                <p>
                  *Figures reflect reported project progress (~70% completion)
                  and projected asset valuations (₹300+ Cr) as documented in the
                  professional profile.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link
                  to="/projects/joy-adventure-flagship-resort"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-gradient-to-r from-[#C8A96B] to-[#B39352] text-[#081B33] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-gold-glow transition-all"
                >
                  <span>Explore Hospitality Vision</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm border border-white/20 hover:border-[#C8A96B] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Resort Partnership Enquiries</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
