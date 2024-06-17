import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "./components/Home/Navbar/ResponsiveNavbar";

const poppinsfont = Poppins({ 
  weight: ['200','300','400','500','600','700','800'],
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | David Herrera Costa",
  description: "Portfolio Project Website created with Next.js, React, Tailwind CSS and Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsfont.className} bg-[#000000d8]`}>
        <ResponsiveNavbar/>
        {children}
      </body>
    </html>
  );
}
