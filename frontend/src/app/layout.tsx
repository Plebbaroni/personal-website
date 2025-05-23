import type { Metadata } from "next";
import './globals.css';
import Navbar from "../components/navbar/Navbarlol";
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
