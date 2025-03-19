import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Heading from '@/components/ui/heading'


function Faq() {
  return (
    <section id="faqs">
    <Heading text="FAQs"/>
    <Accordion type="single" collapsible className="flex flex-col px-4 gap-4 border-none mb-20 w-full md:w-[60%] mx-auto">
      <AccordionItem value="item-1" className="bg-[#181818] px-6 py-4 rounded-3xl border-none">
        <AccordionTrigger className="text-[18px]">What if I need ongoing support?</AccordionTrigger>
        <AccordionContent className="text-[14px] text-[#868686]">
          Our $1500/month subscription provides continuous design support for web and branding.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2"  className="bg-[#181818] px-6 py-4 rounded-3xl border-none">
        <AccordionTrigger className="text-[18px]">How do I get started?</AccordionTrigger>
        <AccordionContent className="text-[14px] text-[#868686]">
          Simply book a free diagnostic call, and we’ll guide you through the process!
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3"  className="bg-[#181818] px-6 py-4 rounded-3xl border-none">
        <AccordionTrigger className="text-[18px]">How long does a typical project take?</AccordionTrigger>
        <AccordionContent className="text-[14px] text-[#868686]">
          The completion time for each project is 7 days, but initial designs are delivered promptly with a 48-hour revision window.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4"  className="bg-[#181818] px-6 py-4 rounded-3xl border-none">
        <AccordionTrigger className="text-[18px]">What is included in the free diagnostic call?</AccordionTrigger>
        <AccordionContent className="text-[14px] text-[#868686]">
          A one-on-one session to understand your business needs and how we can help.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5"  className="bg-[#181818] px-6 py-4 rounded-3xl border-none">
        <AccordionTrigger className="text-[18px]">Can I pause or cancel my subscription anytime?
        </AccordionTrigger>
        <AccordionContent className="text-[14px] text-[#868686]">
          Yes, you can pause or cancel your subscription at anytime.
        </AccordionContent>
      </AccordionItem>

    </Accordion>
    </section>

  )
}

export default Faq