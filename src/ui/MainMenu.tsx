import Image from "next/image";
import banner from "../../public/banner.png";
import MenuItem from "./MenuItem";

export default function MainMenu() {
  return (
    <div className="relative flex items-center">
      <div className="z-10 absolute top-5 w-full">
        <div className="flex flex-row space-x-10 justify-center w-full ">
          <MenuItem name="Home" link="/" />
          <MenuItem name="Portfolio" link="/Portfolio" />
          <MenuItem name="Contact" link="/Contact" />
        </div>
      </div>

      <Image
        src={banner}
        alt={"Banner straatwerk"}
        style={{
          width: "100%",
          height: "auto",
        }}
        className="z-0"
      />
    </div>
  );
}
