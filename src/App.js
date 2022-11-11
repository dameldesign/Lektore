import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';


import Next from './components/Next';
const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Testimonials />
      <Next />
      <Features />


    </div>
  );
};

export default App;
