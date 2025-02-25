"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const images1 = ["/ahmad_1.gif", "/odish_1.gif", "/elahly_1.gif", "/odish_1.gif"];

const images2 = ["/odish_1.gif", "/ahmad_1.gif", "/dreem_1.gif", "/dreem_1.gif", "/green_1.gif"];

export function InfiniteScrollGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useSpring(useTransform(scrollY, [0, 1000], [0, -500]), { stiffness: 100, damping: 30 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollHeight = container.scrollHeight;
    let currentScroll = 0;
    let animationFrameId: number;

    const scroll = () => {
      currentScroll += 1;
      if (currentScroll >= scrollHeight / 2) {
        currentScroll = 0;
      }
      container.scrollTop = currentScroll;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[600px]  w-full overflow-hidden relative">
      <motion.div style={{ y }} className="space-y-4">
        {[...images1, ...images1].map((src, index) => (
          <div className="flex gap-4 items-center" key={index}>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <img src={src} alt={`Project ${index + 1}`} className="w-full h-[300px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src={images2[index % images2.length]}
                alt={`Project ${index + 1} - Alt`}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
