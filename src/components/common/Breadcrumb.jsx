import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav
      className="flex items-center space-x-2 text-xs text-gray-400 py-3"
      aria-label="Breadcrumb"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1 hover:text-[#C8A96B] transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-[#C8A96B]/60 flex-shrink-0" />
            {isLast || !item.path ? (
              <span className="text-[#C8A96B] font-medium truncate max-w-[200px] sm:max-w-md">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-[#C8A96B] transition-colors truncate max-w-[150px]"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
