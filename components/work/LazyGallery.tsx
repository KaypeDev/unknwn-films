"use client";

import { useEffect, useRef, useState } from "react";
import { StaticImageData } from "next/image";

interface LazyGalleryProps {
  videoUrl: string;
  poster?: string | StaticImageData;
  title?: string;
  isActive: boolean;
  setActive: () => void;
}

export default function LazyGallery({
  videoUrl,
  poster,
  title,
  isActive,
  setActive,
}: LazyGalleryProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // detect mobile
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // intersection observer (for mobile active tracking)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setActive();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [setActive]);

  // 🔥 playback logic (HYBRID FIX)
  useEffect(() => {
    if (!videoRef.current) return;

    const shouldPlay =
      (isMobile && isActive) || (!isMobile && isHovered);

    if (shouldPlay) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive, isHovered, isMobile]);

  return (
    <>
      {/* TILE */}
      <div
        ref={ref}
        className="relative w-full overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative w-full h-[375px] lg:h-[400px] xl:h-[425px] 2xl:h-[550px]">

          {/* Poster */}
          <img
            src={typeof poster === "string" ? poster : poster?.src}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-opacity duration-500
              ${(isMobile ? isActive : isHovered) ? "opacity-0" : "opacity-100"}
            `}
          />

          {/* Video */}
          {isVisible && (
            <video
              ref={videoRef}
              src={videoUrl}
              muted
              loop
              playsInline
              preload="auto"
              className={`
                absolute inset-0 w-full h-full object-cover
                transition-opacity duration-500
                ${(isMobile ? isActive : isHovered) ? "opacity-100" : "opacity-0"}
              `}
            />
          )}
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-[90%] h-[80%]">
            <video
              src={videoUrl}
              autoPlay
              controls
              className="w-full h-full object-contain bg-black"
            />
          </div>

          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}