"use client";
import React from "react";
import AddUserForm from "../../Forms/AddUserForm";
import PageHeader from "../../PageHeader";
import PageLayout from "../../pageLayout";
import Link from "next/link";
import { RESULT_STATUS } from "@/constant";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AddUserFormDataTypes, UserAddReturnData } from "@/types";

const AddUserComponent = () => {
  const router = useRouter();
  const onAddingUser = async (AddUserData: AddUserFormDataTypes) => {
    try {
      const response = await fetch("/api/users/add-user", {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(AddUserData),
      });

      const AddUserResponse: UserAddReturnData = await response.json();
      if (AddUserResponse.status === RESULT_STATUS.FAILURE) {
        toast.error(AddUserResponse.message);
      } else if (AddUserResponse.status === RESULT_STATUS.SUCCESS) {
        toast.success(AddUserResponse.message);
        router.push("/users");
      }
    } catch (error: any) {
      console.error("New user not created:", error.message);
      toast.error(error.message);
    }
  };
  return (
    <PageLayout>
      <div className="flex-col ">
        <div className="flex gap-5 m-5">
          <Link href={"/users"}>{"<"}</Link>
          <PageHeader pageTitle="Add User" showAddButton={false} />
        </div>
        <div className="m-5 justify-between">
          <AddUserForm onAddingUser={onAddingUser} />
        </div>
      </div>
    </PageLayout>
  );
};

export default AddUserComponent;
