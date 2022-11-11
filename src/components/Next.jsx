import React from "react";

import Book from "../assets/img/creative-writing.jpg";
// destructure features data
const Next = () => {
  return (
    <section class=" text-gray-600 body-font overflow-hidden">
      <div class=" pb-0 px-3 pt-10  mx-auto">
        <div className="flex items-center justify-between">
          <h2 class=" font-semibold text-gray-900 mb-1  text-base">
            Next Class
          </h2>
          <div className=" flex justify-end gap-2 mb-1">
            <span class=" flex py-1 px-2 rounded bg-indigo-50 text-black-500 text-[13px] font-bold ">
              Assignment
            </span>
            <span class=" flex py-1 px-2 rounded bg-indigo-50 text-black-500 text-[13px] font-bold ">
              Schedule
            </span>
          </div>
        </div>
      </div>

      <div class=" pt-0 p-3 mx-auto  flex min-w-full ">
        <div className="flex min-w-full bg-[#2e7dda] hover:bg-blue-700 items-center p-4 px-8 h-[93px]">
          <img src={Book} className="w-[66px] h-[57px]" alt="" srcset="" />
          <div className="px-3 flex flex-col  mr-auto">
            <h2 class="  flex  min-w-max   text-white text-sm  mb-1.5 font-semibold ">
              Creative Writing
            </h2>
            <span class=" flex    text-white text-[10px] font-bold ">
              3.00PM 15.00GMT
            </span>
            <span class=" flex  py-1  text-white text-[9px] font-bold tracking-widest">
              July 21-2022
            </span>
          </div>
          <div className=" flex items-end h-full">
            <button class="text-[12px] min-w-max h-[35px] font-semibold py-[10px] px-[15px]  rounded bg-indigo-50 text-black-80  ">
              Start Class
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Next;
