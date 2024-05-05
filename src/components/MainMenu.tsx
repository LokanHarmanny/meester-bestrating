import Image from "next/image";
import banner from "../../public/banner.png";

export default function MainMenu() {
  return (
    <div className="relative flex items-center">
      <div className="z-10 absolute top-5 w-full">
        <div className="flex flex-row space-x-10 justify-center w-full ">
          <MenuItem itemName="Home" />
          <MenuItem itemName="Portfolio" />
          <MenuItem itemName="Contact" />
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

function MenuItem({ itemName }: { itemName: string }) {
  return (
    <span className="cursor-pointer hover:underline font-bold text-slate-100">
      {itemName}
    </span>
  );
}
