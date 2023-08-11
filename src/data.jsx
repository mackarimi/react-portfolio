import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";

import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpg";
import Work4 from "./assets/project-4.jpg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const Links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Abdolkarim",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Karimi",
  },

  {
    id: 3,
    title: "Age : ",
    description: "32 Years Old",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "American",
  },

  {
    id: 5,
    title: "Web Developer : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "USA, California",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+1-925-381-7167",
  },

  {
    id: 8,
    title: "Email : ",
    description: "karimiabdolkarim0@gmail.com",
  },

  {
    id: 9,
    title: "GitHub : ",
    description: "mackarimi",
  },
  {
    id: 10,
    title: "LinkedIn : ",
    description: "mackarimi",
  },

  {
    id: 11,
    title: "Languages : ",
    description: "Dari, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "6+",
    title: "Months of <br /> Experience",
  },

  {
    id: 2,
    no: "19+",
    title: "Completed <br /> Projects",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - PRESENT",
    title:
      "UC Berkeley Extension-FullStack Web Developer <span>Student </span>",
    desc: "As a recent graduate of the FullStack Web Developer program at UC Berkeley Extension, I have a lot of knowledge and hands-on experience with building dynamic and interactive web apps. My training covered cutting-edge technologies like HTML, CSS, JavaScript, React, and Node.js, which let me make smooth user experiences and powerful server-side functions. I am a problem-solver who pays close attention to details and has a strong drive for innovation. I am eager to use my skills on tech projects that will make a difference,",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 - 2023",
    title:
      "LottoShield <span>Hardware Technician, Customer Relations, Shipping and Handling, Packaging Designer</span>",
    desc: "Multiple roles, including Hardware Technician, Customer Relations, Shipping and Handling, Packaging Designer. But my main role was Hardware Technician and Customer Relations. I was responsible for testing and repairing the hardware, and also communicating with customers to resolve their issues.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2012 - 2019",
    title: "Rollingwood Chevron <span>Manager  </span>",
    desc: "Managed a team of 10+ employees, and was responsible for the day to day operations of the store.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "Graduated 2010",
    title: "Alhambra High School <span>High School Diploma </span>",
    desc: "Graduated with a 3.8 GPA, and was a member of the soccer team.",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2013 - Present",
    title: "Diablo Valley College <span>Continuing Education </span>",
    desc: "Pursuing a degree in Computer Science, with break in between.",
  },
  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023 - Present",
    title:
      "University Of Berkeley Extension Coding Bootcamp<span>Fullstack Developer Certificate </span>",
    desc: "Studied and learned HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, React.js, Git, GitHub, Heroku, and more. ",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "56",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "70",
  },

  {
    id: 3,
    title: "Css",
    percentage: "70",
  },

  {
    id: 4,
    title: "Bootstrap",
    percentage: "70",
  },

  {
    id: 5,
    title: "React",
    percentage: "50",
  },
  {
    id: 6,
    title: "Jquery",
    percentage: "50",
  },

  {
    id: 7,
    title: "Node JS",
    percentage: "45",
  },

  {
    id: 8,
    title: "React",
    percentage: "45",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Interactive Cinema Search",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "A website that allows users to search for movies and TV shows.",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "UC Berkeley Extension",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, Javascript, MDBootstrap, API, AJAX, JSON",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://jdempe.github.io/CinemaSearch/",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Professional README Generator",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "This code is for a command-line interface (CLI) program that asks the user to provide details about their project, and then generates a README.md file with the information provided.",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "UC Berkeley Extension",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JavaScript, Node.js, Inquirer.js",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/mackarimi/R3ADM3-MD-Generator",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "SQL Challenge: Employee Tracker",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Employee tracker application.",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "UC Berkeley Extension",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JavaScript, Node.js, Inquirer.js, MySQL",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/mackarimi/sql_challenge_employee_tracker",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Progressive Web Application: text Editor",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "A text editor that allows users to create, edit, and save text files.",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "UC Berkeley Extension",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JavaScript, Node.js, Express.js, Webpack, IndexedDB, Service Worker, Manifest, Heroku",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://pwa-text-editor111-a44809682c90.herokuapp.com/",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Packaging Designer",
    details: [
      {
        title:
          "Project :Shipping box design, Scanner design, Logo design, customer insert design, and business card design, sticker design, order form design, raspberry pi sticker design. ",
        desc: "",
      },
      {
        title: "Client : ",
        desc: "LottoShield",
      },
      {
        title: "Tools : ",
        desc: "Photoshop, excel, other tools, https://www.alibaba.com/, https://www.uprinting.com/",
      },
      {
        title: "Preview : ",
        desc: "https://www.lottoshield.com/",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Express.js Note Taker",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "A note taker application that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "UC Berkeley Extension",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JavaScript, Node.js, Express.js, Heroku",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://not3-taker-87b02c5d43e4.herokuapp.com/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
