"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import { toast } from 'react-toastify';
import CustomEyeIcon from "../../Icons/CustomEyeIcon";
import { RESULT_STATUS } from "../../../../constant";
import UserLoginValidationSchema from "./loginValidation";
import { UserFormData, inputFormDataTypes } from "../../../../types";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserLoginValidationSchema),
  });
  const onLogin = async (inputFormData: inputFormDataTypes) => {
    try {
      await UserLoginValidationSchema.validate(inputFormData, {
        abortEarly: false,
      });
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputFormData),
      });
      const userLoginResponse: UserFormData = await response.json();
      if (userLoginResponse.status === RESULT_STATUS.FAILURE) {
        toast.error(userLoginResponse.message);
      } else if (userLoginResponse.status === RESULT_STATUS.SUCCESS) {
        toast.success(userLoginResponse.message);
        router.push("/users");
      }
    } catch (error: any) {
      console.error("Login failed:", error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-blue-500">
      <div className="flex flex-col p-7 gap-3 border-[30px] bg-white rounded-lg shadow-md">
        <div className="mb-8 text-center font-extrabold text-3xl text-gray-800 underline">Login</div>
        <div className="p-7">
          <form onSubmit={handleSubmit(onLogin)} className="space-y-10" >
            <div className={`flex flex-col gap-2 m-5 ${errors.email ? "error" : ""
              }`}>
              <label htmlFor="email" className={`text-lg font-bold text-gray-700 ${errors.email ? "text-red-500" : ""}`}>
                Email<span className="text-red-500">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder="Enter valid Email Id."
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg px-4 py-3 text-lg  ${errors.email ? "border-red-500 border-2" : ""
                  }`}
              />
              {errors.email ? (
                <p className="text-red-500">{errors.email.message}</p>
              ) : null}
            </div>
            <div className={`flex flex-col gap-2 m-5  ${errors.password ? "text-red-500" : ""
              }`}>
              <label htmlFor="password" className={`text-lg text-gray-700 font-bold  ${errors.password ? "error" : ""}`}>
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  placeholder="Enter your Password."
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={`border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg px-4 py-3 text-lg ${ errors.password ? "border-red-500 border-2" : ""}`}
                />
                                  {errors.password ? (
                    <p className="text-red-500">{errors.password.message}</p>
                  ) : null}
             <CustomEyeIcon
                  onClick={() => setShowPassword(!showPassword)}
                  visible={showPassword}
                  className="absolute top-0 right-0 mt-3 mr-3 cursor-pointer text-gray-400 hover:text-gray-600"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}
