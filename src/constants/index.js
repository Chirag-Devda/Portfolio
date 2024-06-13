import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  Express,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  Chakra,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  Spotify,
  CoinHub,
  FoodyZone,
  LockVault,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "projects",
    title: "Projects",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "MERN STACK Developer",
    icon: backend,
  },
  {
    title: "Responsive Design",
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
    name: "Chakra-Ui",
    icon: Chakra,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: Express,
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
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Crypto Coinhub",
    description:
      "This multi-route page app features route protection and server authentication. It securely saves user data in a database with verification. The app is fully responsive and includes login, logout, and signup functionalities.",
    tags: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Chakre-Ui",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "yellow-text-gradient",
      },
    ],
    image: CoinHub,
    source_code_link:
      "https://github.com/Chirag-Devda/React-Projects/tree/main/Project%207%20-%20MONGODB",
    project_link: "https://coinhub-crypto-app.vercel.app/signin",
  },
  {
    name: "Spotify Clone",
    description:
      "This Music Streaming App replicates Spotify’s core functionality. It allows users to play, pause, skip to the next or previous track, and mute music. The app supports multiple albums and includes volume control features. Additionally, it displays real-time track information to enhance the user experience.",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "yellow-text-gradient",
      },
    ],
    image: Spotify,
    source_code_link:
      "https://github.com/Chirag-Devda/Projects/tree/main/Spotify",
    project_link: "https://www.spotifybychirag.freewebhostmost.com/",
  },
  {
    name: "Foody Zone",
    description:
      "This Food Ordering App allows users to filter food options based on the time of day and add items to their cart. It calculates the bill dynamically based on the quantity of each item. The app is designed to be responsive and works seamlessly across all devices.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "text-white",
      },
    ],
    image: FoodyZone,
    source_code_link:
      "https://github.com/Chirag-Devda/React-Projects/tree/main/Project%204",
    project_link: "https://foodyzone-rho.vercel.app",
  },
  {
    name: "Lock-Vault",
    description:
      "This Food Ordering App allows users to filter food options based on the time of day and add items to their cart. It calculates the bill dynamically based on the quantity of each item. The app is designed to be responsive and works seamlessly across all devices.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "text-white",
      },
      {
        name: "MongoDB Atlas",
        color: "green-text-gradient",
      },
    ],
    image: LockVault,
    source_code_link:
      "https://github.com/Chirag-Devda/React-Projects/tree/main/Project%205%20-%20MONGODB",
    project_link: "https://lock-vault.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
