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
  tailwind,
  git,
  figma,
  sql,
  dotnet,
  csharp,
  aarshia,
  bibliorepo,
} from "../assets";

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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Mobile App Developer",
    icon: web,
  },
  {
    title: "SEO & DevOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Dot Net Core",
    icon: dotnet,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Sql Server",
    icon: sql,
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
    title: "Dotnet Developer",
    company_name: "Aarshia Infotech",
    icon: aarshia,
    iconBg: "#d6d6d6",
    date: "February 2024 - Present",
    points: [
      "Developing and maintaining web applications using Dot Net Core and SQL Server.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He is a wonderful guy always excited about solving problems with tech.",
    name: "Siwet Khadka",
    designation: "Content Creator Expert",
    company: "Upwork",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const projects = [
  {
    name: "Biblio Repo EBookStore",
    description:
      "Web-based platform that allows users to search, buy, and rent books from various providers, providing a convenient and efficient solution for their needs.",
    tags: [
      {
        name: "dotnet",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: bibliorepo,
    source_code_link: "https://github.com/rrieshavv/BiblioRepo",
  },
];

export { services, technologies, experiences, testimonials, projects };
