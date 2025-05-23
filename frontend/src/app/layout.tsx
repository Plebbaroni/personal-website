import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "jaredschulz",
  description: "Personal Website",
  icons: {
    icon: "/icons/greenicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
