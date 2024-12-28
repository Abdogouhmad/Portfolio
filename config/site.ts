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

  my_info: {
    name: "Abderrahman Gouhmad",
    hubbies: [
      "Reading", "Workout", "Biking", "Writing" 
    ],
    occupation: ["Linguistic",  "Web developer"],
    enthusiasm: ["Bikes", "Rust lang"],
  }
};
