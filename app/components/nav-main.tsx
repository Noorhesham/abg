"use client";
import { Link } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { menuItems } from "./NavContainer";
import { usePathname } from "next/navigation";

// استيراد مكونات القائمة المنسدلة من shadcn
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavMain() {
  const pathname = usePathname();

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
              // إذا لم يحتوي العنصر على submenu، نعرض الرابط مباشرةً
              if (!item.submenu) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-gray-700 hover:text-blue-600 flex items-center space-x-1",
                      isActiveRoute && "text-yellow-500"
                    )}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              }

              // إذا كان هناك submenu، نستخدم القائمة المنسدلة من shadcn
              return (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-gray-700 hover:text-blue-600 flex items-center space-x-1",
                        isActiveRoute && "text-yellow-500"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    {item.submenu.map((subitem) => (
                      <DropdownMenuItem key={subitem.label} asChild>
                        <Link href={subitem.href}>{subitem.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })}

            <Link href={"/contact"}>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
