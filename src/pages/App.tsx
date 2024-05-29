import Header from "../ui/Header";

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col relative">
          <div className="bg-slate-200 w-screen h-[4.7rem] md:h-[9.5rem] absolute -z-1 "></div>
          <Header />
          <div className="mt-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
