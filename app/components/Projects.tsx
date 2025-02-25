"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const projects = [
  {
    id: 1,
    title: "News Portal",
    image: "/project1.jpg",
    type: "website",
    gridArea: "top-left",
  },
  {
    id: 2,
    title: "E-commerce App",
    image: "/project2.jpg",
    type: "mobile",
    gridArea: "top-right",
  },
  {
    id: 3,
    title: "Logistics Platform",
    image: "/project3.jpg",
    type: "responsive",
    gridArea: "bottom-left",
  },
  {
    id: 4,
    title: "Delivery App",
    imageLeft: "/project4-left.jpg",
    imageRight: "/project4-right.jpg",
    type: "mobile",
    gridArea: "bottom-right",
  },
];

export function ProjectsSection() {
  return (
    <section className="bg-[#1E2756] py-20">
      <MaxWidthWrapper noPadding className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="h-[1px] bg-gray-700 flex-1" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center"
          >
            Our Projects
          </motion.h2>
          <div className="h-[1px] bg-gray-700 flex-1" />
        </div>

        <div className="grid grid-cols-12 gap-6 mb-12">
          {/* Top Row - Left (Wide Website) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-6 aspect-[16/9] rounded-2xl overflow-hidden bg-white/5"
          >
            <img
              src={projects[0].image || "/placeholder.svg"}
              alt={projects[0].title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Top Row - Right (Mobile App) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-6 aspect-[16/9] rounded-2xl overflow-hidden bg-[#E3F2F9] p-8 relative"
          >
            <div className="absolute inset-0 bg-[url('/blob-shape.svg')] bg-no-repeat bg-center opacity-50" />
            <div className="relative z-10 h-full flex items-center justify-center">
              <img
                src={projects[1].image || "/placeholder.svg"}
                alt={projects[1].title}
                className="h-full w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Bottom Row - Left (Responsive Platform) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-6 aspect-[16/9] rounded-2xl overflow-hidden bg-white/5 p-4"
          >
            <div className="relative h-full">
              <img
                src={projects[2].image || "/placeholder.svg"}
                alt={projects[2].title}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Bottom Row - Right (Split Mobile Apps) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-6 aspect-[16/9] rounded-2xl overflow-hidden grid grid-cols-2 gap-2"
          >
            <div className="bg-[#2196F3] rounded-xl p-4 flex items-center justify-center">
              <img
                src={projects[3].imageLeft || "/placeholder.svg"}
                alt={`${projects[3].title} Left`}
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="bg-[#8BC34A] rounded-xl p-4 flex items-center justify-center">
              <img
                src={projects[3].imageRight || "/placeholder.svg"}
                alt={`${projects[3].title} Right`}
                className="h-full w-auto object-contain"
              />
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Explore more
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
