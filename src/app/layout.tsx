import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meester Bestrating",
  description: "Uw specialist in (sier)bestrating",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex flex-col relative">
          <div className="bg-slate-200 w-screen h-[4.7rem] md:h-[9.5rem] absolute -z-1 "></div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
