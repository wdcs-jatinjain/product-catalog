'use client'
import React from 'react'
import AddUserForm from '../../Forms/AddUserForm'
import PageHeader from '../../PageHeader'
import PageLayout from '../../pageLayout'
import Link from 'next/link'
import AddUserValidationSchema from '@/app/(home)/users/add-user/userValidation'
import { RESULT_STATUS } from '@/constant'
import { AddUserFormDataTypes } from '@/types'
import router from 'next/router'
import { toast } from 'react-toastify'

const AddUserComponent = () => {
  const onAddingUser = async () => {
    console.log("🚀 ~ onAddingUser ~ UserInputFormData:", );
    try {
      await AddUserValidationSchema.validate({
        abortEarly: false,
      });
      const response = await fetch("/api/users/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UserInputFormData),
      });
      const AddUserResponse: any = await response.json();
      if (AddUserResponse.status === RESULT_STATUS.FAILURE) {
        toast.error(AddUserResponse.message);
      } else if (AddUserResponse.status === RESULT_STATUS.SUCCESS) {
        toast.success(AddUserResponse.message);
        router.push("/users");
      }
    } catch (error: any) {
      console.error("New User not created:", error.message);
      toast.error(error.message);
    }
  };
  return (
    <PageLayout>
    <div className='flex-col '>
      <div className='flex gap-5 m-5'>
      <Link href={'/users'}>{'<'}</Link>
      <PageHeader pageTitle='Add User' showAddButton={false}  />
      </div>
    
      <div className='m-5 justify-between'>
        <AddUserForm onAddingUser={onAddingUser}/>
      </div>
    </div>
  </PageLayout>
  )
}

export default AddUserComponent