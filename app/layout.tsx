import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { cN } from "@utils/tw-marge";
import { GoogleAnalytics } from '@next/third-parties/google'
import Head from "next/head";
import Script from "next/script";
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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-GD7MT0KN8F" />
      <Script
        id="google-analytics"
        async
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-GD7MT0KN8F');
            `,
        }}
      />
      <body className={cN(spaceGrotesk.className, 'relative')}>{children}</body>
      <GoogleAnalytics gaId="G-GD7MT0KN8F" />
    </html>
  );
}
