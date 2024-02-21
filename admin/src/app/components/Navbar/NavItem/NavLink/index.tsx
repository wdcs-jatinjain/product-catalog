"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }: {item : {title: string, path: string}}) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={pathName.includes(item.path) ? 'bg-black text-white rounded-2xl p-2 ' : 'p-1'}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;