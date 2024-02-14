export type RegisterReturnType = {
  status: string;
  message: string;
  data: {
    id: string;
  };
};

export type RegisterType = {
  name: string;
  email: string;
  password: string;
  phone: string;
  zipCode: string;
};

export type LoginReturnType = {
  status: string;
  message: string;
  token: string;
};

export type CustomerLoginType = {
  email: string;
  password: string;
};
