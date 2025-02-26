"use client";

import { motion } from "framer-motion";
import { LucideIcon, Receipt } from "lucide-react";
import React from "react";

interface SectionDividerProps {
  title: string;
  highlightedText: string;
  description: string;
  Icon: LucideIcon;
}

export function SectionDivider({ title, highlightedText, description, Icon }: SectionDividerProps) {
  return (
    <div className="py-16 bg-gradient-to-r from-white via-gray-100 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />

      <div className="max-w-6xl mx-auto px-4 relative">
        {React.cloneElement(Icon, { className: "w-32 h-32 absolute left-1/2 -translate-x-1/2 text-blue-100/50" })}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            {title} <span className="text-blue-600">{highlightedText}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </motion.div>
      </div>
    </div>
  );
}
