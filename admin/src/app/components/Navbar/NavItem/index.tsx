"use client";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";
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
     
      {links.map((link: { title: string; path: string }, index: number) => (
         <div key={index}>
        <NavLink item={link} />
        </div>
      ))}
         <div  key={'logout'}>
         <NavLink/>

         </div>
    </div>
  );
};

export default NavItems;
