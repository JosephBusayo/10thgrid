"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "./sections/Hero";
import Business from "./sections/Business";
import Work from "./sections/Work";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Image from "next/image";
import Heading from "@/components/ui/heading";
import { motion } from "framer-motion";

export default function Home() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  const images = [
    "/img1.png", "/img2.png", "/img3.png", "/img4.png", "/img6.png",
    "/img1.png", "/img2.png", "/img3.png", "/img4.png", "/img6.png", // Duplicated for looping
  ];

  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;
      setWidth(scrollWidth - clientWidth);
    }
  }, []);

  return (
    <>
      <Hero />

      <section className="flex flex-col justify-center items-center mb-20 overflow-hidden">
        <Heading text="Design that works for" highlight="you!" />

        <div className="w-full max-w-screen-xl relative overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex items-center gap-4"
            animate={{ x: [0, -width / 2] }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          >
            {images.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-[300px] md:w-[400px] mx-2">
                <div className="w-full h-[300px] md:h-[501px] relative">
                  <Image src={src} alt={`image-${index}`} layout="fill" objectFit="contain" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Business />
      <Work />
      <Pricing id="pricing" />
      <Faq id="faqs" />
      <Footer />
    </>
  );
}
