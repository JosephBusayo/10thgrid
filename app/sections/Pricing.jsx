import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const pricingOptions = [
  {
    title: 'Website only',
    icon: <Image src="/web.png" alt="p-icon" width="24" height="18" />,
    price: '$999',
    billing: 'Billed per project',
    description: 'Get a fully custom, high-performing website designed to impress and convert.',
    features: ["Comprehensive market research", "Custom UI/UX design", "Conversion-optimized pages", "SEO-friendly structure", "2 rounds of revisions", "1 week delivery"],
    bgColor: 'bg-[#151515]',
    color: "text-[#FF9000]",
    button: <a href="" target="_blank" rel="noopener noreferrer"> <Button variant="secondary" className="mt-6 w-full text-white py-3 rounded-[20px]">Start a project</Button></a>
  },
  {
    title: 'Brand Identity',
    icon: <Image src="/brand.png" alt="p-icon" width="24" height="18" />,
    price: '$799',
    billing: 'Billed per project',
    description: 'A strong brand starts with a bold identity. We create logos that leave a lasting impression.',
    features: ["Primary logo + variations", "Custom color palette", "Typography selection", "Social media assets", "Business card design", "1 week delivery"],
    bgColor: 'bg-[#151515]',
    color: "text-[#24EF42]",
    button:<a href='' target="_blank" rel="noopener noreferrer"> <Button variant="secondary" className="mt-6 w-full text-white py-3 rounded-[20px]">Start a project</Button> </a>
  },
  {
    title: 'Design partner',
    icon: <Image src="/partner.png" alt="p-icon" width="24" height="18" />,
    price: '$1500',
    billing: 'Billed monthly',
    description: 'All-in-one design solution. We don’t just create; we maintain and evolve your brand.',
    features: ["All Web Design features", "All Brand & Logo Design features", "Ongoing design maintenance", "Unlimited revisions", "Monthly consulting calls", "Work directly with a partner", "Updates every 3 days", "Cancel anytime"],
    bgColor: "bg-black",
    color: "text-[#EFBC24]",
    borderGradient: 'border-[3px] border-transparent bg-clip-padding',
    button: <a href="https://calendly.com/10thgriddesigns/30min" target="_blank" rel="noopener noreferrer">
      <Button className="mt-6 w-full py-3 rounded-[20px]">Book a free call <Image src="/arrow-right-up-line.svg" alt="ico" height="18" width="18" /> </Button> </a>

  }
];

export default function Pricing() {
  return (
    <section className="py-20 px-6 flex flex-col items-center" id="pricing">
      <Heading text="Flexible pricing, Limitless" highlight="possibilities" className="max-w-[270px] md:max-w-[450px]" />

      <div className="flex flex-col md:flex-row gap-10">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className={`w-[360px] md:w-[368px] px-4 md:px-5 pt-6 pb-4 rounded-[33px] text-white shadow-md flex flex-col justify-between ${index === 2 ? option.bgColor : option.bgColor}`}
            style={index === 2 ? {
              background: 'linear-gradient(to bottom, #000000 0%, #151100 85%, #574400 95%)',
              border: '3px solid transparent',
              backgroundClip: 'padding-box',
              boxShadow: '0px 4px 12px rgba(255, 255, 255, 0.1)'
            } : { boxShadow: '0px 4px 12px rgba(255, 255, 255, 0.1)' }}
          >
            {/* Top Section */}
            <div>
              <div className="flex items-center gap-2 text-[16px] font-semibold">
                {option.icon} <span className={option.color}>{option.title}</span>
              </div>
              <div className="mt-4 text-2xl font-bold">{option.price}</div>
              <p className="text-[16px] text-[#606060]">{option.billing}</p>
              <p className="mt-4 text-sm">{option.description}</p>
            </div>

            {/* Features & Button */}
            <div className="mt-6">
              <h3 className="text-[16px] text-[#606060] font-semibold">What you'll get</h3>
              <ul className="mt-3 space-y-2">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex justify-between items-center gap-2">
                    {feature} <Image src="/check.png" alt="check" width="20" height="12" />
                  </li>
                ))}
              </ul>
              {option.button}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
