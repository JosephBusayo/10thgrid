
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center bg-black min-h-screen p-10 space-y-10">
      {/* Light Radial */}
      <section className="flex flex-wrap gap-4 justify-center">
        <div
          className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
          style={{
            background:
              "linear-gradient(to bottom left, #FDB00B 0%, #FDA70F 36%, #FB8121 80%, #D24856 100%)",
          }}
        >
          48-hour <br />
          iteration cycles
        </div>

        <div
          className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2x rounded-3xl"
          style={{
            background:
            "linear-gradient(to top right, #66259D 0%, #B51F69 13%, #EC1B44 25%, #FBAA08 73%, #FBAA08 100%)",
        }}
        >
          TEST <br />
          iteration cycles
        </div>
     
        <div
          className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
          style={{
            background:
              "linear-gradient(to bottom left, #66259D 0%, #B51F69 13%, #EC1B44 25%, #FBAA08 73%, #FBAA08 100%)",
          }}
        >
          TEST <br />
          iteration cycles
        </div>
      </section>

      {/* Dark Radial */}
      <section className="flex flex-wrap gap-4 justify-center">
        <div
          className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
          style={{
            background:
              "linear-gradient(to bottom left, #4E0061 0%, #20006F 44%, #003D6F 63%, #00634F 100%)",
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
    </section>
  );
}
