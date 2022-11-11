import React from 'react';

// import testimonials data
import { testimonialsData } from '../data';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../slider.css';

// import required modules
import { Pagination, Scrollbar } from 'swiper';

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={'2.5'}
      centeredSlides={false}
      spaceBetween={12}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination,]}
      className='mySwiper'
    >
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { image, message, name, web, delay } = slide;
        return (
          // slide
          <SwiperSlide
            key={index}
            className='bg-white flex flex-col hover:bg-blue-800 border border-accent-primary  xl: max-w-[245px] max-h-[250px] pt-[20px] px-[25px] xl:px-[0px] pb-[20px]  items-center gap-x-[20px] shadow-xl'
          >
            {/* avatar image */}
            <img src={image} alt='' className='flex flex-col' />
            {/* text */}
            <div>
              <div className='text-lg text-primary font-bold'>{name}</div>
              <div className=' font-semibold text-black'>
                {web}
              </div>
              <p className=' text-green-primary text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
