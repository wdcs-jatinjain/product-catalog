// 'use client'
// import React, { useEffect, useState } from 'react'
// import PageHeader from '../PageHeader'
// import PageLayout from '../pageLayout'
// import Link from 'next/link'
// import EditUserForm from '../Forms/EditUserForm'
// import { UserData } from '../Users/users'
// import { RESULT_STATUS } from '@/constant'
// import { toast } from 'react-toastify'

// const EditUserComponent = ({userId}:{userId:string}) => {
//   const[userDetails,setUserDetails] = useState<UserData>()

// const onEditingUser = async (_id: string) => {
  
// // useEffect( ()=> {
// // const getUserToEdit = await fetch("/api/users/get-user" ) 
// // console.log(getUserToEdit)
// // },[userId])

// try {
   
//     const response = await fetch("/api/users/edit-user"   );
//     const EditUserResponse: any = await response.json();
//     if (EditUserResponse.status === RESULT_STATUS.FAILURE) {
//       toast.error(EditUserResponse.message);
//     } else if (EditUserResponse.status === RESULT_STATUS.SUCCESS) {
//       toast.success(EditUserResponse.message);
//     }
//   } catch (error: any) {
//     console.error("New User not created:", error.message);
//     toast.error(error.message);
//   }
// };
// useEffect(() => {
//   const fetchUserDetails = async () => {

//     try {
//       const response = await fetch(`/api/users/get-user/${userId}`, {
//         cache: 'no-cache'
//       });
//       const {GetAllUsersReturnData} = await response.json();
//       if(GetAllUsersReturnData.status === 'Success')
//       {setUserDetails(GetAllUsersReturnData.data);}
//       else{
//         toast.error(GetAllUsersReturnData.message)
//       }
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   }
//   fetchUserDetails()
// }, [])  
//   return (
//     <PageLayout>
//     <div className='flex-col '>
//       <div className='flex gap-5 m-5'>
//       <Link href={'/users'}>{'<'}</Link>
//       <PageHeader pageTitle='Edit User' showAddButton={false}  />
//       </div>
    
//       <div className='m-5 justify-between'>
//        <EditUserForm userDetails={userDetails}  setUserDetails={setUserDetails} />
//       </div>
//     </div>
//   </PageLayout>
//   )
// }

// export default EditUserComponent