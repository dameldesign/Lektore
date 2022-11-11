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
      pagination={{
        clickable: true,
      }}
      modules={[Pagination,]}
      className='mySwiper'
    >
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { icon, message, name, web,} = slide;
        return (
          // slide
          <SwiperSlide
            key={index}
            className='bg-white flex flex-col flex-nowrap hover:bg-blue-800 hover:text-white  focus:text-white border w-10 border-accent-primary p-[12px]  items-center gap-x-[20px] shadow-xl'
          >
            {/* avatar image */}
           <div className='flex flex-col text-3xl hover:text-white'> {icon}</div>
            {/* text */}
              <div className=' text-primary font-bold  hover:text-white my-2 flex-nowrap '>{name}</div>
              <div className='flex text-center justify-center'>
              <div className=' font-bold text-[25px] text-black hover:text-white'>
                {web}
              </div>
              <p className=' mt-3.5 leading-none text-[14px] text-color[green] border-gray-200'>{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
