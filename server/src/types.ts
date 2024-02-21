export type loginBody = {
  email: string;
  password: string;
};

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
}

export type editUserBody = {
  name: string;
  email: string;
  role:string
}
