'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { RESULT_STATUS } from '@/constant'
import { toast } from 'react-toastify'
import PageLayout from '../../pageLayout'
import PageHeader from '../../PageHeader'
import { useRouter } from 'next/navigation'
import { EditRoleFormDataTypes, RoleEditResponseData } from '@/types'
import { RoleData } from '../roles'
import EditRoleForm from '../../Forms/EditRoleForm'

const EditRoleComponent = ({ roleId }: { roleId: string }) => {
  const [roleDetails, setRoleDetails] = useState<RoleData>()
  const router = useRouter()
  const onEditingRole = async (EditRoleData:EditRoleFormDataTypes) => {
    try {
      const response = await fetch(`/api/roles/edit-role/${roleId}`,
        {
          method: "PATCH",
          cache: 'no-cache',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(EditRoleData),
        }
      );
      const RoleEditedReturnData: RoleEditResponseData = await response.json();
      if (RoleEditedReturnData.status === RESULT_STATUS.FAILURE) {
        toast.error(RoleEditedReturnData.message);
      } else if (RoleEditedReturnData.status === RESULT_STATUS.SUCCESS) {
        toast.success(RoleEditedReturnData.message);
        router.push('/roles')
      }
    } catch (error: any) {
      console.error("New Role not created:", error.message);
      toast.error(error.message);
    }
  };
  const fetchRoleDetails = async () => {
    try {
      const response = await fetch(`/api/roles/get-role/${roleId}`, {
        cache: 'no-cache'
      });
      const { GetRoleReturnData } = await response.json();
      if (GetRoleReturnData.status === 'Success') { setRoleDetails(GetRoleReturnData.data); }
      else {
        toast.error(GetRoleReturnData.message)
      }
      console.log(response)
    } catch (error) {
      console.error("Error fetching role:", error);
    }
  }

  useEffect(() => {
  
    fetchRoleDetails()
  }, [])


  return (
    <PageLayout>
      <div className='flex-col '>
        <div className='flex gap-5 m-5'>
          <Link href={'/roles'}>{'<'}</Link>
          <PageHeader pageTitle='Edit Role' showAddButton={false} />
        </div>
        <div className='m-5 justify-between'>
          {roleDetails && <EditRoleForm roleDetails={roleDetails} setRoleDetails={setRoleDetails} onEditingRole={onEditingRole} />}
        </div>
      </div>
    </PageLayout>
  )
}

export default EditRoleComponent