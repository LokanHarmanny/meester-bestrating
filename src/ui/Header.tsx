import Image from "next/image";
import MainMenu from "./MainMenu";

export default function Header() {
  return (
    <div className="flex  bg-slate-200 w-screen mt-3 mx-auto">
      <div className="flex justify-center relative w-full">
        <div className="absolute top-1 left-5 z-5 ">
          <Image
            src={"/images/logo.png"}
            alt={"logo"}
            width={250}
            height={250}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex space-x-5">
            <div>Telefoonnummer + icoontje</div>
            <div>mailadres + icoontje</div>
          </div>
          <MainMenu />
        </div>
      </div>
    </div>
  );
}
