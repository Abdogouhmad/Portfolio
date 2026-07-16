import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/shared/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CommandPalette } from "@/components/shared/command-palette"
import { Toaster } from "sonner"
import { getAllPosts } from "@/lib/blog"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Abderrahman Gouhmad | Systems & Rust Engineer",
  description: "Portfolio of Abderrahman Gouhmad, a software engineer specializing in Rust, Linux, systems programming, and performance-oriented developer tools.",
  keywords: ["Rust", "Systems Programming", "Linux", "Developer Tools", "Next.js", "CachyOS", "Arch Linux"],
  authors: [{ name: "Abderrahman Gouhmad" }],
  openGraph: {
    title: "Abderrahman Gouhmad | Systems & Rust Engineer",
    description: "Portfolio of Abderrahman Gouhmad, a software engineer specializing in Rust, Linux, systems programming, and performance-oriented developer tools.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abderrahman Gouhmad | Systems & Rust Engineer",
    description: "Portfolio of Abderrahman Gouhmad, a software engineer specializing in Rust, Linux, systems programming, and performance-oriented developer tools.",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const posts = getAllPosts()
  const blogPostsMeta = posts.map((p) => ({ slug: p.slug, title: p.title }))

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <CommandPalette blogPosts={blogPostsMeta} />
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
