import type {
  TExperience,
  TNavLink,
  TProject,
  TService,
  TTechnology,
  TTestimonial,
} from '../types';

import {
  backend,
  carrent,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript,
  web,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Mobile App Developer',
    icon: mobile,
  },
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UX/UI Designer',
    icon: figma,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'C/C++ Teacher',
    companyName: 'RUPP Study Club',
    icon: 'https://reasauuznvdcinicajak.supabase.co/storage/v1/object/public/tourism-image/photo_2026-01-21_09-43-50.jpgs',
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Architected cross-platform mobile applications from the ground up using React Native and Flutter.',
      'Developed and integrated robust RESTful APIs and GraphQL endpoints using Node.js and Express.',
      'Designed highly responsive and intuitive UI/UX for both iOS and Android platforms.',
      'Optimized application performance and memory usage, ensuring smooth 60fps animations.',
    ],
  },
  {
    title: 'React Native Developer',
    companyName: 'Tesla',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Led the migration of legacy mobile codebases to modern React Native architecture.',
      'Integrated native modules and complex device features (camera, GPS, push notifications) into React Native apps.',
      'Collaborated with backend engineers to define scalable microservices architecture on AWS.',
      'Mentored junior developers and established CI/CD pipelines for automated App Store and Google Play deployments.',
    ],
  },
  {
    title: 'Web Developer',
    companyName: 'Shopify',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Spearheaded the development of a unified E-commerce mobile app using Flutter and Firebase.',
      'Implemented robust state management using Redux and GetX for large-scale application scalability.',
      'Built seamless checkout experiences integrating Stripe and Apple/Google Pay SDKs.',
      'Reduced application startup time by 40% through code splitting and lazy loading optimizations.',
    ],
  },
  {
    title: 'Full stack Developer',
    companyName: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Driving technical strategy and development for flagship mobile applications reaching millions of users.',
      'Designing full-stack solutions with React Native frontends and scalable Node.js/MongoDB backends.',
      'Implementing real-time features using WebSockets for instant messaging and live location tracking.',
      'Ensuring strict security compliance and data encryption across all layers of the mobile architecture.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a cross-platform mobile app as fast and beautiful as native, but Keat proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a mobile developer who truly understands both seamless frontend UI and scalable backend architectures like Keat does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Keat launched our new mobile application, user engagement and retention increased by 50%. Incredible work!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'AutoRent Mobile',
    description:
      'A cross-platform mobile application that allows users to search, book, and manage car rentals from various providers, providing a seamless and efficient transportation solution on the go.',
    tags: [
      {
        name: 'react-native',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'JobHunt App',
    description:
      'Mobile application enabling users to swipe through job openings, view estimated salary ranges, and locate available jobs based on real-time geolocation tracking.',
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'dart',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'TripGuide Mobile',
    description:
      'A comprehensive travel companion app that allows users to book flights, hotels, and rental cars, featuring AR navigation and curated recommendations for popular destinations.',
    tags: [
      {
        name: 'react-native',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'graphql',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/',
  },
];

export { experiences, projects, services, technologies, testimonials };
