export type inputFormDataTypes = {
  email: string;
  password: string;
};
export type UserFormData = {
  cookies: any;
  status: string;
  message: string;
  token: string;
  email: string;
  password: string;
};

export type AddUserFormDataTypes = {
  name: string;
  email: string;
  role: string;
  streetAddress: string;
  postalCode: number;
  city: string;
  country: string;
  phone: number;
};
export type UserAddReturnData = {
  status: string;
  message: string;
  data: { id: string };
};

export type UserEditReturnData = {
  status: string;
  message: string;
  data: { updateUser: string };
};
export type UserDeleteReturnData = {
  status: string;
  message: string;
};
export type LogoutUserFormDataTypes = {
  status: string;
  message: string;
};
export type ParamsType = {
 userId:string
};

export type GetAllUsersReturnData=
{
  isAdmin: boolean,
  _id: string,
  email: string,
  password: string,
  role: [  ]
}
export type GetSingleUserReturnData=
{
  isAdmin: boolean,
  _id: string,
  email: string,
  password: string,
  role: [  ]
}
