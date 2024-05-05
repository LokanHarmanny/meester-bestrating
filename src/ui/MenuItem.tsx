type MenuItemProps = {
  name: string;
  link: string;
};

export default function MenuItem({ name, link }: MenuItemProps) {
  return (
    <a
      href={link}
      className="cursor-pointer hover:underline font-bold text-slate-100"
    >
      {name}
    </a>
  );
}