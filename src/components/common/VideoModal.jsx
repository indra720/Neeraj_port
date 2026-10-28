import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function VideoModal({ isOpen, onClose, videoUrl, title }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#081B33] rounded-lg border border-[#C8A96B]/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#051224]">
          <h3 className="font-serif text-lg font-bold text-white truncate pr-4">
            {title || "Media Spotlight"}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative pt-[56.25%] bg-black">
          {videoUrl ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={videoUrl}
              title={title || "Video Player"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Media Stream Loading...
            </div>
          )}
        </div>

        <div className="px-6 py-3 bg-[#081B33] text-xs text-gray-400 border-t border-white/5 flex items-center justify-between">
          <span>Official Media Archive • Neeraj Sharma</span>
          <span className="text-[#C8A96B]">
            Press ESC or click outside to close
          </span>
        </div>
      </div>
    </div>
  );
}
