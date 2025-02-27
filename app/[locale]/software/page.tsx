"use client";
// app/[locale]/services/page.tsx
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { AnimationWrapper } from "@/app/components/AnimationWrapper";
import { useTranslations } from "next-intl";

const ServicesPage = () => {
  const t = useTranslations("ServicesPage");

  return (
    <>
      {/* Hero Section */}
      <main className="container flex justify-center bg-main relative mx-auto py-10">
        <AnimationWrapper className="w-80 absolute top-0 right-0 h-80">
          <Image alt="Decorative header" src="/hader.png" className="object-cover" fill priority />
        </AnimationWrapper>

        <MaxWidthWrapper
          noPadding
          className="flex self-center w-fit text-center lg:flex-row flex-col relative z-30 gap-12 items-center justify-center mx-auto"
        >
          <AnimationWrapper className="space-y-8 w-full">
            <div className="space-y-4">
              <h1 className="text-5xl text-nowrap flex flex-col font-bold text-white">
                <span className="text-yellow-400 text-base">{t("services")}</span>
                {t("pageTitle")}
              </h1>
            </div>
          </AnimationWrapper>
        </MaxWidthWrapper>
      </main>

      {/* Services Sections */}
      <div className="overflow-hidden">
        {t.raw("sections").map((section: any, index: number) => (
          <AnimationWrapper key={section.title} transition={{ delay: index * 0.2 }}>
            <MaxWidthWrapper className="flex items-center flex-col gap-3 my-20">
              <h3 className="font-semibold text-xl text-yellow-500">{t("services")}</h3>
              <h2 className="text-main lg:text-4xl text-2xl font-bold">{section.title}</h2>
              <p className="text-center max-w-3xl">{section.description}</p>
              <div className="relative h-[60vh] w-full mt-4">
                <Image
                  src={section.imageSrc}
                  alt={section.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </MaxWidthWrapper>
          </AnimationWrapper>
        ))}
      </div>

      {/* CTA Section */}
      <AnimationWrapper>
        <section className="bg-main text-white h-44 flex items-center justify-center flex-col">
          <h3 className="text-4xl mb-2">{t("cta.title")}</h3>
          <p className="text-2xl text-blue-200">{t("cta.subtitle")}</p>
        </section>
      </AnimationWrapper>
    </>
  );
};

export default ServicesPage;
