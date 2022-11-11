// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import Feature1Img from '../src/assets/img/english.png';
import Feature2Img from '../src/assets/img/english.jpg';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../src/assets/img/logo-v2.png';
import HeroImage from '../src/assets/img/IMG-20221110-WA0011.jpg';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';
import Book from '../src/assets/img/creative-writing.jpg';
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
  title: ` Save your data storage here.`,
  subtitle:
    'Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.',
  btnText: 'Learn more',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'We are a high-level data storage bank',
  subtitle:
    'The place to store various data that you can access at any time through the internet  and where you can carry it. This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.',
};

export const featuresData = {
  title: 'Courses',
  subtitle:
    ' Warehouse.',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Search Data',
      description:
        'Group 1 Class',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: '24 Hours Access',
      description:'Group 1 Class',
      linkText: '63%',
      delay: '700',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'Print Out',
      description:
        'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
      linkText: 'Learn more',
      delay: '1000',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'Security Code',
      description:
        'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password than you created, so only you can open the file.',
      linkText: 'Learn more',
      delay: '1300',
    },
  ],
};
export const Next =[
  {
  image: 'Book',
}
];

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Total Students',
    web :'15',    message:
      '2.4%',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Total Students',
    web :'15',    message:
      '2.4%',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Total Students',
    web :'15',    message:
      '2.4%',
    delay: '900',
  },
  {
    image: Avatar1Img,
    name: 'Total Students',
    web :'15',    message:
      '2.4%',
    delay: '300',
  },
  {
    image: Avatar3Img,
    name: 'Total Students',
    web :'15',    message:
      '2.4%',
    delay: '900',
  },
  
];


export const ctaData = {
  title: 'Try for free!',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
};

export const footerData = {
  logo: LogoV2,
  address: 'Warehouse Society, 234 Bahagia Ave Street PRBW 29281',
  email: 'info@warehouse.project',
  phone: '1-232-3434 (Main)',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.',
  icon: <BsChatDotsFill />,
};
