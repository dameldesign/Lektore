import React, { useState } from 'react';

// import components
import Nav from './Nav';
import NavMobile from './NavMobile';

// import icons
import { AiOutlineAlignRight } from 'react-icons/ai';
import { MdNotificationAdd } from 'react-icons/md';


const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header
      className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0'
      data-aos='fade-down'
      data-aos-delay='1200'
      data-aos-duration='1000'
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between relative'>
          <div className='flex items-center gap-x-[120px]'>
            {/* logo */}
            <a href='#'>
              <h1 className='font-bold'>LEKTORE</h1>
            </a>

            {/* nav / initially hidden / show on large screens  */}
            <div className='hidden lg:flex'>
              <Nav />

            </div>
          </div>

          {/* mobile nav / initially is showing / hide on large screens */}
          <div
            className={`${
              navMobile ? 'max-h-52' : 'max-h-0'
            } lg:hidden absolute top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>
          <div className=' flex items-center justify-end gap-5' >
          <button className=' flex items-center justify-end'>
            <MdNotificationAdd  className='text-3xl text-primary group-hover:text-blue transition' />
          </button>

          {/* nav trigger btn / only shows on mobile screens */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className='text-2xl text-primary cursor-pointer lg:hidden'
          >
            <AiOutlineAlignRight/>
          </div>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
