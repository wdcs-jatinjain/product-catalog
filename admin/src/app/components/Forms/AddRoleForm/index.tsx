"use client";
import React, { useState } from "react";
import AddRoleValidationSchema from "./roleValidation"; 
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AddRoleFormDataTypes } from "@/types";
import Link from "next/link";


export default function AddRoleForm({ onAddingRole, roles }: { roles:[{_id: string, name: string}], onAddingRole: (AddRoleData: AddRoleFormDataTypes) => Promise<void> }) {
const initialState = {name: ""}
  const [formData, setFormData] = useState(initialState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddRoleValidationSchema),
  });
  return (
    <>
    <form onSubmit={handleSubmit(onAddingRole)}>
    <div className="grid grid-cols-3 grid-rows-3 gap-4  px-20 py-10 bg-slate-100">
      {/* First row */}
      <div className="">
        <div className={`sm:col-span-2 ${errors.name ? "error" : ""}`}>
          <label htmlFor="name" className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${errors.name ? "text-red-500" : ""
            }`}>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.name ? "border-red-500 border-2" : ""
              }`}
          />
          {errors.name ? (
            <p className="text-red-500">{errors.name.message}</p>
          ) : null}
        </div>
      </div>
     
      <div className="flex gap-2 m-5">
        <div className="">
          <button
            type="submit"
            className="bg-black text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded-lg"
          >
            Save
          </button>
        </div>
        <div className="">
          <Link  href={'/roles'}
            type="button"
            className="bg-black text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded-lg"
          >
            Cancel
          </Link>
        </div>
        </div>

      </div>
    </form>
  

    </>

  );
}
