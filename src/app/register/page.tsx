'use client'
import Link from "next/link"
import onRegisterSubmit from './actions'
import { experimental_useFormStatus as useFormStatus } from "react-dom"
export default function RegisterPage() {
  const { pending } = useFormStatus()
  const LoginForm =
    (< div className="relative flex flex-col justify-center h-screen overflow-hidden" >
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700">Registration</h1>
        <form action={onRegisterSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">First Name</span>
            </label>
            <input type="text" name="firstName" placeholder="john" className="w-full input input-bordered input-primary" />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Last Name</span>
            </label>
            <input type="text" name="lastName" placeholder="doe" className="w-full input input-bordered input-primary" />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="abc@example.com" className="w-full input input-bordered input-primary" />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" name="password" className="w-full input input-bordered input-primary" />
          </div>
          <div>
            <button type='submit' disabled={pending} className="btn btn-block btn-primary">
              {pending ? 'Loading' : 'Submit'}
            </button>
          </div>
        </form>
        <div>
          <label className="label">
            <span className="text-base label-text">Already have an account

              <Link href='/login' className=" link text-primary p-2">Login</Link>
            </span>
          </label>
        </div>
      </div>
    </div >)
  return LoginForm
}

// export const metadata: Metadata = {
//   title: "registration",

// };