import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex h-screen flex-col">
            <Navbar />
            <main className="container mx-auto max-w-7xl flex-grow px-6 pt-10">
              {children}
            </main>
            <footer className="flex w-full items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href={siteConfig.links.github}
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p
                  className={clsx(
                    linkStyles({ color: "warning", size: "lg" }),
                    "relative inline-block font-semibold transition-all duration-700",
                    "hover:bg-gradient-to-r hover:from-[#FF705B] hover:to-[#FFB457] hover:bg-clip-text hover:text-transparent",
                  )}
                >
                  AG
                </p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
