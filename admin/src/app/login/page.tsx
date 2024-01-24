"use client";

import axios from "axios";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

interface LoginFormInput {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required("Email is a required Field"),
  password: yup.string().required("Password is a Required Field")
});

export default function AdminLoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInput>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: LoginFormInput) => {
    console.log("data",data)
    try {
      const response = await axios.post('/api/login', data);
      console.log("response",response);
      
      if (response.status === 200) {
        console.log("Login Successful");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Admin Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input {...register("email")} /> 
        {errors?.email && <p>{errors.email.message}</p>}

        <label>Password</label>
        <input type="password" {...register("password")} /> 
        {errors?.password && <p>{errors.password.message}</p>}

        <input type="submit" value="Login" />
      </form>
    </section>
  );
}
