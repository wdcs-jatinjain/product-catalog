"use client";

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormInput } from ".";
import { ADMIN_URL } from '../../../config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    const { email, password } = data;
    try {
      const response = await fetch(`${ADMIN_URL}api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password}),
    });
    const res = await response.json();
      if (res.status === 'Success' ) {
        toast.success(res.message, {
          position: 'top-right',
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else if (res.status === 'Failure'){
        toast.error(res.message, {
          position: 'top-right',
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

    } catch (error:any) {
      toast.error('Login Failed. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Admin Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:shadow-outline"
            type="text"
            id="email"
            {...register("email")}
          />
          {errors?.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            {...register("password")}
          />
          {errors?.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-primary text-black py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
    </section>
  );
}