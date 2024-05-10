"use client";

import Image from "next/image";
import MainMenu from "./MainMenu";
import PhoneIcon from "./PhoneIcon";
import EmailIcon from "./EmailIcon";

export default function Header() {
  const smallScreen = window.innerWidth < 1024;

  return (
    <div className="relative p-3">
      <div className="flex md:justify-center w-full md:mt-3 md:space-x-20">
        <div className="w-32 md:w-72 h-14 md:h-32 relative">
          <Image
            src={`/images/${smallScreen ? "logoWithoutSlogan.png" : "logo.png"}`}
            alt={"logo"}
            fill
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:space-x-8 space-y-2 self-end">
            <div className="flex space-x-1 items-center">
              <PhoneIcon size="1rem" color="#000000" />
              <span className="text-xs">06 53 905 403</span>
            </div>
            <div className="flex space-x-1 items-center">
              <EmailIcon size="1rem" color="#080341" />
              <span className="text-xs">info@meesterbestrating.nl</span>
            </div>
          </div>
          {!smallScreen && <MainMenu />}
        </div>
      </div>
      {smallScreen && <MainMenu />}
    </div>
  );
}
