"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import CustomEyeIcon from "../../Icons/CustomEyeIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .matches(/\.com$/, "Email should end with '.com'.")
      .required("Email is required."),
    password: Yup.string().trim().required("Please enter password."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onLogin = async (adminData: any) => {
    try {
      await validationSchema.validate(adminData, { abortEarly: false });

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData),
      });

      const res = await response.json();
      if (res.status === "Failure") {
        toast.error(res.message);
      } else if (res.status === "Success") {
        toast.success(res.message);
        console.log("Customer1", res);
        router.push("/adminDashboard");
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
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              value={user.password}
              placeholder="Password with 1 capital letter & 1 special case letter"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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
    </div>
  );
}
