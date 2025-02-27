"use client";
import { Link } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { menuItems } from "./NavContainer";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

// Import dropdown menu components from shadcn
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavMain() {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <nav className="bg-white border-input border-b py-4 shadow-sm">
      <MaxWidthWrapper noPadding className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <img src="/abglogo.svg" alt="ABG" className="h-12" />
          </Link>

          <div className="flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActiveRoute = pathname === item.href;
              // If item doesn't have submenu, render direct link
              if (!item.submenu) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-gray-700 hover:text-blue-600 flex items-center space-x-1",
                      isActiveRoute && "text-yellow-400 font-medium"
                    )}
                  >
                    <span>{t(`nav.${item.label}`)}</span>
                  </Link>
                );
              }

              // If item has submenu, use shadcn dropdown
              return (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-gray-700 hover:text-blue-600 flex items-center space-x-1",
                        isActiveRoute && "text-yellow-400 font-medium"
                      )}
                    >
                      <span>{t(`nav.${item.label}`)}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    {item.submenu.map((subitem) => (
                      <DropdownMenuItem key={subitem.label} asChild>
                        <Link
                          href={subitem.href}
                          className={cn(pathname === subitem.href && "text-yellow-400 font-medium")}
                        >
                          {t(`nav.submenu.${item.label}.${subitem.label}`)}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })}

            <Link href="/contact">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                {t("nav.contactUs")}
              </button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
