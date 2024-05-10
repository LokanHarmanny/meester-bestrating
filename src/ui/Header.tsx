"use client";

import Image from "next/image";
import MainMenu from "./MainMenu";

export default function Header() {
  const smallScreen = window.innerWidth < 1024;

  return (
    <div className="flex relative">
      {/* <div className="bg-slate-200 w-screen h-20 absolute top-3 left-0 -z-1 "></div> */}
      <div className="flex justify-center w-full md:mt-3 md:space-x-20">
        <div className="w-28 md:w-72 h-14 md:h-32 relative">
          <Image
            src={`/images/${smallScreen ? "logoWithoutSlogan.png" : "logo.png"}`}
            alt={"logo"}
            fill
          />
        </div>
        <div className="flex flex-col">
          <div className="flex md:space-x-8">
            <div>Telefoonnummer + icoontje</div>
            <div>mailadres + icoontje</div>
          </div>
          <MainMenu />
        </div>
      </div>
    </div>
  );
}
