"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { useTranslations } from "next-intl";

const categories = [
  { id: "all", label: "all" },
  { id: "digital-marketing", label: "digitalMarketing" },
  { id: "development", label: "development" },
  { id: "qa", label: "qa" },
  { id: "business", label: "business" },
];

export default function CareersSection() {
  const t = useTranslations("careers");
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="relative">
      {/* Header with decorative elements */}
      <div className="relative bg-[#1B224B] py-24 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96">
          <div className="absolute w-full h-full rounded-full bg-[#8BC34A] opacity-20 blur-3xl" />
        </div>
        <div className="absolute bottom-0 right-20 w-32 h-32">
          <div className="absolute w-full h-full rounded-full bg-blue-500 opacity-20 blur-2xl" />
        </div>

        <MaxWidthWrapper className="relative text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-yellow-400 text-4xl font-bold mb-4"
          >
            {t("title")}
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-2xl md:text-3xl"
          >
            {t("subtitle")}
          </motion.h2>
        </MaxWidthWrapper>
      </div>

      {/* Content section */}
      <MaxWidthWrapper className="py-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-[#1B224B] mb-6">{t("currentOpenings.title")}</h2>
          <p className="text-gray-600 mb-12">{t("currentOpenings.description")}</p>

          {/* Categories and Search */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-4 py-2 text-sm transition-colors",
                    activeCategory === category.id
                      ? "text-yellow-400 border-b-2 border-yellow-400"
                      : "text-gray-600 hover:text-yellow-400"
                  )}
                >
                  {t(`categories.${category.label}`)}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder={t("search.placeholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* No jobs message */}
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">{t("noJobs")}</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
