"use client";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";
import { toast } from "react-toastify";

import { LogoutUserFormDataTypes } from "@/types";
const NavItems = () => {
  const router = useRouter();

  const links = [
    {
      title: "API Logs",
      path: "/api-log",
    },
    {
      title: "Users",
      path: "/users",
    },
    {
      title: "Roles",
      path: "/roles",
    },
    {
      title: "Customers",
      path: "/customer",
    },
    {
      title: "Orders",
      path: "/orders",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Reports",
      path: "/reports",
    },
  ];
  return (
    <div className="flex gap-1 justify-end  ">
     
      {links.map((link: { title: string; path: string }, index: number) => {
        return <>
        <NavLink key={index} item={link} />
        </>
      })}
      <NavLink />
    </div>
  );
};

export default NavItems;
