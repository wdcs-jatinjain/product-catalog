"use client";
import React, { useEffect, useState } from "react";
import PageHeader from "@/app/components/PageHeader";
import PageLayout from "@/app/components/pageLayout";
import { RoleFields } from "./RoleFields";
import { RoleData } from "./roles";
import { RESULT_STATUS } from "@/constant";
import { toast } from "react-toastify";
import { RoleDeleteReturnData } from "@/types";
import RoleTable from "./RoleTable";

const RoleComponent = () => {
  const [roles, setRoles] = useState<RoleData[]>([]);

  const handleDelete = async (_id: string) => {
    try {
      const response = await fetch(`/api/roles/delete-role/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const roleDeleteResponse:RoleDeleteReturnData = await response.json();
      if (roleDeleteResponse.status === RESULT_STATUS.FAILURE) {
        toast.error(roleDeleteResponse.message);
      } else if (roleDeleteResponse.status === RESULT_STATUS.SUCCESS) {
        setRoles(roles.filter((roles) => roles._id !== _id));
        toast.success(roleDeleteResponse.message);
      }
    } catch (error: any) {
      console.error("Delete failed:", error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await fetch("/api/roles/get-all-roles", {
          cache: "no-cache",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch roles");
        }
        const data = await response.json();
        setRoles(data.GetAllRolesReturnData.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchRole();
  }, []);
  

  return (
    <PageLayout>
      <div className="flex-col ">
        <div className="m-5">
          <PageHeader
            pageTitle="Roles"
            showAddButton={true}
            addRouter={"/roles/add-role"}
            className={"bg-black text-white flex hover:bg-white hover:text-black font-bold py-2 px-4 rounded-lg"}
          />
        </div>
        <div className="m-5 justify-between">
          <RoleTable
            data={roles}
            fields={RoleFields}
            handleDelete={handleDelete}
            editRoute={"/roles/edit-role"}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default RoleComponent;
