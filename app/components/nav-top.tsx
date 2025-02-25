"use client";

import { Facebook, Linkedin, Instagram, Minus, Plus } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export function NavTop() {
  return (
    <div className="bg-[#1E2756] text-white py-2">
      <MaxWidthWrapper noPadding className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img src="/gb-flag.svg" alt="English" className="w-6 h-4" />
              <span className="text-sm">ENG</span>
            </div>
            <span className="text-sm">Welcome To Artificial Business Gate</span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <button className="text-sm bg-[#2E3A8C] px-3 py-1 rounded">Reset</button>
            </div>

            <span className="text-sm">Taj St, Elbanafeseg 7, New Cairo, Egypt</span>

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
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
