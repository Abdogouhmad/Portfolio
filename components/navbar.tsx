import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { FaBluesky } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

// import { title } from "./primitives";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, DiscordIcon } from "@/components/icons";
import { ndot47 } from "@/config/fonts";

export const Navbar = () => {
  return (
    <NextUINavbar
      maxWidth="xl"
      position="static"
      className="dark:shadow-navycharcoal-700/50 shadow-xl"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <h1
              className={`${ndot47.className} text-custgray-900 dark:text-custgray-500 text-5xl`}
            >
              {" "}
              AG{" "}
            </h1>
          </NextLink>
        </NavbarBrand>
        <ul className="ml-2 hidden justify-start gap-4 md:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  `${ndot47.className} relative inline-block text-lg transition-all duration-700`,
                  "hover:from-dusty-400 hover:to-dusty-600 hover:bg-linear-to-r hover:bg-clip-text hover:text-transparent",
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 sm:flex">
          <SocialMedia />
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="gap-3 sm:hidden" justify="end">
        <SocialMedia />
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className={`${ndot47.className} mx-4 mt-2 flex flex-col gap-2`}>
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar >
  );
};

const SocialMedia = () => {
  const styledIcon = "text-custgray-800 dark:text-custgray-500 h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]"
  return (
    <>
      <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
        <FaSquareXTwitter className={styledIcon} />
      </Link>
      <Link isExternal aria-label="BlueSky" href={siteConfig.links.blusky}>
        <FaBluesky className={styledIcon} />
      </Link>
      <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
        <DiscordIcon className={styledIcon} />
      </Link>
      <Link isExternal aria-label="Github" href={siteConfig.links.github}>
        <GithubIcon className={styledIcon} />
      </Link>
    </>
  );
};
