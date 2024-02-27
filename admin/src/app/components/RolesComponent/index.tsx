'use client'
import React, { useEffect, useState } from 'react'
import PageLayout from '../pageLayout';
import PageHeader from '../PageHeader';
import PCGrid from '../CommanComponents/PCGrid';

const RolesComponent = () => {
  const [roles, setRoles] = useState([]);



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
        setRoles(data.GetAllRolesReturnData);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchRoles();
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
       
          <PCGrid/>


      </div>
    </PageLayout>
  )
}

export default RolesComponent