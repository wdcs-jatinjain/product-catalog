'use client'
import React, { useEffect, useState } from 'react'
import PageLayout from '../pageLayout';
import PageHeader from '../PageHeader';
import PCGrid from '../CommanComponents/PCGrid';
import { PERMISSIONS } from '@/permission';

const RolesComponent = () => {
  const [roles, setRoles] = useState([]);
  const userPermissions = localStorage.getItem('permissions');
  useEffect(() => {
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
      }
    };
    if(userPermissions?.includes(PERMISSIONS.ROLES_CAN_VIEW)){
      fetchRoles();
    }
  }, [userPermissions]);
  const ActionArray = [];
  if (userPermissions?.includes(PERMISSIONS.ROLES_CAN_EDIT)) {
    ActionArray.push("edit");
  }

  if (userPermissions?.includes(PERMISSIONS.ROLES_CAN_DELETE)) {
    ActionArray.push("delete");
  }
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
          <PCGrid
          colDef={[{field: '_id', headerName: "ID", width: 550, suppressSizeToFit: true},{field: 'name', headerName: "Name", width: 595, suppressSizeToFit: true}, {field: 'action', headerName: "Actions", width: 600,suppressSizeToFit: true}]}
          rowData = {roles}
          actionArray ={ActionArray}
          />


      </div>
    </PageLayout>
  )
}

export default RolesComponent