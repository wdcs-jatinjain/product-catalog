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
import CustomerLoginValidationSchema from "./loginValidation";
import { CustomerLoginType, LoginReturnType } from "@/types";

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
    resolver: yupResolver(CustomerLoginValidationSchema),
  });

  const onLogin = async (customerData: CustomerLoginType) => {
    try {
      await CustomerLoginValidationSchema.validate(customerData, {
        abortEarly: false,
      });

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });
      const CustomerLoginRes: LoginReturnType = await response.json();
      if (CustomerLoginRes.status === RESULT_STATUS.FAILURE) {
        toast.error(CustomerLoginRes.message);
      } else if (CustomerLoginRes.status === RESULT_STATUS.SUCCESS) {
        toast.success(CustomerLoginRes.message);
        router.push("/home");
      }
    } catch (error: any) {
      console.error("Login failed:", error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex-col gap-3 border-[30px] p-6">
        <div className="mb-4 text-center font-extrabold">Login</div>
        <div className=" p-5">
          <form onSubmit={handleSubmit(onLogin)}>
            <div
              className={`flex flex-col gap-2 ${errors.email ? "error" : null}`}
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
                placeholder="Enter your Valid Email ID"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full px-3 py-1.5 rounded-md  border border-2px-solid text-sm ${
                  errors.email ? "border-red-500 border-2" : null
                }`}
              />
              {errors.email ? (
                <p className="text-red-500">{errors.email.message}</p>
              ) : null}
            </div>
            <div>
              <div
                className={`relative ${errors.password ? "text-red-500" : ""}`}
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
                    placeholder="Password "
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className={`w-full px-3 py-1.5 rounded-md text-sm border border-2px-solid ${
                      errors.password ? "border-red-500 border-2" : null
                    }`}
                  />
                  {errors.password ? (
                    <p className="text-red-500">{errors.password.message}</p>
                  ) : null}
                  <div className="absolute right-2 top-2">
                    <CustomEyeIcon
                      onClick={() => setShowPassword(!showPassword)}
                      visible={showPassword}
                      className="absolute top-0 right-0 mt-8 mr-4 cursor-pointer border border-2px-solid"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 m-5">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Login here
                </button>
              </div>
            </div>
          </form>
          <div className="flex flex-col gap-2 m-5">
          <p className="mt-4">
        Don<span>'</span>t have an account?{" "}
        <Link href="/register" className="text-blue-500">
          Register here
        </Link>
      </p>
          </div>
        </div>
      </div>
    </div>
  );
}
