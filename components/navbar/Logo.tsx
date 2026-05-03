"use client";

import { motion } from "framer-motion";

type LogoProps = {
  logoToggled: boolean;
  onClick?: () => void;
};

export default function Logo({ logoToggled, onClick }: LogoProps) {
  return (
    <motion.div
      className="relative block w-fit"
      onClick={onClick}
      animate={logoToggled ? "hover" : "rest"}
      whileHover="hover"
    >
      {/* TEXT LOGO */}
      <motion.img
        src="/img/textLogo.png"
        alt="text logo"
        className="max-h-[80px] w-auto"
        variants={{
          rest: { opacity: 1, scale: 1, filter: "blur(0px)" },
          hover: { opacity: 0, scale: 0.85, filter: "blur(6px)" },
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* ICON LOGO */}
      <motion.img
        src="/img/iconLogo.png"
        alt="icon logo"
        className="absolute top-0 left-0 max-h-[60px] w-auto"
        variants={{
          rest: {
            opacity: 0,
            scale: 0.8,
            x: 0,
            y: 4,
            filter: "blur(6px)",
          },
          hover: {
            opacity: 1,
            scale: 1,
            x: 20,
            y: 8,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      />
    </motion.div>
  );
}