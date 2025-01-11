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

import { title } from "./primitives";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, DiscordIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <h1 className={title({ color: "yellow", size: "sm" })}> AG </h1>
          </NextLink>
        </NavbarBrand>
        <ul className="ml-2 hidden justify-start gap-4 md:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "relative inline-block font-semibold transition-all duration-700",
                  "hover:bg-gradient-to-r hover:from-[#FF705B] hover:to-[#FFB457] hover:bg-clip-text hover:text-transparent",
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
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

const SocialMedia = () => {
  return (
    <>
      <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
        <FaSquareXTwitter className="h-[20px] w-[20px] text-default-500 lg:h-[24px] lg:w-[24px]" />
      </Link>
      <Link isExternal aria-label="BlueSky" href={siteConfig.links.blusky}>
        <FaBluesky className="h-[20px] w-[20px] text-default-500 lg:h-[24px] lg:w-[24px]" />
      </Link>
      <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
        <DiscordIcon className="text-default-500" />
      </Link>
      <Link isExternal aria-label="Github" href={siteConfig.links.github}>
        <GithubIcon className="text-default-500" />
      </Link>
    </>
  );
};
