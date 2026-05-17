"use client";

import { mediaItems } from "@/config/contactGallery"
import { motion } from "framer-motion";

export default function AboutGallery() {
  return (
    <section className="w-full py-20 px-2 md:px-13">

      {/* 📱 Mobile */}
      <div className="columns-2 gap-3 md:hidden">
        {mediaItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="mb-3 break-inside-avoid"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <img
              src={item.src}
              loading="lazy"
              className="w-full h-auto object-cover rounded-xl"
            />
          </motion.div>
        ))}
      </div>

      {/* 💻 Desktop */}
      <div className="hidden md:block columns-3 gap-4">
        {mediaItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="mb-4 break-inside-avoid"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.09,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <img
              src={item.src}
              loading="lazy"
              className="w-full h-auto object-cover rounded-xl hover:scale-[1.03] transition duration-500"
            />
          </motion.div>
        ))}
      </div>

    </section>
  );
}