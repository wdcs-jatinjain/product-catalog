import React from "react";
import NavbarComponent from "../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {


  return (
    <>
      <NavbarComponent />

      {children}
    </>
  );
}
