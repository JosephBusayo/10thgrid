import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

function Hero() {
  return (
    <div className="flex justify-center flex-col items-center gap-8">
      <div className="flex flex-col items-center">
        <h1 className="text-[34px] leading-[39px] text-center pb-6">
          We create designs for growing <span>businesses</span>{" "}
        </h1>
        <p className="text-center pb-8 text-[#868686] text-[16px] leading-[18px] md:text-[22px] md:leading-[26px] max-w-[248px] md:max-w-none">
          Your website, product, and brand—crafted for results
        </p>
      </div>

      <div className="flex gap-1">
        <div className="flex items-center justify-center text-[11px]">
          {" "}
          <p>Quality + speed</p>
          <Image
            src="/star.png"
            alt="X"
            width="17"
            height="16"
            className="mt-[-14px] ml-[-7px]"
          />
        </div>
        <div className="flex items-center justify-center text-[11px]">
          {" "}
          <p>48-hour iteration cycles</p>
          <Image
            src="/star.png"
            alt="X"
            width="17"
            height="16"
            className="mt-[-14px] ml-[-7px]"
          />{" "}
        </div>
        <div className="flex items-center justify-center text-[11px]">
          {" "}
          <p>Cancel anytime</p>
          <Image
            src="/star.png"
            alt="X"
            width="17"
            height="16"
            className="mt-[-14px] ml-[-7px]"
          />{" "}
        </div>
      </div>

      <div className="flex gap-4 flex-col md:flex-row-reverse">
        <Button >Book a free call <BsArrowUpRight/> </Button>
        <Button variant="outline">View plans</Button>
      </div>
    </div>
  );
}

export default Hero;
