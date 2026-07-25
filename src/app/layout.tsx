import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const anteaterHand = localFont({
  src: "../fonts/AnteaterHand.otf",
  variable: "--font-anteater-hand",
  display: "swap",
});

const lora = localFont({
  src: [
    { path: "../fonts/Lora-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Lora-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Lora-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-lora",
  display: "swap",
});

const bizUDMincho = localFont({
  src: [
    { path: "../fonts/BIZUDMincho-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/BIZUDMincho-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-biz-mincho",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kitomi-tuzzle.com"),
  title: "Kitomi Shinsuke",
  description: "design / illustration / animation",
  openGraph: {
    title: "Kitomi Shinsuke",
    description: "design / illustration / animation",
    url: "https://www.kitomi-tuzzle.com",
    siteName: "Kitomi Shinsuke",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitomi Shinsuke",
    description: "design / illustration / animation",
    images: ["/images/og.png"],
  },
  verification: {
    google: "4MX-f8hJfcjzwRdiGELAi-BsebSMZkIr1-zunyVb5vo",
  },
  other: {
    "format-detection": "telephone=no, date=no, address=no, email=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${anteaterHand.variable} ${lora.variable} ${bizUDMincho.variable}`}
    >
      <body>{children}</body>
      <GoogleAnalytics gaId="G-17NLXQJXQY" />
    </html>
  );
}
