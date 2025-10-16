// config/site.ts
import { StaticImageData } from "next/image";

import minirs from "../public/minirs.png";
import diwan from "../public/editor.png";
import conv from "../public/conv.png";

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
    about_me:
      "Hey, I'm Abderrahman Gouhmad 👋 a creative developer crafting sleek web & mobile apps with TypeScript, Rust, Next.js, Flutter & Tailwind CSS 🚀. My journey from linguistics to code fuels my passion for intuitive, user-centric solutions and puzzle-like problem-solving 🧩. Let's team up to bring your digital ideas to life and make a real impact 💡!",
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
      link: "https://drive.google.com/drive/folders/1L5TMQ9TtBms1DSXryhB0ESQvVXZL5jrV",
      external: true,
      variant: "secondary",
      icon: false,
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
    img: diwan,
    alt: "Diwan Editor",
    title: "Diwan",
    description:
      "A lightweight, Rust-based text editor focused on performance and minimal resource usage.",
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
    iconNames: ["FaRust", "SiToml"], // Using string instead of JSX
    lang: ["Rust", "Toml"],
    img: conv,
    alt: "HTML To PDF converter",
    title: "RST-Converter",
    description:
      "A fast and efficient Rust CLI tool that converts HTML to PDF with minimal system resource consumption.",
  },
];
