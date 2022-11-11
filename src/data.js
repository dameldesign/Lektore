// import icons
import { GiCoins } from 'react-icons/gi';
import {AiFillCalendar } from 'react-icons/ai';
import {BsFileEarmarkPerson} from 'react-icons/bs';
import {FaBusinessTime } from 'react-icons/fa';

// import images
import Feature1Img from '../src/assets/img/english.png';
import Feature2Img from '../src/assets/img/english.jpg';
import Feature3Img from '../src/assets/img/creative-writing.jpg';

import HeroImage from '../src/assets/img/IMG-20221110-WA0011.jpg';
import Feature1BgImg from '../src/assets/img/english.png';
import Feature2BgImg from '../src/assets/img/english.jpg';
import Feature3BgImg from '../src/assets/img/creative-writing.jpg';

export const navigationData = [
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Help',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Signup',
    href: '#',
  },
];

export const heroData = {
  image: HeroImage,
};


export const featuresData = {
  title: 'Courses',
  subtitle:
    ' Warehouse.',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'English Literature',
      description:
        'Group 1 Class',
      linkText: '62%',

    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: 'Language Composition',
      description:'Group 1 Class',
      linkText: '24%',

    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'Creative Writing',
      description:
        'Group 1 Class',
      linkText: '32',
    },

  ],
};

export const testimonialsData = [
  {
    icon: <AiFillCalendar/>,
    name: 'Upcoming classes',
    web :'15',
  },
  {
    icon: <BsFileEarmarkPerson/>,
    name: 'Active Courses',
    web :'15',    message:'',
    delay: '600',
  },
  {
    icon: <FaBusinessTime/>,
    name: 'Total Students',
    web :'15',    message:
      '2.4%',
    delay: '900',
  },

  {
    icon: <GiCoins/>,
    name: 'Tutoring Hours',
    web :'15',    message:
      '2.1%',
    delay: '900',
  },
  
];


