import React from 'react'
import { Button } from "@/components/ui/button";
import { BsArrowUpRight } from "react-icons/bs";
import Image from 'next/image';

function Footer() {
  return (
    <div className='mb-20 flex flex-col justify-center gap-6'>
      <h2 className={`text-[36px] md:text-[48px] text-center max-w-[300px] md:max-w-[410px] mx-auto leading-[38px] pb-6 tracking-[-4%]`}>
        Not sure if <span className="font-goudy italic">10th Grid</span> is the right choice for you?
      </h2>
      <a href="https://calendly.com/joetechhashira/discovery-call" target="_blank" rel="noopener noreferrer" className="mx-auto">
        <Button className="mx-auto">Book a free call <Image src="/arrow-right-up-line.svg" alt="ico" height="18" width="18" /> </Button>
      </a>

    </div>
  )
}

export default Footer
