"use client";
import React, { useEffect, useState } from "react";
import PageHeader from "@/app/components/PageHeader";
import PageLayout from "@/app/components/pageLayout";
import { UserFields } from "./UserFields";
import { UserData } from "./users";
import { RESULT_STATUS } from "@/constant";
import { toast } from "react-toastify";
import Table from "../Table";
import { UserDeleteReturnData } from "@/types";
const UserComponent = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  const handleDelete = async (_id: string) => {
    try {
      const response = await fetch(`/api/users/delete-user/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userDeleteResponse:UserDeleteReturnData = await response.json();
      if (userDeleteResponse.status === RESULT_STATUS.FAILURE) {
        toast.error(userDeleteResponse.message);
      } else if (userDeleteResponse.status === RESULT_STATUS.SUCCESS) {
        setUsers(users.filter((users) => users._id !== _id));
        toast.success(userDeleteResponse.message);
      }
    } catch (error: any) {
      console.error("Delete failed:", error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/users/get-all-users", {
          cache: "no-cache",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data.GetAllUsersReturnData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUser();
  }, []);
  

  return (
    <PageLayout>
      <div className="flex-col ">
        <div className="m-5">
          <PageHeader
            pageTitle="Users"
            showAddButton={true}
            addRouter={"/users/add-user"}
          />
        </div>
        <div className="m-5 justify-between">
          <Table
            data={users}
            fields={UserFields}
            handleDelete={handleDelete}
            editRoute={"/users/edit-user"}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default UserComponent;
