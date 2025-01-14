import { subtitle } from "@/components/primitives";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "A. Gouhmad",
  description: "Welcome to my personal portfolio.",
  navItems: [
    {
      label: "About",
      href: "#about",
    },
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
  navMenuItems: [
    {
      label: "About",
      href: "#about",
    },
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
      "Hey there! Call me AG. I enjoy creating kickass websites and web/mobile apps, that matches your desire.",
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
    },
    {
      id: 2,
      title: "View Resume",
      link: "https://drive.google.com/drive/folders/1L5TMQ9TtBms1DSXryhB0ESQvVXZL5jrV",
      external: true,
    },
  ],

  services: {
    title1: "You‘re Safe And in Good Hands",
    title2:
      "Honed skills, unwavering dedication, and a genuine focus on your needs come together to provide a truly exceptional experience.",
    feat: [
      {
        title: "Continuous support",
        sub: "I specialize in advancing and maintaining your web-based software to keep it running smoothly and competitively. Leveraging proven DevOps processes, I deliver urgent updates within hours and roll out planned, feature-rich modules on a bi-weekly schedule, ensuring your product always meets market demands.",
        icon: "GrVmMaintenance", // Placeholder for an icon representing DevOps
      },
      {
        title: "Robust Backend",
        sub: "I implement your web app's business logic with precision, utilizing proven frameworks to ensure fast, high-quality development. My approach includes building well-structured APIs that seamlessly integrate your application with corporate systems and third-party services, delivering reliable and scalable solutions.",
        icon: "MdOutlineHttp", // Placeholder for an icon representing Backend
      },
      {
        title: "Front-End Development",
        sub: "I deeply analyze your target audience to understand their needs and translate these insights into intuitive UI designs. Collaborating with project stakeholders, I ensure the look and feel align with your goals, bringing it to life using cutting-edge front-end technologies for a seamless user experience.",
        icon: "MdOutlineDesignServices", // Placeholder for an icon representing Frontend
      },
    ],
  },

  techs: {
    title: "Techs & Languages that empowered me",
    subtitle: "Not all techs and languages can empower your web app"
  }
};
