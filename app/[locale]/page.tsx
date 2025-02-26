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
  LucideShieldQuestion,
  Code2,
  MegaphoneIcon,
} from "lucide-react";
import { ContactForm } from "../components/Contact";
import { SectionDivider } from "../components/SectionDivider";
import { BusinessConsultant } from "../components/Business";
import Counter from "../components/Counter";

const softwareServices = [
  { icon: <Smartphone />, label: "Mobile Development" },
  { icon: <Globe />, label: "Website Development" },
  { icon: <Palette />, label: "UI/UX" },
  { icon: <Brain />, label: "AI/BI" },
  { icon: <TestTube2 />, label: "Testing" },
  { icon: <BarChart3 />, label: "Data Analysis" },
];

const marketingServices = [
  { icon: <Megaphone />, label: "RepIn (S.F.A)" },
  { icon: <Share2 />, label: " Shipping" },
  { icon: <Target />, label: "Affliate" },
  { icon: <Palette />, label: "CRM" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1E2756]">
      <div></div>
      <main className="container relative mx-auto py-10">
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
        title="SAAS Products"
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
      <SectionDivider
        title="Explore our"
        highlightedText="Software Solutions"
        description="We build cutting-edge software solutions that help businesses transform their digital presence and streamline operations."
        Icon={<Code2 />}
      />
      <ServicesSection
        title="SAAS Products"
        subtitle="MARKETING"
        description="Bring your business to customers within arm’s reach. We create mobile apps with the
          latest
          technologies."
        services={marketingServices}
        bgColor="bg-[#162042]"
      />
      <SectionDivider
        title="Discover our"
        highlightedText="SAAS Products"
        description="Powerful software-as-a-service solutions designed to enhance your business efficiency and growth."
        Icon={<MegaphoneIcon />}
      />
      <ProjectsSection
        title="SAAS Products"
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
      <section className=" bg-white">
        <MaxWidthWrapper className="flex flex-col gap-4 items-center">
          <h2 className=" text-yellow-400 font-semibold text-3xl">SERVICES</h2>
          <h3 className=" text-black font-semibold text-4xl">Food Code Community</h3>
          <p className=" text-lg">
            Reach to 320K of our Facebook page follows and engage with a community of 6.5M member in our Facebook group
          </p>
          <img src="/food-cod (1).png" className=" w-full h-[34rem] object-contain" alt="" />
          <Counter />
        </MaxWidthWrapper>
      </section>
      <BusinessConsultant />
      <ContactForm />
    </div>
  );
}
