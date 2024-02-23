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
  role:string
  streetAddress:string
  postalCode:number
  city:string
  country:string
  phone:number
  
};
export type LogoutUserFormDataTypes = {
  status: string;
  message: string;
};
