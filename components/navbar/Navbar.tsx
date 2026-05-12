"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/config/navLinks";
import { socialLinks } from "@/config/socialLinks";
import Logo from "@/components/navbar/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoToggled, setLogoToggled] = useState(false);

  const handleLogoClick = () => {
    setLogoToggled(true);
    setTimeout(() => setLogoToggled(false), 500);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-3 md:py-2">
      <div className="max-w-[1440px] mx-auto px-3 md:px-10 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/">
          <Logo logoToggled={logoToggled} onClick={handleLogoClick} />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-6 font-semibold text-[14px] opacity-90">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -1.3, scale: 1.05 }}
              whileTap={{ y: 0.5 }}
            >
              <Link href={link.path}>{link.name}</Link>
            </motion.div>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          onClick={() => setIsOpen(true)}
          className="text-[40px] md:text-[40px] lg:text-[50px] font-black md:hidden"
          aria-label="Open Menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85 }}
        >
          ☰
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, -0.05, 0.95] }}
            className="fixed inset-0 bg-black text-white z-50 flex flex-col overflow-hidden"
          >
            {/* TOP BAR */}
            <div className="max-w-[1440px] w-full mx-auto flex flex-col">
              <div className="flex justify-between items-center mt-7 px-18">

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Logo logoToggled={logoToggled} onClick={handleLogoClick} />
                  </Link>
                </motion.div>

                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-[30px] md:text-[50px] font-black"
                  aria-label="Close Menu"
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  X
                </motion.button>
              </div>
            </div>

            {/* LINKS */}
            <div className="h-screen flex flex-col items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="flex flex-col items-start gap-5 font-extrabold text-[40px] md:text-[60px] md:ml-90 md:mb-10"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 20 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    whileTap={{ x: 15 }}
                  >
                    <Link href={link.path} onClick={() => setIsOpen(false)}>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* SOCIALS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                className="mt-10 flex justify-center gap-5 md:gap-40"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex mt-10 items-center gap-2 text-white font-semibold text-[13px] md:text-[18px] opacity-80"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.label}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}