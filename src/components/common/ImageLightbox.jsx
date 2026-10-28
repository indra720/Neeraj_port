import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export default function ImageLightbox({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-all duration-300"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image container */}
      <div
        className="max-w-5xl max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-md border border-[#C8A96B]/30 shadow-2xl max-h-[72vh]">
          <img
            src={currentImage.src}
            alt={currentImage.title || "Portfolio Gallery Image"}
            className="w-full h-auto max-h-[72vh] object-contain select-none"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-white max-w-2xl px-4">
          <div className="flex items-center justify-center gap-3 text-xs text-[#C8A96B] font-semibold tracking-wider uppercase mb-1">
            <span>{currentImage.category}</span>
            {currentImage.location && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {currentImage.location}
                </span>
              </>
            )}
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold">
            {currentImage.title}
          </h3>
          {currentImage.description && (
            <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
              {currentImage.description}
            </p>
          )}
          <p className="text-[11px] text-gray-400 mt-2">
            Image {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}
