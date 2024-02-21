"use client";
import { useRouter } from "next/navigation";

import UserComponent from "@/app/components/Users";
import React from "react";

const UsersPage = () => {
  const router = useRouter();

  return (
    <div className="border-[10px] min-h-screen">
      <div className="flex gap-2 justify-between m-3">
        <h1 className="font-extrabold text-3xl m-4">Users</h1>
        <button onClick={() => router.push("/users/adduser")}>
          + Add User
        </button>
      </div>
      <div className="m-3 justify-between">
        <UserComponent />
      </div>
    </div>
  );
};

export default UsersPage;
