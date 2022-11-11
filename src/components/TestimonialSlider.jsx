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
import { Pagination,} from 'swiper';

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={'2.5'}
      centeredSlides={false}
      spaceBetween={12}
      modules={[Pagination,]}
      className=''
    >
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { icon, message, name, web,} = slide;
        return (
          // slide
          <SwiperSlide
            key={index}
            className='bg-white flex flex-col flex-nowrap hover:bg-[#2e7dda] hover:text-white  focus:text-white h-max mb-6 max-w-[140px] border-accent-primary p-[12px] py-[6px] items-center gap-x-[20px] shadow-xl'
          >
            {/* avatar image */}
           <div className='flex flex-col text-3xl hover:text-white'> {icon}</div>
            {/* text */}
              <div className=' text-[12px] font-bold my-2 flex-nowrap '>{name}</div>
              <div className='flex text-center gap-1 justify-center'>
              <div className=' font-bold text-[15px] '>
                {web}
              </div>
              <p className=' mt-2.5 leading-none text-[7px] text-color[green] border-gray-200'>{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
