import Image from "next/image";
import { ConsultationForm } from "./components/consultation-form";
import { InfiniteScrollGallery } from "./components/infinteScroll";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { NavMain } from "./components/nav-main";
import { NavTop } from "./components/nav-top";
import { ClientSlider } from "./components/ClientSlider";
import { ServicesSection } from "./components/Services";
import { ProjectsSection } from "./components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1E2756]">
      <NavTop />
      <NavMain />

      <div></div>
      <main className="container relative mx-auto px-4 py-16">
        {" "}
        <div className=" w-80 absolute top-0 right-0  h-80 ">
          <Image alt="" src={"/hader.png"} className="w object-cover" fill />
        </div>
        <div className=" w-12 absolute top-0 left-0  h-96 ">
          <Image alt="" src={"/background-hader.svg"} className="w object-cover" fill />
        </div>
        <MaxWidthWrapper noPadding className="flex gap-12 items-start">
          <div className="space-y-8 ">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-white">
                Take Your Brand To
                <br />
                The <span className="text-yellow-400">Next Level</span>
              </h1>

              <p className="text-gray-300 leading-relaxed max-w-xl">
                ABG is an acclaimed digital marketing, media production agency and powerhouse in software development
                with a reputation for both effective marketing strategies, solutions, the use of digitalization, and
                software development with headquarter in Cairo-Egypt.
              </p>
            </div>

            <ConsultationForm />
          </div>

          <div className="relative w-[60%]">
            {/* Decorative circle */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#8BC34A] rounded-full opacity-10 blur-3xl" />

            <InfiniteScrollGallery />
          </div>
        </MaxWidthWrapper>
      </main>
      <ClientSlider />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}
