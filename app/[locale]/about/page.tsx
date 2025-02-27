import { AboutSection } from "@/app/components/AboutSection";
import { MissionVision } from "@/app/components/MissionVision";
import React from "react";

const page = () => {
  return (
    <section className=" pb-10">
      <AboutSection />
      <MissionVision />
    </section>
  );
};

export default page;
