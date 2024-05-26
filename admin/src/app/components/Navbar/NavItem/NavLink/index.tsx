"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
const NavLink = ({ item }: { item?: { title: string; path: string, permission: boolean } }) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleLogout = async () => {
    await fetch("/api/logout");
    router.push("/login");
  };
  if (item) {
    if (item.permission) {
      return (
        <Link
          href={item.path}
          className={
            pathname.includes(item.path) ? "text-lg font-extrabold bg-black text-white hover:bg-white hover:text-black py-2 px-4 rounded-lg" : "hover:bg-black hover:text-white font-bold py-2 px-4 rounded-lg"

          }
        >
          {item.title}
        </Link>
      )
    }

  } else {
    return (
      <button className="hover:bg-black hover:text-white font-bold py-2 px-4 rounded-lg" onClick={handleLogout}> Logout</button>
    )
  }
};

export default NavLink;
