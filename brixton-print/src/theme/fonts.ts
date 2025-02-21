"use client";
import { Geist, Geist_Mono, Poppins, Noto_Sans } from "next/font/google";

export const geist = Geist({
  weight: ["400", "700"],
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  weight: ["400", "700"],
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const notoMono = Noto_Sans({
  weight: ["100", "400", "700", "900"],
  variable: "--font-noto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});
