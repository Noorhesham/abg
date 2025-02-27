"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

export function BusinessConsultant() {
  const t = useTranslations("business");

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
            <span className="text-yellow-400 font-semibold tracking-wider">{t("subtitle")}</span>
            <h2 className="text-4xl font-bold text-white">{t("title")}</h2>
            <p className="text-gray-400 leading-relaxed max-w-xl">{t("description")}</p>
            <Button variant="default" className="group bg-blue-600 hover:bg-blue-700">
              {t("button")}
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
              <img src="/business (1).png" alt="Business Consultant" className="w-full h-96 object-contain" />
            </motion.div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
