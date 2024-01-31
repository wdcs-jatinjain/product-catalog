'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  zipCode: string;
}

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    phone: "",
    zipCode: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .trim()
      .required("Please enter password")
      .matches(/^\S*$/, "Whitespace is not allowed")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    phone: Yup.string().required("Phone number is required"),
    zipCode: Yup.string().required("Zip code is required"),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrorMessage("");
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const response = await res.json();
      if (!res.ok) {
        setErrorMessage(response.message);
        toast.error(response.message, { 
          position: 'top-right',
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.success(response.message, { 
          position: 'top-right',
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        router.push("/");
      }
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: string[] = [];
        error.inner.forEach((e) => {
          validationErrors.push(e.message);
        });
        setErrorMessage(validationErrors.join(", "));
        toast.error(validationErrors.join(", "), { 
          position: 'top-right',
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        setErrorMessage(error.message);
        toast.error('An Error occurred while registering a new Customer', {
          position: 'top-right',
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <h1>Register New Customer</h1>
        <label>Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.name}
          className="m-2 bg-slate-400 rounded"
        />
        <label>Email</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.email}
          className="m-2 bg-slate-400 rounded"
        />
        <label>Enter Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.phone}
          className="m-2 bg-slate-400 rounded"
        />
        <label>Enter ZipCode</label>
        <input
          id="zipCode"
          name="zipCode"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.zipCode}
          className="m-2 bg-slate-400 rounded"
        />
        <label>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          required={true}
          value={formData.password}
          className="m-2 bg-slate-400 rounded"
        />
        <input
          type="submit"
          value="Create User"
          className="bg-blue-300 hover:bg-blue-100"
        />
      </form>
      <p className="text-red-500">{errorMessage}</p>
    </>
  );
};

export default UserForm;

