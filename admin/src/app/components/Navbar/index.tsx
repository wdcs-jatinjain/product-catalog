import React from "react";
import NavItems from "./NavItem";
import Image from "next/image";
import Link from "next/link";
const NavbarComponent = () => {
  return (
    <div className="flex justify-between border-[10px] p-5 ">
      <Link href={"/"}>
        <Image src="/logo.svg" alt="" width={40} height={40} />
      </Link>
      <div className="bg-orange-900 rounded-xl p-1 gap-2 hover:white">
        <NavItems />
      </div>
    </div>
  );
};

export default NavbarComponent;
