import React from 'react';

// import components
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  return (
    <section className='relative'>
      <div className='container  mx-auto'>
        <div
          data-aos='fade-up'
          data-aos-offset='300'
        >
          <div className='flex flex-start mt-4  text-center items-center'>

            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
