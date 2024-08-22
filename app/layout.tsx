import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { cN } from "@utils/tw-marge";

export const metadata: Metadata = {
  title: "Yong | About",
  description: "Yong Hua Chen's Profile",
};

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cN(spaceGrotesk.className,'relative')}>{children}</body>
    </html>
  );
}
