import React from 'react';


import Book from '../assets/img/creative-writing.jpg';
  // destructure features data
  const Next = () => {

    return (
    <section class="text-gray-600 body-font overflow-hidden">

    <div class=" pb-0 px-3 pt-10  mx-auto no-">
        <div className='flex items-center justify-between' >
        <h2 class=" font-bold text-gray-900 mt-4 mb-4 text-lg">Next Class</h2>
        <div className=' flex justify-end gap-2'>
        <span class=" flex py-1 px-2 rounded bg-indigo-50 text-black-500 text-xs font-bold tracking-widest">Assignment</span>
        <span class=" flex py-1 px-2 rounded bg-indigo-50 text-black-500 text-xs font-bold tracking-widest">Schedule</span>
        </div>
        </div>
    </div>

    <div class=" pt-0 p-3 mx-auto gap-3">
        <div className='flex bg-blue-700 hover:bg-blue-700 items-center justify-between p-4 px-8' >
        <img src={Book}  className='w-[66px] h-[57px]' alt="" srcset="" />
        <div className=' flex justify-end text-start'>
            <div className=' pl-6 px-3'>
              <h2 class="  flex py-1 px-2 text-white text-base text-sm font-bold tracking-widest">Creative Writing </h2>
              <span class=" flex    text-white text-[10px] font-bold tracking-widest">3.00PM 15.00GMT</span>
              <span class=" flex  py-1 px-2  text-white text-[9px] font-bold tracking-widest">July 21-2022</span>
            </div>
        <button class=" break-words text-[16px] min-w-max justify-end mt-[90px] w-[70%] no-break mx-auto mb-1 px-7 rounded bg-indigo-50 text-black-800 text-sm font-bold ">Start Class</button>
        </div>
        </div>

    </div>
  </section>
  );
};

export default Next;