import MenuItem from "./MenuItem";

export default function MainMenu() {
  return (
    <div className="flex space-x-10 justify-center w-full mt-10">
      <MenuItem name="Home" link="/" />
      <MenuItem name="Portfolio" link="/Portfolio" />
      <MenuItem name="Contact" link="/Contact" />
    </div>
  );
}
