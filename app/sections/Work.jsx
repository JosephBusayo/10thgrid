import React from 'react'
import Heading from "@/components/ui/heading";
import Image from 'next/image';


function Work() {
  return (
    <div className='pt-0 md:pt-5 mb-20'>
      <Heading text="Here's how we" highlight="work" className="max-w-[270px] md:max-w-[450px]"/>

      <section className="flex flex-col items-center justify-center bg-black space-y-10">
        {/* Light Radial */}
        <section className="flex flex-wrap gap-6 md:gap-20 justify-center">
          <div
            className="w-[340px] h-[450px] px-6 flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
            style={{
              background:
                "linear-gradient(to bottom left, #FDB00B 0%, #FDA70F 36%, #FB8121 80%, #D24856 100%)",
            }}
          >
            <div className='flex flex-col h-full justify-between'>
              <div className='flex justify-center flex-col mx-auto h-full'>
                <Image src="/v3.png" alt="web" width="65" height="50" />
              </div>

              <div className='flex flex-col align-bottom justify-end gap-3 px-4 pb-10'>
                <h2 className='text-[28px] font-semibold leading-[28px] tracking-[-4%]'>It starts with a call</h2>
                <p className='text-[14px] text-[#FFDE9C] leading-[20px] tracking-[-4%]'>We begin with a free diagnostic call to understand your business goals after which you’ll be added to a private slack channel.</p>
              </div>
            </div>

          </div>

          <div
            className="w-[340px] h-[450px] px-6 flex items-center justify-center text-white font-bold text-2x rounded-3xl"
            style={{
              background:
                "linear-gradient(to top right, #66259D 0%, #B51F69 13%, #EC1B44 25%, #FBAA08 80%, #FBAA08 100%)",
            }}
          >
            <div className='flex flex-col h-full justify-between'>
              <div className='flex justify-center flex-col mx-auto h-full'>
                <Image src="/v2.png" alt="web" width="50" height="40" />
              </div>

              <div className='flex flex-col align-bottom justify-end gap-3 px-4 pb-10'>
                <h2 className='text-[28px] font-semibold leading-[28px] tracking-[-4%]'>48-hour iteration cycles</h2>
                <p className='text-[14px] text-[#FFDDE4] leading-[20px] tracking-[-4%]'>We craft initial concepts that bring your vision to life while incorporating proven conversion principles in 48hours.</p>
              </div>
            </div>

          </div>

          <div
            className="w-[340px] h-[450px] px-6 flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
            style={{
              background:
                "linear-gradient(220deg, #9C27B0 0%, #EC1B44 40%, #FF9800 100%)",
            }}
          >
            <div className='flex flex-col h-full justify-between'>
              <div className='flex justify-center flex-col mx-auto h-full'>
                <Image src="/v1.png" alt="web" width="50" height="40" />
              </div>

              <div className='flex flex-col align-bottom justify-end gap-3 px-4 pb-10'>
                <h2 className='text-[28px] font-semibold leading-[28px] tracking-[-4%]'>We deliver</h2>
                <p className='text-[14px] text-[#FFDB9C] leading-[20px] tracking-[-4%]'>We begin with a free diagnostic call to understand your business goals & challenges.</p>
              </div>
            </div>

          </div>

        </section>


      </section>
    </div>
  )
}

export default Work
