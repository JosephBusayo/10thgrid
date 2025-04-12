import Heading from "@/components/ui/heading";
import Image from "next/image";
import React from "react";

function Business() {
  return (
    <div className="flex items-center flex-col-reverse md:flex-col gap-20 text-center mb-20">
      <div className="mb-20">
        <Heading text="You are our only" highlight="client!" />
        <p className="text-[#868686] text-[16px] md:text-[32px] text-center px-9 md:px-80">
          At 10th Grid, we give your project our full, undivided attention. From
          start to finish, we work exclusively with you—no distractions, no
          competing priorities. Just dedicated designers committed to bringing
          your vision to life.
        </p>
      </div>

      {/* Dark Radial */}
      <section className="flex flex-col gap-4 justify-center">
        <Heading
          text="All your business needs to"
          highlight="scale"
          className="max-w-[270px] md:max-w-[350px]"
        />

        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-col">
            <div
              className="w-[296px] h-[317px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
              style={{
                background:
                  "linear-gradient(to bottom left, #4E0061 0%, #20006F 45%, #003D6F 100%)",
              }}
            >
              <Image src="/web2.svg" alt="web" width="55" height="50" />
            </div>
            <p className="text-[30px] tracking-[-4%]">Web design</p>
          </div>

          <div className="flex flex-col">
            <div
              className="w-[296px] h-[317px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
              style={{
                background:
                  "linear-gradient(to bottom left, #0D4504 0%, #211B1B 39%, #271022 63%, #2B0606 100%)",
              }}
            >
              <Image src="/product.svg" alt="product" width="55" height="30" />
            </div>
            <p className="text-[30px] tracking-[-4%]">Product design</p>
          </div>

          <div className="flex flex-col">
            <div
              className="w-[296px] h-[317px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
              style={{
                background:
                  "linear-gradient(to bottom left, #4A3400 0%, #322A16 39%, #092727 63%, #001D35 100%)",
              }}
            >
              <Image src="/brand2.svg" alt="web" width="50" height="40" />
            </div>
            <p className="text-[30px] tracking-[-4%]">Brand design</p>
          </div>

          <div className="flex flex-col">
            <div
              className="w-[296px] h-[317px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
              style={{
                background:
                  "linear-gradient(to bottom left, #00384E 0%, #270C2A 53%, #2A0001 100%)",
              }}
            >
              <Image src="/logo2.svg" alt="web" width="50" height="40" />
            </div>
            <p className="text-[30px] tracking-[-4%]">Logo design</p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Business;
