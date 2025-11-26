import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vetëvendosje",
  description: "Lëvizja Vetëvendosje",
  icons: {
    icon: "/vv.svg",
    shortcut: "/vv.svg",
    apple: "/vv.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/vv.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}