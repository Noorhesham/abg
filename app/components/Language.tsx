"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { useTransition } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Language = () => {
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale();
  const pathName = usePathname();

  const handleSelect = (value: string) => {
    if (value === currentLocale) return;

    startTransition(() => {
      let newPathName = pathName;

      if (pathName.startsWith(`/${currentLocale}`)) {
        newPathName = pathName.replace(`/${currentLocale}`, `/${value}`);
      } else {
        newPathName = `/${value}${pathName}`;
      }

      window.location.href = newPathName;
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="  text-gray-800 flex justify-between items-center">
          <div className="cursor-pointer flex items-center gap-2">
            <Image
              src={currentLocale === "ar" ? `/flag-for-egypt.svg` : `/United-kingdom_flag_icon_round.svg.png`}
              alt="Arabic"
              width={24}
              height={16}
            />
            <span>{currentLocale === "ar" ? "العربية" : "EN"}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[180px]">
        <DropdownMenuItem onClick={() => handleSelect("ar")} className="cursor-pointer flex items-center gap-2">
          <Image src="/flag-for-egypt.svg" alt="Arabic" width={24} height={16} />
          <span className="font-cairo">العربية</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("en")} className="cursor-pointer flex items-center gap-2">
          <Image src="/United-kingdom_flag_icon_round.svg.png" alt="English" width={24} height={16} />
          <span className="font-cinzel">EN</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Language;
