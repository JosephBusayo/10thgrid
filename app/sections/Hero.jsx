import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll

function Hero() {
  return (
    <div className="flex justify-center flex-col items-center gap-8 mb-32">
      <div className="flex flex-col items-center">
        <h1 className="text-[34px] md:w-[42vw] md:text-[66px] leading-[39px] md:leading-[62px] text-center pb-6 tracking-[-4%]">
          We create designs for growing <span className="font-goudy italic text-[36px] md:text-[68px]">businesses</span>
        </h1>
        <p className="text-center pb-8 text-[#868686] text-[16px] leading-[18px] md:text-[22px] md:leading-[26px] max-w-[248px] md:max-w-none">
          Your website, product, and brand—crafted for results
        </p>
      </div>

      <div className="flex gap-1 md:gap-24 text-[#D3D3D3]">
        <div className="flex items-center justify-center text-[11px] md:text-[22px]">
          <p>Quality + speed</p>
          <Image src="/star.png" alt="X" width="17" height="16" className="mt-[-14px] ml-[-7px]" />
        </div>
        <div className="flex items-center justify-center text-[11px] md:text-[22px]">
          <p>48-hour iteration cycles</p>
          <Image src="/star.png" alt="X" width="17" height="16" className="mt-[-14px] ml-[-7px]" />
        </div>
        <div className="flex items-center justify-center text-[11px] md:text-[22px]">
          <p>Cancel anytime</p>
          <Image src="/star.png" alt="X" width="17" height="16" className="mt-[-14px] ml-[-7px]" />
        </div>
      </div>

      <div className="flex gap-4 flex-col md:flex-row-reverse mt-4">
        <a href="https://calendly.com/10thgriddesigns/discovery-call" target="_blank" rel="noopener noreferrer">
          <Button>
            Book a free call <Image src="/arrow-right-up-line.svg" alt="ico" height="18" width="18" />
          </Button>
        </a>
        <ScrollLink to="pricing" smooth={true} duration={800} offset={-50} className="w-full">
          <Button variant="outline" className="w-full">View plans</Button>
        </ScrollLink>
      </div>
    </div>
  );
}

export default Hero;
