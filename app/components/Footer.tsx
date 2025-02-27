"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const siteMap = {
  mainLinks: [
    { label: "Home", href: "/" },
    { label: "Who We Are", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
  ],
  ourServices: [
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact" },
    { label: "Solutions", href: "/solutions" },
    { label: "Projects", href: "/projects" },
  ],
};

export function Footer() {
  const t = useTranslations("footer");
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success(t("toast.success"));
      setEmail("");
    } catch (error) {
      toast.error(t("toast.error"));
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-[#1E2756] text-white">
      <MaxWidthWrapper className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-6">
            <h3 className="text-xl font-bold">{t("company.name")}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{t("company.description")}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{t("company.openingHours.title")}</span>
            </div>
            <p className="text-sm text-gray-400">{t("company.openingHours.hours")}</p>
          </motion.div>

          {/* Site Map */}
          {Object.entries(siteMap).map(([section, links], columnIndex) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: columnIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold">{t(`sections.${section}.title`)}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: columnIndex * 0.1 + index * 0.05 }}
                  >
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors inline-block">
                      {t(`sections.${section}.items.${link.label}`)}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <Send className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold">{t("newsletter.title")}</h3>
            </div>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <Input
                type="email"
                placeholder={t("newsletter.placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                required
              />
              <Button type="submit" className="w-full" disabled={isSubscribing}>
                {isSubscribing ? t("newsletter.subscribing") : t("newsletter.button")}
              </Button>
            </form>
          </motion.div>
        </div>
      </MaxWidthWrapper>

      {/* Bottom Bar */}
      <MaxWidthWrapper noPadding className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">{t("copyright", { year: new Date().getFullYear() })}</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                {t("links.privacy")}
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                {t("links.terms")}
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
