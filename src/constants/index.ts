import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";
import sih from "../assets/company/sih.png";
import intern from "../assets/company/intern.jpg";
import idea from "../assets/company/idea.png";
import blender1 from "../assets/tech/blender1.png";
import unity from "../assets/tech/unity.png";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  
  html,
  css,
  reactjs,
  redux,

  figma,
  
  carrent,
  jobit,
  tripguide,
 
} from "../assets";


export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "UI/UX Design",
    icon: web,
  },
  {
    title: "Web Development",
    icon: mobile,
  },
  {
    title: "3D Model-Blender",
    icon: backend,
  },
  {
    title: "Unity Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "blender",
    icon: blender1,
  },
  {
    name: "unity",
    icon: unity,
  },

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
    name: "React JS",
    icon: reactjs,
  },
  
  
];

const experiences: TExperience[] = [
  {
    title: "Smart India Hackathon ",
    companyName: "1st Prize",
     icon: sih,

    iconBg: "white",
    date: "2023",
    points: [
      "Participated and won first prize at the college level of the prestigious Smart India Hackathon 2023.",
      "Developed a Virtual Zoo for kids to enhance learning through immersive AR/VR experiences under the Smart Education category.",
      
    ],
  },
  {
    title: "Certificate Of Experience",
    companyName: "Design Scholar Intern",
    icon: intern,
    iconBg: "white",
    date: "Mar 2024 - Oct 2024",
    points: [
      "Successfully completed the 6-month Chalkpiece Design Scholars Program focused on UX/UI Design, under the mentorship of experienced design professionals.",
      
      "Awarded by Chalkpiece Design Education Trust, an initiative empowering creativity and innovation through design education.",
    ],
  },
  {
    title: "Ideathon - Kongu Engineering College",
    companyName: "1st Prize",
    icon: idea,
    iconBg: "white",
    date: "2023",
    points: [
      "Won first prize in the Ideathon conducted by the CSD department of Kongu Engineering College.",
      "Developed an IoT Automated Object Recognition Glass to assist the visually impaired by identifying and recognizing objects in their surroundings.",
      
    ],
  },
  
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "Fitness Tracker Website",
    description:
      " A full-stack fitness website using React and Firebase, featuring personalized workout plans, daily challenges, and user profiles. Designed for intuitive user experience to help users stay motivated.",
    tags: [
      
      {
        name: "html/css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },

    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Abbinayasri/fitness_tracker",
  },
  {
    name: "Reunion Event Website",
    description:
      "The Flashback Events is a digital marketing and event management platform designed specifically to organize unforgettable batch reunions and get-togethers.",
    tags: [
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Email.js",
        color: "green-text-gradient",
      },

      
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Abbinayasri/TheFlashbackEvents",
  },
  {
    name: "Iot Object Recognition System",
    description:
      "Designed an automated object detection and recognition system using IoT technologies.Aimed to assist visually impaired users by providing real-time audio feedback for identified objects.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      
      
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Abbinayasri/Object-identification-and-detection",
  },
  {
    name: "View All Projects",
    description: "Explore all my design works, where creativity meets functionality.From crafting intuitive wireframes to developing interactive prototypes and  immersive 3D models, each project reflects thoughtful design and purposeful storytelling.",
    tags: [{
       name: "figma",
        color: "blue-text-gradient",
    },
    {
        name: "canva",
        color: "blue-text-gradient",
      },
      {
        name: "blender",
        color: "green-text-gradient",
      },
      {
        name: "html/css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
  ],
    image: redux, // or you can use a custom "view all" icon/image
    sourceCodeLink: "https://sabbi2412b27b.myportfolio.com/", // Replace with your desired link
    
  },
];

export { services, technologies, experiences, testimonials, projects };
