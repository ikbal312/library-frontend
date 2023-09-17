'use client'
import onLogInSubmit from "@/app/login/actions";
import Link from "next/link";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SignIn() {
      const { pending } = useFormStatus();
  return (
   
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Sign In
        </h1>
        <form action={onLogInSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="abc@example.com"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={pending}
              className="btn btn-block btn-primary"
            >
              {pending ? "Loading" : "Submit"}
            </button>
          </div>
        </form>
        <div>
          <label className="label">
            <span className="text-base label-text p-2">
              <Link className="link p-2 text-primary" href="/register">
                Register
              </Link>
              to login
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}
