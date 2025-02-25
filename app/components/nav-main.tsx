"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import MaxWidthWrapper from "./MaxWidthWrapper"

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Who Are We", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
    ],
  },
  { label: "Food Code", href: "/food-code" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Our Clients", href: "/clients" },
]

export function NavMain() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <nav className="bg-white py-4 shadow-sm">
      <MaxWidthWrapper noPadding className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.svg" alt="ABG" className="h-12" />
          </Link>

          <div className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-gray-700 hover:text-blue-600 flex items-center space-x-1",
                    activeMenu === item.label && "text-blue-600",
                  )}
                >
                  <span>{item.label}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {item.submenu && activeMenu === item.label && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 mt-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

