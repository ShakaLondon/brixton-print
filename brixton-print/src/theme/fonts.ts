import { Geist, Geist_Mono, Noto_Sans, Poppins } from "next/font/google";

export const geist = Geist({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const notoMono = Noto_Sans({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
