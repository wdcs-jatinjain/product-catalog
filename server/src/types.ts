export type loginBody = {
  email: string;
  password: string;
};

export type loginReturnBody = {
  status: string,
  message: string,
  token: string,
  permissions:string
}

export type registerBody = {
  name: string;
  email: string;
  password: string;
  phone: string;
  zipCode: string;
};

export type addUserBody = {
  name: string;
  email: string;
  role:string
  streetAddress:string
  postalCode:string
  city:string
  country:string
  phone:string
  password:string
}

export type editUserBody = {
  name: string;
  email: string;
  role:string
  streetAddress:string
  postalCode:string
  city:string
  country:string
  phone:string
  password:string
  id:string
}

export type deleteUserRes ={
  status:string
  message:string
}

export type deleteRoleRes ={
  status:string
  message:string
}

export type addUserRes = {
  
    status:string
    message: string
    data?: {
      id: string
    }
}

export type addRoleBody = {
  name:string

}
export type addRoleRes = {
  status:string
  message: string
  data?: {
    id: string
  }
}
 type data = {
  _id: string,
  name: string
}
export type getAllRolesType={
  status: string
  message: string
  data: data[]
}

export type getRoleType={
  status: string
  message: string
  data: data[]
}


export type editRoleRes={
  status: string
  message: string
  data?:{
    updatedRole:string 
  } 
}