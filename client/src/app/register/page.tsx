"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl">Register</h1>
      {userCreated && (
        <div className="my-4">
          User Created.
          <br /> Now you can Login
          <Link className="underline" href={"/login"}>Login &raquo; </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An Error has occured. <br />
          Please try again later!
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder="email"
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={creatingUser}>Register</button>
        <div className="my-4 text-center text-gray-500">or login with Provider</div>
        <button className="flex gap-4 justify-center">Login with Google</button>
        <div className="text-center my-4 border-t pt-4">
          Existing Account?{" "}
          <Link className="underline" href={"/login"}>
            Login Here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
