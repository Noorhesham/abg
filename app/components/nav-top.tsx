"use client";

import { Facebook, Linkedin, Instagram, Minus, Plus } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Language from "./Language";
import PhoneNav from "./PhoneNav";
import useIsMobile from "../hooks/useIsMobile";

export function NavTop() {
  const isMobile = useIsMobile();
  return (
    <div className="bg-[#1E2756] text-white py-2">
      <MaxWidthWrapper noPadding className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Language />
            <span className="text-sm lg:block hidden">Welcome To Artificial Business Gate</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-sm lg:block hidden">Taj St, Elbanafeseg 7, New Cairo, Egypt</span>

            <div className="flex items-center space-x-3">
              <Link href="#" className="hover:text-blue-400">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
          {isMobile && <PhoneNav />}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
