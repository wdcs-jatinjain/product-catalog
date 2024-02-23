export type loginBody = {
  email: string;
  password: string;
};

export type loginReturnBody = {
  status: string,
  message: string,
  token: string,
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
  id:string
}
