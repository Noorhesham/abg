// components/AnimationWrapper.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export const AnimationWrapper = ({
  children,
  className,
  transition,
}: {
  children: ReactNode;
  className?: string;
  transition?: any;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      initial={isMounted ? { opacity: 0, y: 20, scale: 0.95 } : false}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", ...transition }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
