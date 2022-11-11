import React from 'react';

// import hero data
import { heroData } from '../data';

// import components
import Header from './Header';

const Hero = () => {
  // destructure hero
  const {image} = heroData;
  return (
    <section className='lg:h-[900px] py-12'>
      <Header />
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>

            <img src={image} alt=''
            data-aos='fade-down'
            data-aos-delay='400'/>
          </div>
        </div>
    </section>
  );
};
export default Hero;
