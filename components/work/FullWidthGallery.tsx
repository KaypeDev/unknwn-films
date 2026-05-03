"use client";

import { useState } from "react";
import { gallery } from "../../config/galleryLink";
import LazyGallery from "./LazyGallery";

export default function FullWidthGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen">
      {gallery.map(({ videoUrl, poster, title }, index) => (
        <div
          key={index}
          className="relative w-full group"
        >
          <LazyGallery
            videoUrl={videoUrl}
            poster={poster}
            title={title}
            isActive={activeIndex === index}
            setActive={() => setActiveIndex(index)}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />

          {/* Title */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-white text-[15px] font-semibold uppercase transition-opacity duration-300 group-hover:opacity-0">
              {title}
            </h2>
          </div>
        </div>
      ))}
    </section>
  );
}