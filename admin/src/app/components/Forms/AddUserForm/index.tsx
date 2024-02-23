"use client";
import React, { useState } from "react";
import AddUserValidationSchema from './userValidation'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function AddUserForm({onAddingUser}: {onAddingUser: (a:any) => Promise<void>;}) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    city: "",
    phone: "",
    role: "",
    country: "",
    streetAddress: "",
    postalCode: "",
    password:""
    
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddUserValidationSchema),
  });
 
  return (
   
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <form onSubmit={handleSubmit(onAddingUser)}>
          
              <div className={`sm:col-span-2 ${errors.name ? "error" : ""}`}>
                <label
                  htmlFor="name"
                  className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                    errors.name ? "text-red-500" : ""
                  }`}
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name")}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter User Name."
                  value={formData.name}
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                    errors.name ? "border-red-500 border-2" : ""
                  }`}
                />
                {errors.name ? (
                  <p className="text-red-500">{errors.name.message}</p>
                ) : null}
              </div>

              <div className={`sm:col-span-2 ${errors.email ? "error" : ""}`}>
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                    errors.email ? "text-red-500" : ""
                  }`}
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  id="email"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                    errors.email ? "border-red-500 border-2" : ""
                  }`}
                  placeholder="Enter User's Email ID"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                  {errors.email ? (
                  <p className="text-red-500">{errors.email.message}</p>
                ) : null}
              </div>
               <div className={`sm:col-span-2 ${errors.city ? "error" : ""}`}>
                <label
                  htmlFor="city"
                  className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                    errors.city ? "text-red-500" : ""
                  }`}
                >
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("city")}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                    errors.city ? "border-red-500 border-2" : ""
                  }`}
                />
                {errors.city ? (
                  <p className="text-red-500">{errors.city.message}</p>
                ) : null}
              </div>
              <div className={`w-full ${errors.streetAddress ? "error" : ""}`}>
                <label
                  htmlFor="streetAddress"
                  className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white  ${
                    errors.streetAddress ? "text-red-500" : ""
                  }`}
                >
                  Street Address<span className="text-red-500">*</span>
                </label>
                <input
                  {...register("streetAddress")}
                  onChange={(e) =>
                    setFormData({ ...formData, streetAddress: e.target.value })
                  }
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  value={formData.streetAddress}

                  className= {`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter User's streetAddress  ${
                    errors.streetAddress ? "border-red-500 border-2" : ""
                  }`}
                  
                />
                  {errors.streetAddress ? (
                  <p className="text-red-500">{errors.streetAddress.message}</p>
                ) : null}
              </div>
              <div className={`w-full ${errors.country ? "error" : ""}`}>
                <label
                  htmlFor="country"
                  className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                    errors.country ? "text-red-500" : ""
                  }`}
                >
                  Country<span className="text-red-500">*</span>
                </label>
                <input
                    {...register("country")}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                  type="text"
                  name="country"
                  id="country"
                  value={formData.country}

                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                    errors.country ? "border-red-500 border-2" : ""
                  }`}
                  placeholder="Enter User's country"
                  
                />
                  {errors.country ? (
                  <p className="text-red-500">{errors.country.message}</p>
                ) : null}
              </div>
              <div className={`w-full ${errors.phone ? "error" : ""}`}>
                <label
                  htmlFor="phone"
                  className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                    errors.phone ? "text-red-500" : ""
                  }`}
                >
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                 {...register("phone")}
                 onChange={(e) =>
                   setFormData({ ...formData, phone: e.target.value })
                 }
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}

                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                    errors.phone ? "border-red-500 border-2" : ""
                  }`}
                  placeholder="Enter Valid Phone Number"
                  
                />
                    {errors.phone ? (
                  <p className="text-red-500">{errors.phone.message}</p>
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
              <div className={`sm:col-span-2 ${errors.postalCode ? "error" : ""}`}>
                <label
                  htmlFor="postalCode"
                  className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white  ${
                    errors.postalCode ? "text-red-500" : ""
                  }`}
                >
                  Postal Code<span className="text-red-500">*</span>
                </label>
                <input
                 {...register("postalCode")}
                 onChange={(e) =>
                   setFormData({ ...formData, postalCode: e.target.value })
                 }
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  value={formData.postalCode}

                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                    errors.postalCode ? "border-red-500 border-2" : ""
                  }`}
                  placeholder="Enter Postal Code"
                  
                />
                   {errors.postalCode ? (
                  <p className="text-red-500">{errors.postalCode.message}</p>
                ) : null}
              </div>
              <div className={`sm:col-span-2 ${errors.password ? "error" : ""}`}>
                <label
                  htmlFor="password"
                  className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white  ${
                    errors.password ? "text-red-500" : ""
                  }`}
                >
                 Enter Password<span className="text-red-500">*</span>
                </label>
                <input
                 {...register("password")}
                 onChange={(e) =>
                   setFormData({ ...formData, password: e.target.value })
                 }
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}

                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                    errors.password ? "border-red-500 border-2" : ""
                  }`}
                  placeholder="Enter password"
                  
                />
                   {errors.password ? (
                  <p className="text-red-500">{errors.password.message}</p>
                ) : null}
              </div>

              <div className="flex flex-col gap-2 m-5">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                 Save
                </button>
              </div>

          </form>
        </div>
      </section>
  );
}
