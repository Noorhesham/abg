"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import React from "react";
import { useState } from "react";
import { menuItems } from "./NavContainer";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const PhoneNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  return (
    <div>
      <Menu className="w-8 h-8 text-blue-400 hover:text-blue-200 duration-200" onClick={() => setIsOpen(true)} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-screen h-screen bg-black/90 z-50"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4"
            >
              <X className="w-8 h-8 text-white hover:text-blue-200 duration-200" />
            </motion.button>
            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="text-2xl text-white font-semibold hover:text-blue-200 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(`nav.${item.label}`)}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhoneNav;
