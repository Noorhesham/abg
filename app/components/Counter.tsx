"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const stats = [
  { value: 320, key: "pageFollowers", color: "bg-[#2563EB]" },
  { value: 6.5, key: "groupMembers", color: "bg-transparent" },
];

const Counter = ({ className }: any) => {
  const t = useTranslations("counter.stats");
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts((prev) => prev.map((count, i) => (i === index ? current : count)));
        }, duration / steps);
        return () => clearInterval(timer);
      });
    }
  }, [isVisible]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        onViewportEnter={() => setIsVisible(true)}
        viewport={{ once: true }}
        className={`${className} text-black container mx-auto px-4 py-16 text-center`}
      >
        <div className="inline-flex items-stretch gap-8">
          {stats.map((stat, index) => (
            <div key={stat.key} className="flex flex-col items-center">
              <div className={`px-4 py-2 ${stat.color} rounded-lg`}>
                <span className="text-4xl font-bold">
                  +{counts[index].toFixed(stat.value % 1 === 0 ? 0 : 1)}
                  {t(`${stat.key}.suffix`)}
                </span>
              </div>
              {index < stats.length - 1 && <div className="h-12 w-px bg-white/20 mx-8" />}
              <div className="text-lg mt-auto">{t(`${stat.key}.label`)}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Counter;
