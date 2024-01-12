"use client";
import Link from "next/link";
import { useState } from "react";
import Input from "../Components/CommanComponents/Input";
import { RegisterUser } from "../Components/DataProvider/Register";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

    try {
      await RegisterUser(email, password);
      setUserCreated(true);
    } catch (error) {
      setError(true);
    } finally {
      setCreatingUser(false);
    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl">Register</h1>
      {userCreated && (
        <div className="my-4">
          User Created.
          <br /> Now you can Login
          <Link className="underline" href="/login">
            Login &raquo;{" "}
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An Error has occurred. <br />
          Please try again later!
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder="email"
        />

        <Input
          type="password"
          name="password"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder="password"
        />

        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with Provider
        </div>
        <button className="flex gap-4 justify-center">Login with Google</button>
        <div className="text-center my-4 border-t pt-4">
          Existing Account?{" "}
          <Link className="underline" href="/login">
            Login Here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
