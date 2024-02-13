"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import CustomEyeIcon from "../Icons/CustomEyeIcon";
import "@fortawesome/fontawesome-free/css/all.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { RESULT_STATUS } from "../../../constant";
import CustomerRegistervalidationSchema from "./RegisterValidation";
import {
  calculatePasswordStrength,
  checkPasswordStrength,
} from "../../staticFunctions/passwordStrengthChecker";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email:  "",
    password:   "",
    confirmPassword: "",
    phone:  "",
    zipCode:  "",
    name:  "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CustomerRegistervalidationSchema),
  });

  const onRegister = async () => {
    await CustomerRegistervalidationSchema.validate(formData, { abortEarly: false });

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const res = await response.json();
    if (res.status === RESULT_STATUS.FAILURE) {
      toast.error(res.message);
    }
    if (res.status === RESULT_STATUS.SUCCESS) {
      toast.success(res.message);
      router.push("/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <hr />
      <form
        onSubmit={handleSubmit(onRegister)}
        className="w-full text-sm max-w-[500px] shadow border-2 p-4 flex flex-col space-y-3.5"
      >
        <div className={`flex flex-col gap-2 ${errors.name ? "error" : null}`}>
          <label
            htmlFor="name"
            className={`text-sm ${errors.name ? "text-red-500" : ""}`}
          >
            Name*
          </label>

          <input
            {...register("name")}
            id="name"
            type="text"
            placeholder="Enter your Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-3 py-1.5 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-600 ${
              errors.name ? "border-red-500 border-2" : null
            }`}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className={`flex flex-col gap-2 ${errors.email ? "error" : null}`}>
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
            placeholder="Enter your Valid Email ID  "
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`w-full px-3 py-1.5 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-600 ${
              errors.name ? "border-red-500 border-2" : null
            }`}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className={`flex flex-col gap-2 ${errors.phone ? "error" : null}`}>
          <label
            htmlFor="phone"
            className={`text-sm ${errors.phone ? "text-red-500" : ""}`}
          >
            Phone*
          </label>
          <input
            {...register("phone")}
            type="phone"
            id="phone"
            placeholder="Enter your Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className={`w-full px-3 py-1.5 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-600 ${
              errors.phone ? "border-red-500 border-2" : null
            }`}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message} </p>
          )}
        </div>
        <div
          className={`flex flex-col gap-2 ${errors.zipCode ? "error" : null}`}
        >
          <label
            htmlFor="zipCode"
            className={`text-sm ${errors.zipCode ? "text-red-500" : ""}`}
          >
            Zip Code*
          </label>
          <input
            {...register("zipCode")}
            type="text"
            id="zipCode"
            value={formData.zipCode}
            placeholder="Enter your Current ZipCode"
            onChange={(e) =>
              setFormData({ ...formData, zipCode: e.target.value })
            }
            className={`w-full px-3 py-1.5 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-600 ${
              errors.zipCode ? "border-red-500 border-2" : null
            }`}
          />
          {errors.zipCode && (
            <p className="text-red-500">{errors.zipCode.message} </p>
          )}
        </div>
        <div className={`relative ${errors.password ? "text-red-500" : ""}`}>
          <label
            htmlFor="password"
            className={`block mb-2 ${errors.name ? "error" : null}`}
          >
            Password*
          </label>
          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              placeholder="Password with 1 capital letter & 1 special case letter"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className={`w-full px-3 py-1.5 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-600 ${
                errors.password ? "border-red-500 border-2" : null
              }`}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            {formData.password && (
              <p className="text-gray-500 mt-1">
                Strength:{" "}
                <span className={calculatePasswordStrength(formData.password)}>
                  {checkPasswordStrength(formData.password)}
                </span>
              </p>
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
        <div
          className={`relative ${errors.confirmPassword ? "text-red-500" : ""}`}
        >
          <label
            htmlFor="confirmPassword"
            className={`block mb-2 ${errors.name ? "error" : null}`}
          >
            Confirm Password*
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className={`w-full px-3 py-1.5 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-600 ${
              errors.confirmPassword ? "border-red-500 border-2" : null
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Register
        </button>
      </form>
    </div>
  );
}
