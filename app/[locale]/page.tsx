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
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations();

  const softwareServices = [
    { icon: <Smartphone />, label: t("services.software.mobile") },
    { icon: <Globe />, label: t("services.software.website") },
    { icon: <Palette />, label: t("services.software.uiux") },
    { icon: <Brain />, label: t("services.software.aibi") },
    { icon: <TestTube2 />, label: t("services.software.testing") },
    { icon: <BarChart3 />, label: t("services.software.dataAnalysis") },
  ];

  const marketingServices = [
    { icon: <Megaphone />, label: t("services.marketing.repin") },
    { icon: <Share2 />, label: t("services.marketing.shipping") },
    { icon: <Target />, label: t("services.marketing.affiliate") },
    { icon: <Palette />, label: t("services.marketing.crm") },
  ];

  const softwareProjects = [
    {
      id: 1,
      title: t("projects.software.basketball.title"),
      description: t("projects.software.basketball.description"),
      video: "/basketball website & app.mp4",
    },
    {
      id: 2,
      title: t("projects.software.delivertto.title"),
      description: t("projects.software.delivertto.description"),
      video: "/delivretto.mp4",
    },
    {
      id: 3,
      title: t("projects.software.elshawa.title"),
      description: t("projects.software.elshawa.description"),
      video: "/shawwa.mp4",
    },
    {
      id: 4,
      title: t("projects.software.ugmedical.title"),
      description: t("projects.software.ugmedical.description"),
      video: "/ug website and mobile app.mp4",
    },
    {
      id: 5,
      title: t("projects.software.zagel.title"),
      description: t("projects.software.zagel.description"),
      video: "/zajel 00.mp4",
    },
  ];

  const marketingProjects = [
    {
      id: 1,
      title: t("projects.marketing.basketball.title"),
      description: t("projects.marketing.basketball.description"),
      video: "/basketball website & app.mp4",
    },
    {
      id: 2,
      title: t("projects.marketing.delivertto.title"),
      description: t("projects.marketing.delivertto.description"),
      video: "/delivretto.mp4",
    },
    {
      id: 3,
      title: t("projects.marketing.elshawa.title"),
      description: t("projects.marketing.elshawa.description"),
      video: "/shawwa.mp4",
    },
    {
      id: 4,
      title: t("projects.marketing.ugmedical.title"),
      description: t("projects.marketing.ugmedical.description"),
      video: "/ug website and mobile app.mp4",
    },
    {
      id: 5,
      title: t("projects.marketing.zagel.title"),
      description: t("projects.marketing.zagel.description"),
      video: "/zajel 00.mp4",
    },
  ];

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
                {t("hero.title.part1")}
                <br />
                {t("hero.title.part2")} <span className="text-yellow-400">{t("hero.title.highlight")}</span>
              </h1>

              <p className="text-gray-300 leading-relaxed max-w-xl">{t("hero.description")}</p>
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
        title={t("sections.software.title")}
        subtitle={t("sections.software.subtitle")}
        description={t("sections.software.description")}
        services={softwareServices}
      />
      <ProjectsSection title={t("sections.softwareProjects.title")} projects={softwareProjects} />
      <SectionDivider
        title={t("divider.software.title")}
        highlightedText={t("divider.software.highlight")}
        description={t("divider.software.description")}
        Icon={<Code2 />}
      />
      <ServicesSection
        title={t("sections.saas.title")}
        subtitle={t("sections.saas.subtitle")}
        description={t("sections.saas.description")}
        services={marketingServices}
        bgColor="bg-[#162042]"
      />
      <SectionDivider
        title={t("divider.saas.title")}
        highlightedText={t("divider.saas.highlight")}
        description={t("divider.saas.description")}
        Icon={<MegaphoneIcon />}
      />
      <ProjectsSection
        title={t("sections.marketingProjects.title")}
        projects={marketingProjects}
        bgColor="bg-[#162042]"
        buttonText={t("buttons.viewMarketingPortfolio")}
      />
      <section className=" bg-white">
        <MaxWidthWrapper className="flex flex-col gap-4 items-center">
          <h2 className=" text-yellow-400 font-semibold text-3xl">{t("foodCode.subtitle")}</h2>
          <h3 className=" text-black font-semibold text-4xl">{t("foodCode.title")}</h3>
          <p className=" text-lg">{t("foodCode.description")}</p>
          <img src="/food-cod (1).png" className=" w-full h-[34rem] object-contain" alt="" />
          <Counter />
        </MaxWidthWrapper>
      </section>
      <BusinessConsultant />
      <ContactForm />
    </div>
  );
}
