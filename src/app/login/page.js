"use client"
import Input from '../components/Input'
import { useState } from 'react'
import Link from 'next/link'

const defaultData = {
  usename:"",
  password:""
};


const Login = () => {

 const [data, setData] = useState(defaultData)

 const onValueChange = (e) =>{

  setData({ ...data, [e.target.name]: e.target.value })
 }
   const onLogin = async (e) => {
    e.preventDefault()
    if (!data.username || !data.password) {
      alert("Please fill all mandatory paramters");
      return;
  }

   }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white shadow-md rounded px-16 pt-8 pb-12 mb-4">
            <h1 className="text-3xl mb-4 text-center">Login</h1>
            <form className="space-y-4">
                <Input
                    label="Username"
                    id="username"
                    type="text"
                    value={data.username}
                    onChange={onValueChange}
                />
                <Input
                    label="Password"
                    id="password"
                    type="password"
                    value={data.password}
                    onChange={onValueChange}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
                    onClick={(e) => onLogin(e)}
                >
                    Sign In
                </button>
            </form>
            <p className="text-center mt-4">
                Don't have an account?{" "}
                <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
            </p>
        </div>
    </div>
);
}

export default Login
