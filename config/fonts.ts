import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
// app/fonts.ts
import localFont from "next/font/local";

export const letteraMono = localFont({
  src: "../public/ndot/LetteraMonoLLCondLight-Regular.otf",
  weight: "300",
  style: "normal",
  variable: "--font-lettera-mono",
});

export const ndot47 = localFont({
  src: "../public/ndot/ndot-47-inspired-by-nothing.otf",
  weight: "400",
  style: "normal",
  variable: "--font-ndot47",
});

export const ndot55 = localFont({
  src: "../public/ndot/Ndot-55.otf",
  weight: "500",
  style: "normal",
  variable: "--font-ndot55",
});

export const ntype82Headline = localFont({
  src: "../public/ndot/NType82-Headline.otf",
  weight: "700",
  style: "normal",
  variable: "--font-ntype82-headline",
});

export const ntype82Mono = localFont({
  src: "../public/ndot/NType82Mono-Regular.otf",
  weight: "400",
  style: "normal",
  variable: "--font-ntype82-mono",
});

export const ntype82 = localFont({
  src: "../public/ndot/NType82-Regular.otf",
  weight: "400",
  style: "normal",
  variable: "--font-ntype82",
});

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
