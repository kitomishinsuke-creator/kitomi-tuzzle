import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Kitomi Shinsuke",
  description: "design / illustration / animation",
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
    </html>
  );
}
