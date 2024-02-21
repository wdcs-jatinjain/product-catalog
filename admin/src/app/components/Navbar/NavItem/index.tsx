"use client";
import React from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import NavLink from "./NavLink";
import Link from "next/link";
import { toast } from "react-toastify";

import { RESULT_STATUS } from "@/constant";
import { LogoutUserFormDataTypes } from "@/types";
const NavItems = () => {
    const router = useRouter();
  // const pathname = usePathname();

  const links = [
    {
      title: "Users",
      path: "/users",
    },
    {
      title: "Orders",
      path: "/orders",
    },
    {
      title: "Products",
      path: "/products",
    },
  ];

  const handleLogout = async ()=> {
   try{
        const response = await fetch("/api/logout");
          const userLogoutResponse: LogoutUserFormDataTypes = await response.json();
          router.push("/login");
        } catch (error: any) {
          console.error("Logout failed:", error.message);
          toast.error(error.message);
        }
    
  }

  return (
    <div className="flex gap-4 justify-end">
      {links.map((link: { title: string; path: string }, index: number) => {
        return <NavLink key={index} item={link} />;
      })}
      <button  className="m-2 cursor-pointer text-black" 
      onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default NavItems;
