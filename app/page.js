import Hero from "./sections/Hero";
import Business from "./sections/Business";
import Work from "./sections/Work";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import Heading from "@/components/ui/heading";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="flex flex-col justify-center items-center mb-20">
        <Heading text="Design that works for" highlight="you!" />

        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          className="w-full max-w-screen-xl"
        >
          <CarouselContent className="flex items-center gap-4">
            {[
              "/img1.png", "/img2.png", "/img3.png",
              "/img4.png", "/img6.png"
            ].map((src, index) => (
              <CarouselItem
                key={index}
                className="basis-3/4 sm:basis-1/2 md:basis-1/3 w-auto"
              >
                <div className="w-full h-[300px] md:h-[501px] relative">
                  <Image
                    src={src}
                    alt={`image-${index}`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <Business />

      <Work />

      <Pricing id="pricing" />

      <Faq id="faqs" />

      <Footer />     
    </>
  );
}
