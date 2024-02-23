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

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout");
      const userLogoutResponse: LogoutUserFormDataTypes = await response.json();
      router.push("/login");
    } catch (error: any) {
      console.error("Logout failed:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex gap-4 justify-end  ">
        {/* <p className="hover:text-blue-500">Element 1</p>
  <p className="hover:text-blue-500">Element 2</p> */}
      {links.map((link: { title: string; path: string }, index: number) => {
        return <NavLink key={index} item={link} />;
      })}
      <button className="m-2 cursor-pointer hover:text-blue-500  text-black" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default NavItems;
