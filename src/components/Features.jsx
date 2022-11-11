import React from "react";

// import features data
import { featuresData } from "../data";

// import icons
import { BsPencilSquare } from "react-icons/bs";

const Features = () => {
  // destructure features data
  const { title, list } = featuresData;
  return (
    <section className="my-[70px] px-4 ">
      <div className="mx-auto">
        {/* text */}
        <div className="flex items-center justify-between">
          <h2 className="text-base mb-3  font-semibold" data-aos="fade-down" data-aos-delay="100">
            {title}
          </h2>
          <BsPencilSquare className='text-3xl text-blue-primary group-hover:ml-[5px] transition-all' />
        </div>
        {/* feature list */}
        <div className="grid grid-cols-1 gap-[10px] xl:grid-cols-2">
          {list.map((feature, index) => {
            // destructure feature
            const {
              image,

              title,
              description,
              linkText,
            } = feature;
            // feature item
            return (
              <div
                key={index}
                className="w-full px-4  h-[108px] flex gap-5  items-center bg-[#f9fafb] flex-nowrap justify-start "
                // data-aos="zoom-in"
                // data-aos-offset="100"
                // data-aos-delay={delay}
              >
                {/* bg image */}
                {/* <div className=" w-[66px] h-[57px] top-0 right-0 -z-10">
                  <img src={bgImage} />
                </div> */}

                {/* icon image */}
                <div
                  className="w-[66px] h-[57px]"
                >
                  <img src={image}  className='min-w-full' alt="" />
                </div>
                {/* text */}
                <div className="w-[250px]">
                  <h3 className="text-[14px] mb-2 font-semibold flex flex-nowrap ">{title}</h3>
                  <p className="font-light text-[12px] italic mb-2 flex-nowrap">{description}</p>
                  {/* link & arrow */}
                 <div className="flex  gap-2 items-center">
                  <div class="h-1 bg-black-400  rounded ">
                    <div class="w-24 h-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary font-bold text-[8px]">
                      {linkText}
                    </span>

                  </div>

                 </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
