"use client";
import React from "react";
import NavbarComponent from "../components/Navbar";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/login" && <NavbarComponent />}

      {children}
    </>
  );
}
