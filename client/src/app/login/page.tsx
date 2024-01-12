"use client";
import { useState } from "react";
import Input from "../components/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
async function handleFormSubmit(ev:React.FormEvent<HTMLFormElement>){
ev.preventDefault()

}
  return (
    <section className="mt-8">
     <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your Email Address"
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(ev)=> setpassword(ev.target.value)}
        />
        <button type="submit">Login</button>
        <div className="my-4 text-center text-gray-500">or login with provider</div>
        <button type="button" className="flex gap-4 justify-center">Login with Google</button>
      </form>
    </section>
  );
}
