"use client";
// import React, { useEffect, useState } from "react";
// import AddRoleForm from "../../Forms/AddRoleForm";
// import PageHeader from "../../PageHeader";
// import PageLayout from "../../pageLayout";
// import Link from "next/link";
// import { RESULT_STATUS } from "@/constant";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { AddRoleFormDataTypes, RoleAddReturnData } from "@/types";

// const AddRoleComponent = () => {
//   const [roles, setRoles] = useState<[{_id: string, name: string}]>([{_id:"",name:""}]);
//   const router = useRouter();
//   const onAddingRole = async (AddRoleData: AddRoleFormDataTypes) => {
//     console.log(AddRoleData);
    
//     try {
//       const response = await fetch("/api/roles/add-role", {
//         method: "POST",
//         cache: "no-cache",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(AddRoleData),
//       });

//       const AddRoleResponse: RoleAddReturnData = await response.json();
//       if (AddRoleResponse.status === RESULT_STATUS.FAILURE) {
//         toast.error(AddRoleResponse.message);
//       } else if (AddRoleResponse.status === RESULT_STATUS.SUCCESS) {
//         toast.success(AddRoleResponse.message);
//           router.push("/roles");
//       }
//     } catch (error: any) {
//       console.error("New role not created:", error.message);
//       toast.error(error.message);
//     }
//   };
//   useEffect(()=>{
//     const fetchRoles=async()=>{
//       try {
//         const response = await fetch("/api/roles/get-all-roles", {
//           cache: "no-cache",
//         });
//         if (!response.ok) {
//           throw new Error("Failed to fetch roles");
//         }
//         const data = await response.json();
//         setRoles(data.GetAllRolesReturnData.data);
//       } catch (error) {
//         console.error("Error fetching roles:", error);
//       }
//     }
//     fetchRoles();
//   })
//   return (
//     <PageLayout>
//       <div className="flex-col ">
//         <div className="flex gap-5 m-5">
//           <Link href={"/users"}>{"<"}</Link>
//           <PageHeader pageTitle="Add User" showAddButton={false} />
//         </div>
//         <div className="m-5 justify-between">
//           <AddRoleForm roles={roles} onAddingRole={onAddingRole} />
//         </div>
//       </div>
//     </PageLayout>
//   );
// };

// export default AddRoleComponent;


import React, { useEffect, useState } from "react";
import AddRoleForm from "../../Forms/AddRoleForm";
import PageHeader from "../../PageHeader";
import PageLayout from "../../pageLayout";
import Link from "next/link";
import { RESULT_STATUS } from "@/constant";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
// import { AddRoleFormDataTypes, RoleAddReturnData } from "@/types";

const AddRoleComponent = () => {
  const [roles, setRoles] = useState<[{_id: string, name: string}]>([{_id:"",name:""}]);

  const router = useRouter();
  const onAddingRole = async (AddRoleData:any) => {
    try {
      const response = await fetch("/api/roles/add-role", {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(AddRoleData),
      });
      const AddRoleResponse= await response.json();
      console.log("🚀 ~ onAddingRole ~ AddRoleResponse:", AddRoleResponse)
      if (AddRoleResponse.status === RESULT_STATUS.FAILURE) {
        toast.error(AddRoleResponse.message);
      } else if (AddRoleResponse.status === RESULT_STATUS.SUCCESS) {
        toast.success(AddRoleResponse.message);
        router.push("/roles");
      }
    } catch (error: any) {
      console.error("New role not created:", error.message);
      toast.error(error.message);
    }
  };

  const fetchRoles = async () => {
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
      toast.error("Error fetching roles");
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []); 

 

  return (
    <PageLayout>
      <div className="flex-col ">
        <div className="flex gap-5 m-5">
          <Link href={"/roles"}>{"<"}</Link>
          <PageHeader pageTitle="Add Role" showAddButton={false} />
        </div>
        <div className="m-5 justify-between">
          <AddRoleForm roles={roles} onAddingRole={onAddingRole} />
        </div>
      </div>
    </PageLayout>
  );
};

export default AddRoleComponent;
