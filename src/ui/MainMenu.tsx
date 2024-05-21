import MenuItem from "./MenuItem";

export default function MainMenu() {
  return (
    <div className="flex space-x-6 md:space-x-10 justify-center w-full mt-3 md:justify-end">
      <MenuItem name="Home" link="/" />
      <MenuItem name="Portfolio" link="/" />
      <MenuItem name="Contact" link="/" />
    </div>
  );
}
