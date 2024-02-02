"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import CustomEyeIcon from "./icons/CustomEyeIcon";
import "@fortawesome/fontawesome-free/css/all.css";

import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    zipCode: "",
    name: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Name should be at least 4 characters long.")
      .matches(/^[a-zA-Z\s]*$/, "Numbers are not allowed in the name.")
      .required("Name is required."),
    email: Yup.string().email("Invalid email")
      .matches(/\.com$/, "Email should end with '.com'.")
      .required("Email is required."),
    password: Yup.string()
      .trim()
      .required("Please enter password.")
      .matches(/^\S*$/, "Whitespace is not allowed.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character."
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match.")
      .required("Please confirm your password"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number should only contain numeric characters.")
      .length(10, 'Phone number should be exactly 10 digits.')
      .required("Phone number is required."),
    zipCode: Yup.string()
      .matches(/^[0-9]+$/, "Zip code should only contain numeric characters")
      .length(6, 'Zip code should be exactly 6 digits.')
      .required("Zip code is required."),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });



  const onRegister = async () => {
    await validationSchema.validate(user, { abortEarly: false });

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const res = await response.json();
    if (res.status === "Failure") {
      toast.error(res.message);
    }
    if (res.status === 'Success') {
      toast.success(res.message)
      router.push("/login");
    }
  };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Register </h1>
      <hr />
      <form
        onSubmit={handleSubmit(onRegister)}
        className="w-full text-sm max-w-[500px] shadow border-2 p-4 flex flex-col space-y-3.5"
      >
        <div className={`flex flex-col gap-2 ${errors.name && 'error'}`}>
          <label htmlFor="name" className={`text-sm ${errors.name ? 'text-red-500' : ''}`}>
            Name*
          </label>

          <input
            {...register("name")}
            id="name"
            type="text"
            placeholder="Enter your Full Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className={`w-full px-3 py-1.5 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-600 ${errors.name && 'border-red-500 border-2'}`}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>


        <div className={`flex flex-col gap-2 ${errors.email && 'error'}`}>
          <label htmlFor="email" className={`text-sm ${errors.email ? 'text-red-500' : ''}`}>
            Email*
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Enter your Valid Email ID  "
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className={`w-full px-3 py-1.5 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-600 ${errors.name && 'border-red-500 border-2'}`}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className={`flex flex-col gap-2 ${errors.phone && 'error'}`}>
          <label htmlFor="phone" className={`text-sm ${errors.phone ? 'text-red-500' : ''}`}>
            Phone*
          </label>
          <input
            {...register("phone")}
            type="phone"
            id="phone"
            placeholder="Enter your Phone Number"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            className={`w-full px-3 py-1.5 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-600 ${errors.phone && 'border-red-500 border-2'}`}
          />
          {errors.phone && <p className="text-red-500">{errors.phone.message} </p>}
        </div>
        <div className={`flex flex-col gap-2 ${errors.zipCode && 'error'}`}>
          <label htmlFor="zipCode" className={`text-sm ${errors.zipCode ? 'text-red-500' : ''}`}>
            Zip Code*
          </label>
          <input
            {...register("zipCode")}
            type="text"
            id="zipCode"
            value={user.zipCode}
            placeholder="Enter your Current ZipCode"
            onChange={(e) => setUser({ ...user, zipCode: e.target.value })}
            className={`w-full px-3 py-1.5 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-600 ${errors.zipCode && 'border-red-500 border-2'}`}
          />
          {errors.zipCode && <p className="text-red-500">{errors.zipCode.message} </p>}
        </div>
        <div className={`relative ${errors.password ? 'text-red-500' : ''}`}>
          <label htmlFor="password" className={`block mb-2 ${errors.name && 'error'}`}>
            Password*
          </label>
          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              id="password"
              value={user.password}
              placeholder="Password with 1 capital letter & 1 special case letter"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className={`w-full px-3 py-1.5 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-600 ${errors.password && 'border-red-500 border-2'}`}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <div className="absolute right-2 top-2">
              <CustomEyeIcon
                onClick={() => setShowPassword(!showPassword)}
                visible={showPassword}
                className="absolute top-0 right-0 mt-8 mr-4 cursor-pointer text-gray-500 hover:text-gray-700"
              />
            </div>
          </div>
        </div>
        <div className={`relative ${errors.confirmPassword ? 'text-red-500' : ''}`}>
          <label htmlFor="confirmPassword" className={`block mb-2 ${errors.name && 'error'}`}>
            Confirm Password*
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            value={user.confirmPassword}
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
            className={`w-full px-3 py-1.5 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-600 ${errors.confirmPassword && 'border-red-500 border-2'}`}
          />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Register
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500">
          Log in here
        </Link>
      </p>
    </div>
  );
}
