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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

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
        <Heading
          text="Design that works for"
          highlight="you!"
          className="mb-8" // Added consistent bottom margin
        />

        <div className="w-full max-w-screen-xl relative">
          <Carousel
            opts={{
              loop: true,
              align: "center",
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="flex items-center gap-5 px-4">
              {["/img1.png", "/img2.png", "/img3.png", "/img4.png"].map((src, index) => (
                <CarouselItem
                  key={index}
                  className="basis-50 sm:basis-1/2 md:basis-4/6"
                >
                  <div className="w-[300px] md:w-[758px] h-[200px] md:h-[501px] relative">
                    <Image
                      src={src}
                      alt={`image-${index}`}
                      layout="fill"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
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
