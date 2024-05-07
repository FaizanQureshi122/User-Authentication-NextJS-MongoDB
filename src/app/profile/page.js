"use client"
import React from "react";

const Profile = () => {


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-3xl mb-4 text-center">Welcome to the Home Page</h1>
            <p>Welcome to your personalized home page. <br/>You can view and manage your account information, <br/>and access your dashboard here.</p>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4 w-full"
                // onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    </div>
);
}


export default Profile
