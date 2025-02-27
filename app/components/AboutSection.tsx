"use client";
import { Coffee, Award, LineChart, Lightbulb } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Lightbulb,
    count: "560+",
    label: "Successfully Project",
  },
  {
    icon: LineChart,
    count: "560+",
    label: "Successfully Project",
  },
  {
    icon: Award,
    count: "560+",
    label: "Successfully Project",
  },
  {
    icon: Coffee,
    count: "560+",
    label: "Successfully Project",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function AboutSection() {
  return (
    <section className="relative bg-[#1B224B]  overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96">
        <div className="absolute w-full h-full rounded-full bg-[#8BC34A] opacity-20 blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-20 w-32 h-32">
        <div className="absolute w-full h-full rounded-full bg-blue-500 opacity-20 blur-2xl" />
      </div>
      <div className="absolute right-40 top-40 opacity-10">
        <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-current">
          <path d="M10,50 Q25,25 50,50 T90,50" fill="none" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      </div>

      <MaxWidthWrapper className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h3 className="text-yellow-400 font-semibold tracking-wide">ABOUT US</h3>
          <h2 className="text-white text-4xl md:text-5xl font-bold">We have over 10 years experience!</h2>
          <p className="text-gray-300 max-w-3xl font-semibold mx-auto text-lg">
            ABG is an inter-regional software house and digital marketing consulting agency based in Cairo, Egypt. In
            cooperated in 2015, ABG is well established credible, and integrated company
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={item} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-3xl font-bold mb-2">{stat.count}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
