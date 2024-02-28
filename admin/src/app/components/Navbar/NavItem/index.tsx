"use client";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { PERMISSIONS } from "@/permission";
const NavItems = () => {
  const [permissions, setPermissions] = useState(Object.values(PERMISSIONS))
  const links = [
    {
      title: "API Logs",
      path: "/api-log",
      permission: permissions.includes(PERMISSIONS.API_LOGS_CAN_VIEW),
    },
    {
      title: "Users",
      path: "/users",
      permission: permissions.includes(PERMISSIONS.USER_CAN_VIEW)
    },
    {
      title: "Roles",
      path: "/roles",
      permission: permissions.includes(PERMISSIONS.ROLES_CAN_VIEW)
    },
    {
      title: "Customers",
      path: "/customer",
      permission: permissions.includes(PERMISSIONS.CUSTOMER_CAN_VIEW)
    },
    {
      title: "Orders",
      path: "/orders",
      permission: permissions.includes(PERMISSIONS.ORDER_CAN_VIEW)

    },
    {
      title: "Products",
      path: "/products",
      permission: permissions.includes(PERMISSIONS.PRODUCT_CAN_VIEW)
    },
    {
      title: "Reports",
      path: "/reports",
      permission: permissions.includes(PERMISSIONS.REPORTING_CAN_VIEW)
    },
  ];

  useEffect(() => {
    const userPermission = localStorage?.getItem('permissions')
    if (userPermission) {
      setPermissions(JSON.parse(userPermission))
    }
  }, [])
  return (
    <div className="flex gap-1 justify-end  ">

      {links.map((link: { title: string; path: string, permission: boolean }, index: number) => (
        <div key={index}>
          <NavLink item={link} />
        </div>
      ))}
      <div key={'logout'}>
        <NavLink />

      </div>
    </div>
  );
};

export default NavItems;
