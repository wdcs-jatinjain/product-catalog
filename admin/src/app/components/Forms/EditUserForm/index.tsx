"use client";
import React, { useState } from "react";
import AddUserValidationSchema from "@/app/(home)/users/add-user/userValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UserData } from "../../Users/users";


export default function EditUserForm({ onEditingUser, userDetails, setUserDetails }: { userDetails?: UserData, setUserDetails: React.Dispatch<React.SetStateAction<UserData | undefined>>, onEditingUser?: () => Promise<void> }) {
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
  console.log(userDetails);
  
  return (
    <div style={{ margin: '40px', height: '300px' }} className=" bg-slate-400 min-h-52 ">
      <form >

        <div >
          <div
            className={`flex flex-col gap-2 m-5 ${errors.email ? "error" : ""
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
              className={`border border-2px w-full px-3 py-1.5 rounded-md text-sm ${errors.email ? "border-red-500 border-2" : ""
                }`}
            />
            {errors.email ? (
              <p className="text-red-500">{errors.email.message}</p>
            ) : null}
          </div>
          <div
            className={`flex flex-col gap-2 m-5 ${errors.name ? "error" : ""
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
              className={`border border-2px w-full px-3 py-1.5 rounded-md text-sm ${errors.name ? "border-red-500 border-2" : ""
                }`}
            />
            {errors.name ? (
              <p className="text-red-500">{errors.name.message}</p>
            ) : null}
          </div>
          <div
            className={`flex flex-col gap-2 m-5 ${errors.role ? "error" : ""
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
              className={`border border-2px w-full px-3 py-1.5 rounded-md text-sm ${errors.role ? "border-red-500 border-2" : ""
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
  )
}


