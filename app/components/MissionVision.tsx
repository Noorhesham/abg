"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useTranslations } from "next-intl";

const sections = [{ key: "mission" }, { key: "vision" }, { key: "value" }];

const circleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function MissionVision() {
  const t = useTranslations("mission.sections");

  return (
    <MaxWidthWrapper className="">
      <div className="container mx-auto">
        <div className="space-y-24">
          {sections.map((section, index) => (
            <motion.div
              key={section.key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row items-start gap-12"
            >
              {/* Circles Animation */}
              <div className="relative w-32 h-32 flex-shrink-0">
                {[0, 1, 2].map((circle) => (
                  <motion.div
                    key={circle}
                    custom={circle}
                    variants={circleVariants}
                    className="absolute inset-0 border-2 border-yellow-400 rounded-full"
                    style={{
                      scale: 1 - circle * 0.2,
                      opacity: 1 - circle * 0.2,
                    }}
                  />
                ))}
                <motion.div
                  initial={{ rotate: -90, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Plus className="w-8 h-8 text-yellow-400" />
                </motion.div>
                <motion.h3
                  variants={contentVariants}
                  className="absolute -bottom-14 text-center left-0 text-xl font-bold text-[#1B224B]"
                >
                  {t(`${section.key}.title`)}
                </motion.h3>
              </div>

              {/* Content */}
              <motion.div variants={contentVariants} className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold text-[#1B224B]">{t(`${section.key}.heading`)}</h2>
                <p className="text-gray-600 leading-relaxed">{t(`${section.key}.content`)}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
