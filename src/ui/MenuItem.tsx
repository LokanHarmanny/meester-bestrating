import { Link } from "react-router-dom";

type MenuItemProps = {
  name: string;
  link: string;
};

export default function MenuItem({ name, link }: MenuItemProps) {
  return (
    <Link to={link} className="cursor-pointer hover:underline font-bold ">
      {name}
    </Link>
  );
}
