"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useTranslations } from "next-intl";

interface Project {
  id: number;
  key: string;
  video: string;
}

interface ProjectsSectionProps {
  title?: string;
  projects: Project[];
  className?: string;
  bgColor?: string;
  buttonText?: string;
}

const projects = [
  {
    id: 1,
    key: "basketball",
    video: "/basketball website & app.mp4",
  },
  {
    id: 2,
    key: "delivertto",
    video: "/delivretto.mp4",
  },
  {
    id: 3,
    key: "elshawa",
    video: "/shawwa.mp4",
  },
  {
    id: 4,
    key: "ugmedical",
    video: "/ug website and mobile app.mp4",
  },
  {
    id: 5,
    key: "zagel",
    video: "/zajel 00.mp4",
  },
];

const VideoCard = ({
  project,
  className,
}: {
  project: { id: number; key: string; video: string };
  className?: string;
}) => {
  const t = useTranslations("projects.items");

  return (
    <div className={` ${className} relative rounded-2xl overflow-hidden aspect-video w-full h-44 group`}>
      <video src={project.video} loop muted autoPlay className="w-full h-full object-cover absolute inset-0"></video>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 duration-200 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-4">
        <h3 className="text-lg font-bold">{t(`${project.key}.title`)}</h3>
        <p className="text-sm text-center">{t(`${project.key}.description`)}</p>
      </div>
    </div>
  );
};

export function ProjectsSection({
  title,
  projects,
  className = "",
  bgColor = "bg-[#1E2756]",
  buttonText,
}: ProjectsSectionProps) {
  const t = useTranslations("projects");

  return (
    <section className={`${bgColor} ${className}`}>
      <MaxWidthWrapper className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="h-[1px] bg-gray-700 flex-1" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center"
          >
            {title || t("title")}
          </motion.h2>
          <div className="h-[1px] bg-gray-700 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <div className="lg:col-span-3 flex flex-col gap-4">
            <VideoCard project={projects[0]} />
            <VideoCard project={projects[1]} />
          </div>
          <div className="lg:col-span-6 flex flex-col">
            <VideoCard className="h-full" project={projects[2]} />
          </div>
          <div className="lg:col-span-3 flex flex-col gap-4">
            <VideoCard project={projects[3]} />
            <VideoCard project={projects[4]} />
          </div>
        </div>

        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            {buttonText || t("button")}
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
