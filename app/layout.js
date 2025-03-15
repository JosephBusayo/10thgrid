import { Geist, Geist_Mono, Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";
import Navbar from "./sections/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sortsMillGoudy = Sorts_Mill_Goudy({
  variable: "--font-sorts-mill-goudy",
  subsets: ["latin"],
  weight: ["400"], // Sorts Mill Goudy only has regular weight
});

export const metadata = {
  title: "10thGrid ",
  description: "Design Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${sortsMillGoudy.variable} antialiased bg-black text-white font-mono`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
