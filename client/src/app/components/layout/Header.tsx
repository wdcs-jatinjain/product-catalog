"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="/">
          {" "}
          IPHONE UNI
        </Link>
        <Link href={"/"}>HOME</Link>
        <Link href={""}>PRODUCTS</Link>
        <Link href={""}>ABOUT</Link>
        <Link href={""}>CONTACT US</Link>
      </nav>

      <Link href="/login">Login </Link>
      <Link
        href={"/register"}
        className="bg-primary text-white rounded-full px-8 py-2"
      >
        Register{" "}
      </Link>
    </header>
  );
}
