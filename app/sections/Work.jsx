import React from 'react';
import Heading from '@/components/ui/heading';
import Image from 'next/image';

const cards = [
  {
    id: 1,
    title: 'It starts with a call',
    description:
      'We begin with a free diagnostic call to understand your business goals after which you’ll be added to a private Slack channel.',
    imageSrc: '/v3.svg',
    imageWidth: 60,
    imageHeight: 50,
    gradient:
      'linear-gradient(to bottom left, #FDB00B 0%, #FDA70F 36%, #FB8121 80%, #D24856 100%)',
    textColor: '#FFDE9C',
  },
  {
    id: 2,
    title: (
      <>
        48-hour
        <br />
        iteration cycles
      </>
    ),
    description:
      'We craft initial concepts that bring your vision to life while incorporating proven conversion principles in 48 hours.',
    imageSrc: '/v2.svg',
    imageWidth: 50,
    imageHeight: 40,
    gradient:
      'linear-gradient(to top right, #66259D 0%, #B51F69 13%, #EC1B44 25%, #FBAA08 80%, #FBAA08 100%)',
    textColor: '#FFDDE4',
  },
  {
    id: 3,
    title: 'We deliver',
    description:
      'We finalize and ship your project, ensuring it meets your goals.Our team provides ongoing support for seamless results',
    imageSrc: '/v1.svg',
    imageWidth: 60,
    imageHeight: 40,
    gradient: 'linear-gradient(220deg, #9C27B0 0%, #EC1B44 40%, #FF9800 100%)',
    textColor: '#FFDB9C',
  },
];

function Card({ title, description, imageSrc, imageWidth, imageHeight, gradient, textColor }) {
  return (
    <div
      className="w-[340px] h-[450px] px-6 flex flex-col justify-between rounded-3xl"
      style={{ background: gradient }}
    >
      <div className="flex items-center justify-center h-full">
        <Image src={imageSrc} alt={title} width={imageWidth} height={imageHeight} />
      </div>
      <div className="flex flex-col gap-3 px-2 pb-10">
        <h2 className="text-[28px] font-semibold leading-[28px] tracking-[-0.04em] text-white">
          {title}
        </h2>
        <p className="text-[14px] leading-[20px] tracking-[-0.04em]" style={{ color: textColor }}>
          {description}
        </p>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div className="pt-0 md:pt-5 mb-20 bg-black md:mt-40">
      <Heading text="Here's how we" highlight="work" className="max-w-[270px] md:max-w-[450px]"/>
      <section className="flex flex-col items-center justify-center py-10">
        <div className="flex flex-wrap justify-center gap-6 md:gap-20">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              imageWidth={card.imageWidth}
              imageHeight={card.imageHeight}
              gradient={card.gradient}
              textColor={card.textColor}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Work;