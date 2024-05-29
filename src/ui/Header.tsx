import MainMenu from "./MainMenu";
import { useEffect } from "react";
import { PhoneIcon, EmailIcon } from "./icons";

export default function Header() {
  let smallScreen = window.innerWidth < 1024;

  return (
    <div className="relative p-3">
      <div className="flex md:flex-row md:justify-center md:space-x-14 w-full">
        <div className="w-40 md:w-72 h-14 md:h-32 relative">
          <img
            src={`/images/${smallScreen ? "logoWithoutSlogan.png" : "logo.png"}`}
            alt={"logo"}
          />
        </div>
        <div className="flex flex-col w-full md:w-[28rem] md:justify-between">
          <div className="flex flex-col space-y-2 self-end md:pt-2 ">
            <div className="flex space-x-2 items-center">
              <PhoneIcon size="1rem" color="#D8B064" />
              <a href="tel:+31653905403" className="text-xs md:text-base">
                06 53 905 403
              </a>
            </div>
            <div className="flex space-x-2 items-center">
              <EmailIcon size="1rem" color="#D8B064" />
              <a
                href="mailto:info@meesterbestrating.nl"
                className="text-xs md:text-base"
              >
                info@meesterbestrating.nl
              </a>
            </div>
          </div>
          {!smallScreen && <MainMenu />}
        </div>
      </div>
      {smallScreen && <MainMenu />}
    </div>
  );
}
