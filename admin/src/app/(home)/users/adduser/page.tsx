"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { RESULT_STATUS } from "../../../../constant";
import AddUserValidationSchema from "./userValidation";
import { AddUserFormDataTypes } from "../../../../types";

export default function AddUserPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    role: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddUserValidationSchema),
  });
  const onAddingUser = async (UserInputFormData: AddUserFormDataTypes) => {
    console.log("🚀 ~ onAddingUser ~ UserInputFormData:", UserInputFormData);
    try {
      await AddUserValidationSchema.validate(UserInputFormData, {
        abortEarly: false,
      });
      const response = await fetch("/api/users/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UserInputFormData),
      });
      const AddUserResponse: any = await response.json();
      if (AddUserResponse.status === RESULT_STATUS.FAILURE) {
        toast.error(AddUserResponse.message);
      } else if (AddUserResponse.status === RESULT_STATUS.SUCCESS) {
        toast.success(AddUserResponse.message);
        router.push("/users");
      }
    } catch (error: any) {
      console.error("New User not created:", error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  py-2">
      <div className="flex-col gap-3 border-[30px] p-6">
        <div className="mb-4 text-center font-extrabold">Add a New User</div>
        <div className=" p-5">
          <form onSubmit={handleSubmit(onAddingUser)}>
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
                className={`flex flex-col gap-2 m-5 ${
                  errors.name ? "error" : ""
                }`}
              >
                <label
                  htmlFor="name"
                  className={`text-sm ${errors.name ? "text-red-500" : ""}`}
                >
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  placeholder="Enter user full name."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`border border-2px w-full px-3 py-1.5 rounded-md text-sm ${
                    errors.name ? "border-red-500 border-2" : ""
                  }`}
                />
                {errors.name ? (
                  <p className="text-red-500">{errors.name.message}</p>
                ) : null}
              </div>
              <div
                className={`flex flex-col gap-2 m-5 ${
                  errors.role ? "error" : ""
                }`}
              >
                <label
                  htmlFor="role"
                  className={`text-sm ${errors.role ? "text-red-500" : ""}`}
                >
                  Select Role<span className="text-red-500">*</span>
                </label>
                <select
                  {...register("role")}
                  id="role"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className={`border border-2px w-full px-3 py-1.5 rounded-md text-sm ${
                    errors.role ? "border-red-500 border-2" : ""
                  }`}
                >
                  <option value="">Select a role</option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                </select>
                {errors.role ? (
                  <p className="text-red-500">{errors.role.message}</p>
                ) : null}
              </div>

              <div className="flex flex-col gap-2 m-5">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Add New User
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
