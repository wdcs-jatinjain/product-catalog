
import React from "react";
import Link from "next/link";
import RegisterForm from '../components/Form/RegisterForm'

export default function RegisterPage() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Register</h1>
      <hr />
      <RegisterForm />
      <p className="mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500">
          Log in here
        </Link>
      </p>
    </div>
  );
}
