"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface Project {
  id: number;
  title: string;
  description: string;
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
    title: "Egyptian basketball ",
    description: `Follow the latest Egyptian basketball news through the "Egyptian Basketball Federation" application
                    With comprehensive and exclusive coverage 24 hours a day Federation app.`,
    video: "/basketball website & app.mp4",
  },
  {
    id: 2,
    title: `DELIVERTTO APP`,
    description: `Delivertto is the first app of its kind in Delta and soon across the Republic The best offers from
                    the supermarket in your area Save yourself time and effort.`,
    video: "/delivretto.mp4",
  },
  {
    id: 3,
    title: "El-shawa website",
    description: `El-shawa website is an online marketplace where you can find all home needs and your needs in one
                    place to order whatever you like from a wide range of kitchen sets and clothes and other stuff .`,
    video: "/shawwa.mp4",
  },
  {
    id: 4,
    title: "UG medical",
    description: `Online marketplace for specialized biochemical materials for laboratory and laboratory equipment.
                    This application is the number 1 platform in Egypt for purchasing medical elevators.`,
    video: "/ug website and mobile app.mp4",
  },
  {
    id: 5,
    title: "Zagel App",
    description: `Bring your business to customers within arm’s reach. We create mobile apps with the latest
                    technologies.`,
    video: "/zajel 00.mp4",
  },
];

const VideoCard = ({
  project,
  className,
}: {
  project: { id: number; title: string; description: string; video: string };
  className?: string;
}) => {
  return (
    <div className={` ${className} relative rounded-2xl overflow-hidden aspect-video w-full h-44 group`}>
      <video src={project.video} loop muted autoPlay className="w-full h-full object-cover absolute inset-0"></video>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 duration-200 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-4">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-sm text-center">{project.description}</p>
      </div>
    </div>
  );
};

export function ProjectsSection({
  title = "Our Projects",
  projects,
  className = "",
  bgColor = "bg-[#1E2756]",
  buttonText = "Explore more"
}: ProjectsSectionProps) {
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
            {title}
          </motion.h2>
          <div className="h-[1px] bg-gray-700 flex-1" />
        </div>

        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-3 flex flex-col gap-4">
            <VideoCard project={projects[0]} />
            <VideoCard project={projects[1]} />
          </div>
          <div className="col-span-6 flex flex-col">
            <VideoCard className="h-full" project={projects[2]} />
          </div>
          <div className="col-span-3 flex flex-col gap-4">
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
            {buttonText}
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
