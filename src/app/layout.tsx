import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainMenu from "@/ui/MainMenu";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meester Bestrating",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen w-screen flex justify-center`}
      >
        <Image
          src={"/banner.jpg"}
          alt={"Banner straatwerk"}
          fill={true}
          className="cover-object z-0 opacity-50"
        />

        <div className="flex flex-col items-center bg-slate-100 z-10 w-[75vw] mt-20 rounded opacity-80">
          <MainMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
