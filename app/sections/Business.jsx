import React from "react";

function Business() {
  return (
    <div className="flex items-center flex-col text-center mb-20">
      <div>
        <h2 className="text-[38px] text-center w-[245px] md:w-full leading-[38px] pb-6 tracking-[-4%]">
          You are our only <span className="font-goudy italic">client!</span>
        </h2>

        <p className="text-[#868686] text-[16px] text-center px-9">
          At 10th Grid, we give your project our full, undivided attention. From
          start to finish, we work exclusively with you—no distractions, no
          competing priorities. Just dedicated designers committed to bringing
          your vision to life.
        </p>
      </div>

      {/* Dark Radial */}
      <section className="flex flex-wrap gap-4 justify-center">
        <div
          className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
          style={{
            background:
              "linear-gradient(to bottom left, #7B17B9 0%, #FA8C9A 45%, #902700 100%)",
          }}
        >
          48-hour <br />
          iteration cycles
        </div>

        <div
          className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
          style={{
            background:
              "linear-gradient(to bottom left, #0D4504 0%, #211B1B 39%, #271022 63%, #2B0606 100%)",
          }}
        >
          48-hour <br />
          iteration cycles
        </div>

        <div
          className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
          style={{
            background:
              "linear-gradient(to bottom left, #4A3400 0%, #322A16 39%, #092727 63%, #001D35 100%)",
          }}
        >
          48-hour <br />
          iteration cycles
        </div>

        <div
          className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
          style={{
            background:
              "linear-gradient(to bottom left, #00384E 0%, #270C2A 53%, #2A0001 100%)",
          }}
        >
          48-hour <br />
          iteration cycles
        </div>
      </section>
    </div>
  );
}

export default Business;
