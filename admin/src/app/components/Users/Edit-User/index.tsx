'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { RESULT_STATUS } from '@/constant'
import { toast } from 'react-toastify'
import { UserData } from '../users'
import PageLayout from '../../pageLayout'
import PageHeader from '../../PageHeader'
import EditUserForm from '../../Forms/EditUserForm'
import { useRouter } from 'next/navigation'
import { EditUserFormDataTypes, UserEditResponseData } from '@/types'

const EditUserComponent = ({ userId }: { userId: string }) => {
  const [userDetails, setUserDetails] = useState<UserData>()
  const router = useRouter()
  const onEditingUser = async (EditUserData: EditUserFormDataTypes) => {
    try {
      const response = await fetch(`/api/users/edit-user/${userId}`,
        {
          method: "PATCH",
          cache: 'no-cache',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(EditUserData),
        }
      );
      const UserEditedReturnData: UserEditResponseData = await response.json();
      if (UserEditedReturnData.status === RESULT_STATUS.FAILURE) {
        toast.error(UserEditedReturnData.message);
      } else if (UserEditedReturnData.status === RESULT_STATUS.SUCCESS) {
        toast.success(UserEditedReturnData.message);
        router.push('/users')
      }
    } catch (error: any) {
      console.error("New User not created:", error.message);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    const fetchUserDetails = async () => {

      try {
        const response = await fetch(`/api/users/get-user/${userId}`, {
          cache: 'no-cache'
        });
        const { GetUserReturnData } = await response.json();
        if (GetUserReturnData.status === 'Success') { setUserDetails(GetUserReturnData.data); }
        else {
          toast.error(GetUserReturnData.message)
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUserDetails()
  }, [])


  return (
    <PageLayout>
      <div className='flex-col '>
        <div className='flex gap-5 m-5'>
          <Link href={'/users'}>{'<'}</Link>
          <PageHeader pageTitle='Edit User' showAddButton={false} />
        </div>
        <div className='m-5 justify-between'>
          {userDetails && <EditUserForm userDetails={userDetails} setUserDetails={setUserDetails} onEditingUser={onEditingUser} />}
        </div>
      </div>
    </PageLayout>
  )
}

export default EditUserComponent