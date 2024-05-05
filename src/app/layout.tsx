import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainMenu from "@/ui/MainMenu";

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
        className={`${inter.className} bg-slate-100 flex h-screen flex-col items-center px-24 py-16 `}
      >
        <MainMenu />
        {children}
      </body>
    </html>
  );
}
