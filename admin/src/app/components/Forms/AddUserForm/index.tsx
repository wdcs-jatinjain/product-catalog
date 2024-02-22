"use client";
import React, { useState } from "react";
import AddUserValidationSchema from "@/app/(home)/users/add-user/userValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function AddUserForm({
  onAddingUser,
}: {
  onAddingUser: () => Promise<void>;
}) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    city: "",
    phone: "",
    role: "",
    country: "",
    streetAddress: "",
    postalCode: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddUserValidationSchema),
  });
  // return(
  //   <div style={{margin: '40px', height: '300px'}} className=" bg-slate-400 min-h-52 ">
  //     <form onSubmit={handleSubmit(onAddingUser)}>

  //       <div >
  //       <div
  //               className={`flex flex-col gap-2 m-5 ${
  //                 errors.email ? "error" : ""
  //               }`}
  //             >
  //               <label
  //                 htmlFor="email"
  //                 className={`text-sm ${errors.email ? "text-red-500" : ""}`}
  //               >
  //                 Email<span className="text-red-500">*</span>
  //               </label>
  //               <input
  //                 {...register("email")}
  //                 type="email"
  //                 id="email"
  //                 placeholder="Enter valid Email Id."
  //                 value={formData.email}
  //                 onChange={(e) =>
  //                   setFormData({ ...formData, email: e.target.value })
  //                 }
  //                 className={`border border-2px w-full px-3 py-1.5 rounded-md text-sm ${
  //                   errors.email ? "border-red-500 border-2" : ""
  //                 }`}
  //               />
  //               {errors.email ? (
  //                 <p className="text-red-500">{errors.email.message}</p>
  //               ) : null}
  //             </div>
  //             <div
  //               className={`flex flex-col gap-2 m-5 ${
  //                 errors.name ? "error" : ""
  //               }`}
  //             >
  //               <label
  //                 htmlFor="name"
  //                 className={`text-sm ${errors.name ? "text-red-500" : ""}`}
  //               >
  //                 Full Name<span className="text-red-500">*</span>
  //               </label>
  //               <input
  //                 {...register("name")}
  //                 type="text"
  //                 id="name"
  //                 placeholder="Enter user full name."
  //                 value={formData.name}
  //                 onChange={(e) =>
  //                   setFormData({ ...formData, name: e.target.value })
  //                 }
  //                 className={`border border-2px w-full px-3 py-1.5 rounded-md text-sm ${
  //                   errors.name ? "border-red-500 border-2" : ""
  //                 }`}
  //               />
  //               {errors.name ? (
  //                 <p className="text-red-500">{errors.name.message}</p>
  //               ) : null}
  //             </div>
  //             <div
  //               className={`flex flex-col gap-2 m-5 ${
  //                 errors.role ? "error" : ""
  //               }`}
  //             >
  //               <label
  //                 htmlFor="role"
  //                 className={`text-sm ${errors.role ? "text-red-500" : ""}`}
  //               >
  //                 Select Role<span className="text-red-500">*</span>
  //               </label>
  //               <select
  //                 {...register("role")}
  //                 id="role"
  //                 value={formData.role}
  //                 onChange={(e) =>
  //                   setFormData({ ...formData, role: e.target.value })
  //                 }
  //                 className={`border border-2px w-full px-3 py-1.5 rounded-md text-sm ${
  //                   errors.role ? "border-red-500 border-2" : ""
  //                 }`}
  //               >
  //                 <option value="">Select a role</option>
  //                 <option value="admin">Admin</option>
  //                 <option value="manager">Manager</option>
  //               </select>
  //               {errors.role ? (
  //                 <p className="text-red-500">{errors.role.message}</p>
  //               ) : null}
  //             </div>
  //             <div className="flex flex-col gap-2 m-5">
  //               <button
  //                 type="submit"
  //                 className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
  //               >
  //                 Add New User
  //               </button>
  //             </div>
  //       </div>
  //     </form>
  //   </div>
  // )
  return (
    <div
      style={{ margin: "100px", height: "600px" }}
      className=" bg-slate-400 min-h-52 "
    >
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <form onSubmit={handleSubmit(onAddingUser)}>
            <div className={`grid gap-4 sm:grid-cols-2 sm:gap-6 ${
                errors.email ? "error" : ""
                 }`}>
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${errors.email ? "text-red-500" : ""}`}
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter User's Name"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter User's Email ID"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  city<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter User's city"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="streetAddress"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  streetAddress<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter User's streetAddress"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  country<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter User's country"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Valid Phone Number"
                  required
                />
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
              <div>
                <label
                  htmlFor="postalCode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Postal Code<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="postalCode"
                  id="postalCode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Postal"
                  required
                />
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
      </section>
    </div>
  );
}
