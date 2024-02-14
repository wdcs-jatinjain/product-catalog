"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-8 text-xl font-bold">Welcome to Our Home Page</div>
        <Link
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          href={"/register"}
        >
          Register Now
        </Link>
      </div>
    </div>
  );
}
