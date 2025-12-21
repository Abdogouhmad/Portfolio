// config/site.ts
import { StaticImageData } from "next/image";

import minirs from "../public/minirs.png";
import rcn from "../public/rcn.png";
import outiplus from "../public/outi.png";

export type SiteConfig = typeof siteConfig;
export type ProjectSite = typeof Projectsite;

interface Project {
  iconNames: string[]; // Changed from ReactNode[] to string[]
  lang: string[];
  img: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

interface stackType {
  name: string;
  icon: string;
  color: string;
  level: string;
}


export const siteConfig = {
  name: "AG",
  description: "Welcome to my personal portfolio.",
  navItems: [
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Projects",
      href: "#project",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  links: {
    github: "https://github.com/Abdogouhmad",
    twitter: "https://x.com/a3bdor7man",
    discord: "https://discordapp.com/users/461940570106101773",
    blusky: "https://bsky.app/profile/3bdo23.bsky.social",
  },
  hero: {
    big_one: "Put your business in",
    big_two: "hands and grow for a brighter tomorrow.",
    fliped: ["trusted", "skilled"],
    "about_me": "I'm Abderrahman Gouhmad, a creative developer specializing in building elegant web and mobile applications using TypeScript, Rust, Next.js, Flutter, and Tailwind CSS. My background in linguistics has shaped my approach to development, driving my commitment to creating intuitive, user-centric solutions and solving complex technical challenges. I'm passionate about collaborating on innovative digital projects that deliver meaningful results."
  },
  my_info: {
    name: "Abderrahman Gouhmad",
    hubbies: ["Reading", "Workout", "Biking", "Writing"],
    occupation: ["Linguistic", "Web developer"],
    enthusiasm: ["Bikes", "Rust lang"],
  },
  bt_hero: [
    {
      id: 1,
      title: "View Projects",
      link: "#projects",
      external: false,
      variant: "primary",
      icon: true,
    },
    {
      id: 2,
      title: "View Resume",
      link: "/A_Gouhmad.pdf",
      external: false,
      variant: "secondary",
      icon: false,
      donwload: true
    },
  ],

  services: {
    title1: "Secure. Reliable. Built for Impact.",
    title2:
      "Focused expertise and sharp execution to scale your digital product with confidence.",
    feat: [
      {
        title: "DevOps & Support",
        sub: "Fast, reliable maintenance using CI/CD pipelines and proven DevOps workflows. I ship hotfixes in hours and roll out stable, feature-rich updates bi-weekly.",
        tags: ["CI/CD", "Infrastructure", "Monitoring"],
      },
      {
        title: "Backend Engineering",
        sub: "Robust APIs and scalable architecture built with modern frameworks. I integrate business logic seamlessly with third-party services and internal systems.",
        tags: ["APIs", "Microservices", "Scalability"],
      },
      {
        title: "Frontend Development",
        sub: "User-first interfaces built with precision. I turn audience insights into polished UIs using modern front-end stacks for performance and accessibility.",
        tags: ["React", "Accessibility", "Performance"],
      },
    ],
  },
  techs: {
    title: "A Powerful Tech Stack for Real Results",
    subtitle: "Smart tools. Better products. Faster delivery.",
    lang: "Languages",
    frmw: "Framworks",
    dvops: "DevOps",
  },
  project: {
    title: "Things I've Built",
    subtitle: "Scalable and Performant Projects I’ve Engineered",
  },
};

export const Projectsite: Project[] = [
  {
    iconNames: ["FaRust", "SiToml"], // Using string instead of JSX
    lang: ["Rust", "Toml"],
    img: rcn,
    alt: "rcn",
    title: "RCN",
    description:
      "rcn is a Rust-based CLI tool designed to assist React and Next.js developers using TypeScript by automating the creation of model components, services, and types.",
  },
  {
    iconNames: ["FaRust", "SiToml"], // Using string instead of JSX
    lang: ["Rust", "Toml"],
    img: minirs,
    alt: "Mini rust server",
    title: "MiniRs",
    description:
      "A minimal and configurable HTTP server built with Rust, leveraging a simple config.toml for setup.",
  },
  {
    iconNames: ["RiNextjsLine", "BiLogoTypescript"], // Using string instead of JSX
    lang: ["Nextjs", "Typescript"],
    img: outiplus,
    alt: "landing page of the website",
    title: "Outiplus",
    description:
      "outiplus is a lending page that presents the company info",
  },
];

export const techStack: stackType[] = [
  {
    name: "Rust",
    icon: "SiRust",
    color: "text-orange-600",
    level: "Intermediate",
  },
  {
    name: "TypeScript",
    icon: "SiTypescript",
    color: "text-blue-600",
    level: "Advanced",
  },
  {
    name: "Dart",
    icon: "SiDart",
    color: "text-cyan-500",
    level: "Intermediate",
  },
  {
    name: "JavaScript",
    icon: "SiJavascript",
    color: "text-yellow-400",
    level: "Advanced",
  },
  {
    name: "Node.js",
    icon: "SiNodedotjs",
    color: "text-green-500",
    level: "Advanced",
  },
  {
    name: "Python",
    icon: "SiPython",
    color: "text-blue-500",
    level: "Advanced",
  },
  {
    name: "Bash",
    icon: "SiGnubash",
    color: "text-neutral-500",
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    color: "text-cyan-400",
    level: "Advanced",
  },
  {
    name: "React",
    icon: "SiReact",
    color: "text-blue-500",
    level: "Advanced",
  },
  {
    name: "Svelte",
    icon: "SiSvelte",
    color: "text-orange-600",
    level: "Advanced",
  },
  {
    name: "Next.js",
    icon: "SiNextdotjs",
    color: "text-black dark:text-white",
    level: "Advanced",
  },
  {
    name: "Git",
    icon: "SiGit",
    color: "text-red-500",
    level: "Advanced",
  },
  {
    name: "AWS",
    icon: "FaAws",
    color: "text-black dark:text-white",
    level: "Intermediate",
  },
  {
    name: "Docker",
    icon: "SiDocker",
    color: "text-blue-600",
    level: "Intermediate",
  },
  {
    name: "Prisma",
    icon: "SiPrisma",
    color: "text-neutral-500",
    level: "Advanced",
  },
];
