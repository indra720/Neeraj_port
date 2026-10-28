import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Compass } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex items-center justify-center bg-[#F8F7F3] px-4">
      <div className="max-w-md w-full text-center p-8 sm:p-10 bg-white rounded-xl border border-[#C8A96B]/30 shadow-xl space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#081B33] text-[#C8A96B] mx-auto flex items-center justify-center shadow-lg">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1557A6]">
            ERROR 404
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#081B33]">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#536174] leading-relaxed">
            The destination you are seeking is either relocated or does not
            exist within the portfolio directory.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 py-3 rounded-sm bg-[#081B33] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#0E2B52] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/business"
            className="inline-flex items-center justify-center gap-2 py-2.5 rounded-sm border border-gray-300 text-[#081B33] font-medium text-xs uppercase tracking-wider hover:bg-gray-50 transition-colors"
          >
            <span>Browse Business Verticals</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
