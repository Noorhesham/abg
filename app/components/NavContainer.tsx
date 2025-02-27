"use client";

import React, { useEffect, useState } from "react";
import { NavTop } from "../components/nav-top";
import { NavMain } from "../components/nav-main";
import useIsMobile from "../hooks/useIsMobile";
import PhoneNav from "./PhoneNav";
import { useTranslations } from "next-intl";

export const menuItems = [
  { label: "Home", href: "/" },
  { label: "Who Are We", href: "/about" },
  {
    label: "Services",
    href: "/software",
    submenu: [
      { label: "Digital Marketing", href: "/software#digital-marketing" },
      { label: "Web Development", href: "/software#web-development" },
      { label: "Mobile Apps", href: "/software#mobile-apps" },
    ],
  },
  { label: "Food Code", href: "/food-code" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Our Clients", href: "/clients" },
];

// Note: We don't translate the labels here because they are used as keys
// for the translations in the nav-main component where the actual translation happens

const NavContainer = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const isMobile = useIsMobile();
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(lastScrollPosition < window.scrollY);
      setLastScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <div
      className={`w-full z-50 fixed left-0 shadow-md top-0 transition-transform duration-200 ${
        isScrolling ? "-translate-y-12" : "translate-y-0"
      }`}
    >
      <NavTop />
      {!isMobile && <NavMain />}
    </div>
  );
};

export default NavContainer;
