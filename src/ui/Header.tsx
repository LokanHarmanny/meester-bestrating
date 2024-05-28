"use client";

import MainMenu from "./MainMenu";
import { useEffect } from "react";
import { PhoneIcon, EmailIcon } from "./icons";

export default function Header() {
  let smallScreen = false;

  useEffect(() => {
    smallScreen = window.innerWidth < 1024;
  }, []);

  return (
    <div className="relative p-3">
      <div className="flex md:flex-row md:justify-center md:space-x-14 w-full">
        <div className="w-40 md:w-72 h-14 md:h-32 relative">
          {/* <Image
            src={`/images/${smallScreen ? "logoWithoutSlogan.png" : "logo.png"}`}
            alt={"logo"}
            fill
          /> */}
        </div>
        <div className="flex flex-col w-full md:w-[28rem] md:justify-between">
          <div className="flex flex-col space-y-2 self-end md:pt-2 ">
            <div className="flex space-x-1 items-center">
              <PhoneIcon size="1rem" color="#D8B064" />
              <span className="text-xs md:text-base">06 53 905 403</span>
            </div>
            <div className="flex space-x-1 items-center">
              <EmailIcon size="1rem" color="#D8B064" />
              <span className="text-xs md:text-base">
                info@meesterbestrating.nl
              </span>
            </div>
          </div>
          {!smallScreen && <MainMenu />}
        </div>
      </div>
      {smallScreen && <MainMenu />}
    </div>
  );
}
