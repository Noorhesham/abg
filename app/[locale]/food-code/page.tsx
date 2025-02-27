"use client";

import React from "react";
import Image from "next/image";
import Counter from "@/app/components/Counter";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { ClientSlider } from "@/app/components/ClientSlider";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("foodCodePage");

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container bg-main text-white relative mx-auto py-10">
        <div className="w-80 absolute top-0 right-0 h-80">
          <Image 
            alt={t("images.header")} 
            src="/hader.png" 
            fill 
            className="object-cover" 
          />
        </div>
        <div className="w-12 absolute top-0 left-0 h-96">
          <Image 
            alt={t("images.background")} 
            src="/background-hader.svg" 
            fill 
            className="object-cover" 
          />
        </div>
        <MaxWidthWrapper className="flex flex-col relative z-40 gap-4 items-center">
          <h2 className="text-yellow-400 font-semibold text-3xl">
            {t("header.subtitle")}
          </h2>
          <h3 className="font-semibold text-4xl">
            {t("header.title")}
          </h3>
          <p className="text-lg">
            {t("header.description")}
          </p>
          <Image
            src="/food-cod (1).png"
            alt={t("images.foodCode")}
            width={800}
            height={500}
            className="w-full h-[34rem] object-contain"
          />
          <Counter className="!text-white" />
        </MaxWidthWrapper>
      </section>
      <MaxWidthWrapper>
        {/* Reach More Audience
        <div className=" w-full h-96">
          <Image alt="" fill className=" object-cover" src={"/Followers.png"} />
        </div>
        <h1>Salma Khaled</h1>
        <p>INFLUENCER</p>
        <Counter /> */}
        <ClientSlider />
      </MaxWidthWrapper>
    </main>
  );
};

export default Page;
