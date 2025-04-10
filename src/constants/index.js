import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import Ska from "../assets/company/Ska.png";
import Fiver from "../assets/company/Fiverr.png";
import Upwork from "../assets/company/upwork.png";
import Pro1 from "../assets/pro1.png";
import Pro2 from "../assets/pro2.png";
import Pro3 from "../assets/pro3.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Front End Developer",
    icon: backend,
  },
  {
    title: "Figma to Code",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "SKA Creative Agency",
    icon: Ska,
    iconBg: "#383E56",
    date: "Dec 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Upwork",
    icon: Upwork,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using Next.js, Tailwind CSS, Typescript, MongoDb and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Figma to Next.js and React.js using Tailwind CSS and Bootstrap or any other recommended CSS framework.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Fiverr",
    icon: Fiver,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using Next.js, Tailwind CSS, Typescript, MongoDb and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Figma to Next.js and React.js using Tailwind CSS and Bootstrap or any other recommended CSS framework.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FoodTuck Website",
    description:
      "A web-based UI that showcases nearby food tuck, their menus, and real-time availability in a visually engaging and user-friendly layout.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Pro1,
    source_code_link:
      "https://github.com/saadraza62186/FoodTuck-Restraunt-NextJS.git",
  },
  {
    name: "Qarz e Hasna",
    description:
      "A clean and intuitive UI designed to facilitate the process of applying, tracking, and managing interest-free loans (Qarz-e-Hasna) with ease and transparency.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Pro2,
    source_code_link: "https://github.com/saadraza62186/Hackathon-SMIT.git",
  },
  {
    name: "YouTube Clone",
    description:
      "A responsive and modern UI clone of YouTube, featuring video thumbnails, search functionality, side navigation, and a clean layout optimized for content discovery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: Pro3,
    source_code_link: "https://github.com/saadraza62186/YoutubeClone-ReactJS.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
