"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";


export function BusinessConsultant() {
  return (
    <div className="relative bg-[#1E2756] overflow-hidden">
      {/* Stats Section */}

      {/* Main Content Section */}
      <MaxWidthWrapper className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-yellow-400 font-semibold tracking-wider">SERVICES</span>
            <h2 className="text-4xl font-bold text-white">Business Consultant</h2>
            <p className="text-gray-400 leading-relaxed max-w-xl">
              For us, at A.B.G we believe in our customers and clients&apos; succession and we make sure we reach this
              succession hand in hand. So one of our mission is to keep your business safe and to avoid any risks along
              the way by studying all your strengths and weakness points and providing you with studied strategies and
              professional advice for your moves in the market.
            </p>
            <Button variant="default" className="group bg-blue-600 hover:bg-blue-700">
              Explore more
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 grid grid-cols-3 gap-4 -rotate-12 scale-125">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full aspect-square rounded-full bg-white/10"
                />
              ))}
            </div>

            {/* Consultant Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="/business (1).png"
                alt="Business Consultant"
                className="w-full h-96 object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
