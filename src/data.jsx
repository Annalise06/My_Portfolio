import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/carD.jpg';
import Work2 from './assets/colorgen.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/gosto.jpg';
import Work5 from './assets/ichooru.jpg';
import Work6 from './assets/fitclub.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Projects',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'FirstName : ',
    description: 'Anna',
  },

  {
    id: 2,
    title: 'LastName : ',
    description: 'Miene',
  },

  {
    id: 3,
    title: 'Nationality : ',
    description: 'Nigerian',
  },

  {
    id: 4,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 5,
    title: 'Address : ',
    description: 'Lagos, Nigeria',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '+234 704 286 6030',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'annalise00tare@gmail.com',
  },

  {
    id: 8,
    title: 'Languages : ',
    description: 'English',
  },
];

export const stats = [
  {
    id: 1,
    no: '3+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '7+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '5+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '0+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - PRESENT',
    title: 'Web Developer <span> Freelance </span>',
    desc: 'Designed and developed various websites for small businesses and individuals, <br/> Worked with clients to understand their requirements and deliver custom solutions.',
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'Secondary School Certificate <span>Highstone College</span>',
    desc: 'Achievements: Participated in science fairs, member of the math club, and volunteered in community service projects.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Undergraduate <span> University of Lagos (UNILAG) </span>',
    desc: 'Bsc Industrial Mathematics with applied computer science - 1st Year Student.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'React',
    percentage: '85',
  },

  {
    id: 5,
    title: 'Typescript',
    percentage: '75',
  },

  {
    id: 6,
    title: 'Node',
    percentage: '75',
  },

  {
    id: 7,
    title: 'ExpressJS',
    percentage: '65',
  },

  {
    id: 8,
    title: 'Vue',
    percentage: '85',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Simple CarD component',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Card component',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'None',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML/CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a style={{color: "orange"}} href="https://janice-clothing.vercel.app/">carD.app</a>,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Background Color Gen',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Color gen',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'None',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML / CSS / JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <div>View Repo: <a href="https://github.com/Annalise06/Background-Generator">Background Color Gen</a></div>,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'E-commerce App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'GOSTO APP',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'None',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React/CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a style={{color: "orange"}} href="https://gosto-ecomm.vercel.app/">Gosto.app</a>,
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Ichooru',
      },
      {
        title: 'Client : ',
        desc: 'None',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: <a style={{color: "cyan"}} href="https://ichooru.vercel.app/">ichooru.app</a>,
      },
    ],
  },

  {
    id: 7,
    img: Work6,
    title: 'Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Fit-Club',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Fit-Club',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'REACT / TAILWINDCSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a style={{color: "cyan"}} href="https://fit-club-xi-seven.vercel.app/">fit-club.org</a>,
      },
    ],
  },

  // {
  //   id: 7,
  //   img: Work6,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dibble.com',
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
