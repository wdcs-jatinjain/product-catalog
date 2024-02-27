import React from "react";
import NavItems from "./NavItem";
import Image from "next/image";
import Link from "next/link";
const NavbarComponent = () => {
  return (
    <div className="flex justify-between border-[10px] p-5 items-center">
      <Link href={"/"}>
        <Image src="/logo.svg" alt="" width={70} height={50} />
      </Link>
      <div className=" rounded-xl p-4 gap-3 ">
        <NavItems />
      </div>
    </div>
  );
};

export default NavbarComponent;
