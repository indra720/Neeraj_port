import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Phone,
  ShieldCheck,
  MapPin,
  Building,
  Globe,
} from "lucide-react";

export default function QuickContactCTA() {
  return (
    <section className="py-20 sm:py-24 bg-[#081B33] text-white relative overflow-hidden border-t border-[#C8A96B]/30">
      {/* Background texture & lighting */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#1557A6]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-2xl bg-gradient-to-r from-[#0B2240] via-[#081B33] to-[#0E2B52] border border-[#C8A96B]/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A96B]/15 text-[#C8A96B] text-[11px] font-semibold tracking-[0.25em] uppercase border border-[#C8A96B]/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CONFIDENTIAL PROFESSIONAL ENGAGEMENT</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Initiate a Strategic Business Dialogue
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl font-light">
                Whether exploring strategic real estate syndication, resort
                co-development, international commodity trade, or athletic
                initiatives, Neeraj Sharma welcomes discussions with aligned
                institutional and private stakeholders.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A96B]" />
                  Rajasthan & Dubai Hubs
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#C8A96B]" />
                  Joy Hospitality Group
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#C8A96B]" />
                  Cross-Border Trade
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-gradient-to-r from-[#C8A96B] to-[#B39352] text-[#081B33] font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-gold-glow hover:brightness-105 transition-all text-center"
              >
                <span>Submit Business Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/business"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm border border-white/20 hover:border-[#C8A96B] text-white font-medium text-xs uppercase tracking-wider transition-colors text-center"
              >
                <span>Browse All 11 Verticals</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
