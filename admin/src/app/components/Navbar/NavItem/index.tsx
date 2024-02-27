"use client";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";
const NavItems = () => {
  const router = useRouter();

  const links = [
    {
      title: "API Logs",
      path: "/api-log",
      permission: 'API_LOGS_CAN_VIEW'
    },
    {
      title: "Users",
      path: "/users",
      permission: 'USER_CAN_VIEW'
    },
    {
      title: "Roles",
      path: "/roles",
      permission: 'ROLES_CAN_VIEW'
    },
    {
      title: "Customers",
      path: "/customer",
      permission: 'CUSTOMER_CAN_VIEW'
    },
    {
      title: "Orders",
      path: "/orders",
      permission: 'ORDER_CAN_VIEW'

    },
    {
      title: "Products",
      path: "/products",
      permission: 'PRODUCT_CAN_VIEW'
    },
    {
      title: "Reports",
      path: "/reports",
      permission: 'REPORTING_CAN_VIEW'
    },
  ];
  return (
    <div className="flex gap-1 justify-end  ">
     
      {links.map((link: { title: string; path: string, permission: string }, index: number) => (
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
