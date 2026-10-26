import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CommandPalette } from "@/components/shared/command-palette";
import { Toaster } from "sonner";
import { getAllPosts } from "@/lib/blog";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agouhmad.vercel.app"),
  title: "Abderrahman Gouhmad | Software Engineer — Rust, Flutter & Linux",
  description:
    "Portfolio of Abderrahman Gouhmad, a software engineer building Rust developer tools, Flutter Android apps, and Linux tooling.",
  keywords: [
    "Rust",
    "Flutter",
    "Dart",
    "Android",
    "Systems Programming",
    "Linux",
    "Developer Tools",
    "Next.js",
    "CachyOS",
    "Arch Linux",
    "Niri",
  ],
  authors: [{ name: "Abderrahman Gouhmad" }],
  openGraph: {
    title: "Abderrahman Gouhmad | Software Engineer — Rust, Flutter & Linux",
    description:
      "Portfolio of Abderrahman Gouhmad, a software engineer building Rust developer tools, Flutter Android apps, and Linux tooling.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abderrahman Gouhmad | Software Engineer — Rust, Flutter & Linux",
    description:
      "Portfolio of Abderrahman Gouhmad, a software engineer building Rust developer tools, Flutter Android apps, and Linux tooling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = getAllPosts();
  const blogPostsMeta = posts.map((p) => ({ slug: p.slug, title: p.title }));

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
          <CommandPalette blogPosts={blogPostsMeta} />
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
