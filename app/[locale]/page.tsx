import Image from "next/image";
import { ConsultationForm } from "../components/consultation-form";
import { InfiniteScrollGallery } from "../components/infinteScroll";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { NavMain } from "../components/nav-main";
import { NavTop } from "../components/nav-top";
import { ClientSlider } from "../components/ClientSlider";
import { ServicesSection } from "../components/Services";
import { ProjectsSection } from "../components/Projects";
import {
  Smartphone,
  Globe,
  Palette,
  Brain,
  TestTube2,
  BarChart3,
  Megaphone,
  Share2,
  Target,
  TrendingUp,
} from "lucide-react";
import { ContactForm } from "../components/Contact";

const softwareServices = [
  { icon: <Smartphone />, label: "Mobile Development" },
  { icon: <Globe />, label: "Website Development" },
  { icon: <Palette />, label: "UI/UX" },
  { icon: <Brain />, label: "AI/BI" },
  { icon: <TestTube2 />, label: "Testing" },
  { icon: <BarChart3 />, label: "Data Analysis" },
];

const marketingServices = [
  { icon: <Megaphone />, label: "Digital Marketing" },
  { icon: <Share2 />, label: "Social Media" },
  { icon: <Target />, label: "Brand Strategy" },
  { icon: <Palette />, label: "Content Creation" },
  { icon: <TrendingUp />, label: "Growth Marketing" },
  { icon: <Brain />, label: "Market Analysis" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1E2756]">
      <div></div>
      <main className="container relative mx-auto py-5">
        {" "}
        <div className=" w-80 absolute top-0 right-0  h-80 ">
          <Image alt="" src={"/hader.png"} className="w object-cover" fill />
        </div>
        <div className=" w-12 absolute top-0 left-0  h-96 ">
          <Image alt="" src={"/background-hader.svg"} className="w object-cover" fill />
        </div>
        <MaxWidthWrapper noPadding className="flex lg:flex-row flex-col relative z-30 gap-12 items-start">
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

          <div className="relative w-full lg:w-[60%]">
            {/* Decorative circle */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#8BC34A] rounded-full opacity-10 blur-3xl" />

            <InfiniteScrollGallery />
          </div>
        </MaxWidthWrapper>
      </main>
      <ClientSlider />

      <ServicesSection
        title="Software Development"
        subtitle="SERVICES"
        description="Bring your business to customers within arm's reach. We create mobile apps with the latest technologies."
        services={softwareServices}
      />
      <ProjectsSection
        title="Software Projects"
        projects={[
          {
            id: 1,
            title: "Egyptian basketball",
            description:
              "Follow the latest Egyptian basketball news through the 'Egyptian Basketball Federation' application",
            video: "/basketball website & app.mp4",
          },
          {
            id: 2,
            title: "DELIVERTTO APP",
            description: "Delivertto is the first app of its kind in Delta and soon across the Republic",
            video: "/delivretto.mp4",
          },
          {
            id: 3,
            title: "El-shawa website",
            description: "El-shawa website is an online marketplace where you can find all home needs",
            video: "/shawwa.mp4",
          },
          {
            id: 4,
            title: "UG medical",
            description: "Online marketplace for specialized biochemical materials",
            video: "/ug website and mobile app.mp4",
          },
          {
            id: 5,
            title: "Zagel App",
            description: "Bring your business to customers within arm's reach",
            video: "/zajel 00.mp4",
          },
        ]}
      />

      <ServicesSection
        title="Marketing Solutions"
        subtitle="MARKETING"
        description="Transform your brand's digital presence with our innovative marketing strategies and solutions."
        services={marketingServices}
        bgColor="bg-[#162042]"
      />

      <ProjectsSection
        title="Marketing Projects"
        projects={[
          {
            id: 1,
            title: "Egyptian basketball",
            description: "Digital marketing campaign for Egyptian Basketball Federation",
            video: "/basketball website & app.mp4",
          },
          {
            id: 2,
            title: "DELIVERTTO APP",
            description: "Social media marketing and brand awareness campaign",
            video: "/delivretto.mp4",
          },
          {
            id: 3,
            title: "El-shawa website",
            description: "Complete digital marketing solution for e-commerce platform",
            video: "/shawwa.mp4",
          },
          {
            id: 4,
            title: "UG medical",
            description: "B2B marketing strategy and implementation",
            video: "/ug website and mobile app.mp4",
          },
          {
            id: 5,
            title: "Zagel App",
            description: "App store optimization and user acquisition campaign",
            video: "/zajel 00.mp4",
          },
        ]}
        bgColor="bg-[#162042]"
        buttonText="View Marketing Portfolio"
      />
      <ContactForm />
    </div>
  );
}
