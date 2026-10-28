import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 mb-3 px-3 py-1 text-[11px] font-semibold tracking-[0.25em] uppercase rounded-full ${
            isDark
              ? "bg-[#C8A96B]/15 text-[#C8A96B] border border-[#C8A96B]/30"
              : "bg-[#081B33]/5 text-[#1557A6] border border-[#1557A6]/20"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]"></span>
          <span>{eyebrow}</span>
        </div>
      )}

      {title && (
        <h2
          className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
            isDark ? "text-white" : "text-[#081B33]"
          }`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed ${
            isDark ? "text-gray-300" : "text-[#536174]"
          } ${isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
        >
          {subtitle}
        </p>
      )}

      <div
        className={`mt-5 flex items-center gap-1.5 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-[2px] w-8 bg-[#C8A96B]"></span>
        <span className="h-[2px] w-2 bg-[#1557A6]"></span>
      </div>
    </div>
  );
}
