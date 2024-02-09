"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CustomEyeIcon from "../Icons/CustomEyeIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "@fortawesome/fontawesome-free/css/all.css";
import { useForm } from "react-hook-form";
import { RESULT_STATUS } from "../../../constant";
import LoginValidationSchema from "./loginValidation";
import { LoginType } from "@/types";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidationSchema),
  });

  const onLogin = async (userData: LoginType) => {
    console.log(userData);
    try {
      await LoginValidationSchema.validate(userData, { abortEarly: false });

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(userData);
      const res = await response.json();
      if (res.status === RESULT_STATUS.FAILURE) {
        toast.error(res.message);
      } else if (res.status === RESULT_STATUS.SUCCESS) {
        toast.success(res.message);
        router.push("/home");
      }
    } catch (error: any) {
      console.error("Login failed:", error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleSubmit(onLogin)}>
        <div className={`flex flex-col gap-2 ${errors.email && "error"}`}>
          <label
            htmlFor="email"
            className={`text-sm ${errors.email ? "text-red-500" : ""}`}
          >
            Email*
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Enter your Valid Email ID"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`w-full px-3 py-1.5 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-600 ${
              errors.email && "border-red-500 border-2"
            }`}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className={`relative ${errors.password ? "text-red-500" : ""}`}>
          <label
            htmlFor="password"
            className={`block mb-2 ${errors.password ? "error" : ""}`}
          >
            Password*
          </label>
          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              placeholder="Password "
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className={`w-full px-3 py-1.5 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-600 ${
                errors.password && "border-red-500 border-2"
              }`}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <div className="absolute right-2 top-2">
              <CustomEyeIcon
                onClick={() => setShowPassword(!showPassword)}
                visible={showPassword}
                className="absolute top-0 right-0 mt-8 mr-4 cursor-pointer text-gray-500 hover:text-gray-700"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        >
          Login here
        </button>
      </form>

      <Link href="/register">Visit Register page</Link>
    </div>
  );
}
