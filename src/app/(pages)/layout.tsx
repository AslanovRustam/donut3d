import type { Metadata } from "next";
import { Anton } from "next/font/google";
import Navbar from "../components/Navbar";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    template: "%s | GSAP animations",
    default: "GSAP animations",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${anton.variable}  antialiased relative`}>
        <div className="absolute md:text-4xl z-1 opacity-50">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
