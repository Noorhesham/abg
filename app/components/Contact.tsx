"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import MaxWidthWrapper from "./MaxWidthWrapper";

export function ContactForm() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    fullName: z.string().min(2, t("validation.name")),
    email: z.string().email(t("validation.email")),
    message: z.string().min(10, t("validation.message")),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success(t("toast.success"));
      form.reset();
    } catch (error) {
      toast.error(t("toast.error"));
    } finally {
      setIsSubmitting(false);
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      key: "headOffice",
      href: undefined,
    },
    {
      icon: Phone,
      key: "phone",
      href: "tel:+201019850500",
    },
    {
      icon: Mail,
      key: "email",
      href: "mailto:info@abgegypt.com",
    },
  ];

  return (
    <section className="bg-gray-100">
      <MaxWidthWrapper className="grid shadow-md md:grid-cols-2 gap-8 p-3 rounded-xl">
        {/* Contact Information */}
        <MaxWidthWrapper className="space-y-8 rounded-2xl bg-[#1E2756]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-gray-50"
          >
            {t("title")}
          </motion.h2>
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                  <item.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-50">{t(`info.${item.key}.label`)}</p>
                  {item.href ? (
                    <a href={item.href} className="text-gray-50 hover:text-blue-400 transition-colors">
                      {t(`info.${item.key}.value`)}
                    </a>
                  ) : (
                    <p className="text-gray-50">{t(`info.${item.key}.value`)}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </MaxWidthWrapper>

        {/* Contact Form */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/20 backdrop-blur-sm rounded-xl p-6"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-600">{t("form.fullName.label")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("form.fullName.placeholder")}
                          className="bg-white/10 border-white/20 text-gray-600 placeholder:text-gray-45"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-600">{t("form.email.label")}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t("form.email.placeholder")}
                          className="bg-white/10 border-white/20 text-gray-600 placeholder:text-gray-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-600">{t("form.message.label")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("form.message.placeholder")}
                          className="bg-white/10 border-white/20 text-gray-600 placeholder:text-gray-400 min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t("form.button.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t("form.button.send")}
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
