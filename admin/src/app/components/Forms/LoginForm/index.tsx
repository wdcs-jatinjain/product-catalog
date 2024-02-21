"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
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
    <div className="flex flex-col items-center justify-center min-h-screen  py-2">
      <div className="flex-col gap-3 border-[30px] p-6">
        <div className="mb-4 text-center font-extrabold">Login</div>
        <div className=" p-5">
          <form onSubmit={handleSubmit(onLogin)}>
            <div>
              <div
                className={`flex flex-col gap-2 m-5 ${
                  errors.email ? "error" : ""
                }`}
              >
                <label
                  htmlFor="email"
                  className={`text-sm ${errors.email ? "text-red-500" : ""}`}
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="Enter valid Email Id."
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`border border-2px w-full px-3 py-1.5 rounded-md text-sm ${
                    errors.email ? "border-red-500 border-2" : ""
                  }`}
                />
                {errors.email ? (
                  <p className="text-red-500">{errors.email.message}</p>
                ) : null}
              </div>
              <div
                className={`flex flex-col gap-2 m-5  ${
                  errors.password ? "text-red-500" : ""
                }`}
              >
                <label
                  htmlFor="password"
                  className={`block mb-2 ${errors.password ? "error" : ""}`}
                >
                  Password<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    placeholder="Enter your Password."
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className={`border border-2px-solid w-full px-3 py-1.5 rounded-md text-sm   ${
                      errors.password ? "border-red-500 border-2" : ""
                    }`}
                  />
                  {errors.password ? (
                    <p className="text-red-500">{errors.password.message}</p>
                  ) : null}
                  <div className="absolute right-2 top-2">
                    <CustomEyeIcon
                      onClick={() => setShowPassword(!showPassword)}
                      visible={showPassword}
                      className="absolute top-0 right-0 mt-8 mr-4 cursor-pointer text-gray-500 hover:text-gray-700"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 m-5">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
