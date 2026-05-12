"use client"

import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <section className="w-full md:px-12">
      <h2 className="sr-only">Contact Information</h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="flex flex-row md:flex-col gap-18 md:gap-6"
      >

        {/* Instagram */}
        <div className="flex flex-col items-start">
          <h3 className="text-[14px] md:text-[16px] font-semibold mb-1">Instagram</h3>

          <div className="flex flex-col">
            <a
              href="https://instagram.com/unknwn.films"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 text-[11px] md:text-[13px]"
            >
              unknwn.films
            </a>

            <a
              href="https://instagram.com/unknwn.weddingfilms"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 text-[11px] md:text-[13px]"
            >
              unknwn.weddingfilms
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col items-start">
          <h3 className="text-[14px] md:text-[16px] font-semibold mb-1">Email</h3>

          <a
            href="mailto:client@email.com"
            className="opacity-70 text-[11px] md:text-[13px]"
          >
            contact@unknwnfilms.com
          </a>
        </div>

      </motion.div>
    </section>
  );
}