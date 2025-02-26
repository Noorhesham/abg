"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Palette, Brain, TestTube2, BarChart3 } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const services = [
  { icon: Smartphone, label: "Mobile Development" },
  { icon: Globe, label: "Website Development" },
  { icon: Palette, label: "UI/UX" },
  { icon: Brain, label: "AI/BI" },
  { icon: TestTube2, label: "Testing" },
  { icon: BarChart3, label: "Data Analysis" },
];

export function ServicesSection() {
  return (
    <section className="bg-[#1E2756] ">
      <MaxWidthWrapper className="container mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-yellow-400 text-lg font-semibold"
        >
          SERVICES
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-white mt-2 mb-4"
        >
          Software Development
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Bring your business to customers within arm's reach. We create mobile apps with the latest technologies.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <motion.button
              key={service.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 3) }}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
            >
              <service.icon className="w-5 h-5 text-gray-300" />
              <span className="text-gray-300 text-sm">{service.label}</span>
            </motion.button>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
