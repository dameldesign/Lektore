import React from "react";

// import features data
import { featuresData } from "../data";

// import icons
import { BsArrowRight } from "react-icons/bs";

const Features = () => {
  // destructure features data
  const { title, subtitle, list } = featuresData;
  return (
    <section className="my-[70px] xl:my-[150px]">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex items-center justify-between">
          <h2 className="h2 mb-3 " data-aos="fade-down" data-aos-delay="100">
            {title}
          </h2>
        </div>
        {/* feature list */}
        <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2">
          {list.map((feature, index) => {
            // destructure feature
            const {
              image,
              bgImage,
              title,
              description,
              linkText,
              delay,
              digit,
            } = feature;
            // feature item
            return (
              <div
                key={index}
                className="w-full  h-[108px] flex  items-center justify-center xl:flex-row xl:justify-start mx-auto"
                // data-aos="zoom-in"
                // data-aos-offset="100"
                // data-aos-delay={delay}
              >
                {/* bg image */}
                {/* <div className="hidden xl:flex absolute top-0 right-0 -z-10">
                  <img src={bgImage} />
                </div> */}

                {/* icon image */}
                <div
                  className="w-[120px] h[100%] bg-contain h xl:mr-7 xl:max-w-[32px]"
                  // data-aos="zoom-in-right"
                  // data-aos-delay={delay}
                >
                  <img src={image} />
                </div>
                {/* text */}
                <div className="max-w-[220px]">
                  <h3 className="h3 mb-4">{title}</h3>
                  <p className="font-light italic mb-4">{description}</p>
                  {/* link & arrow */}
                 <div className="flex justify-between gap-5 items-center">
                  <div class="h-1 bg-black-400  rounded overflow-hidden">
                    <div class="w-24 h-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-x-2 group">
                    <a className="text-primary font-bold" href="#">
                      {linkText}
                    </a>
                    {/* <BsArrowRight className='text-xl text-accent-primary group-hover:ml-[5px] transition-all' /> */}
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
