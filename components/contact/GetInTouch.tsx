"use client";

import { motion } from "framer-motion";

export default function GetInTouch() {
  return (
    <section className="relative flex items-center justify-center mt-5 md:px-15">

      <h2 className="sr-only">Get In Touch</h2>

      <div className="relative w-full h-[175px] md:h-[275px] flex items-center justify-center">

        {/* GET IN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute text-white text-[70px] md:text-[120px] font-bold top-2 md:top-2 left-0 md:left-12 z-20"
        >
          GET IN
        </motion.div>

        {/* TOUCH */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute text-[#444141] text-[90px] md:text-[150px] font-bold top-14 md:top-16 left-0 md:left-80 z-5"
        >
          TOUCH
        </motion.div>

      </div>
    </section>
  );
}