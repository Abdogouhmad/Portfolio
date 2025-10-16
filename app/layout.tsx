import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";

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
          "min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex h-screen flex-col">
            <Navbar />
            <main className="container mx-auto max-w-7xl grow px-6 pt-10 pb-20">
              <Analytics />
              {children}
            </main>
            <footer className="flex w-full items-center justify-center border-t border-neutral-700 py-3 dark:border-neutral-600">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href={siteConfig.links.github}
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p
                  className="
    inline-block font-semibold transition-colors duration-300
    text-black dark:text-white
    hover:text-neutral-700 dark:hover:text-neutral-200
  "
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
