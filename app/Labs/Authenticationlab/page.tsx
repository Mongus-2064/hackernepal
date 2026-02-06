"use client";

import React, { useState } from "react";
import { dummynames } from "@/dummydatas/auth";
import { Eye, EyeClosed } from "lucide-react";
import Authenticationdialog from "@/Dialogbox/Authenticationdialog";

export default function Page() {
  const [showpassword, setShowPassword] = useState(false);
  const [credentialusername , setCredentialUsername] = useState(false);


  const handleshowpassword = () => {
    setShowPassword(!showpassword);
  };

  const handlecredentialusername = (e:React.FormEvent)=>{
    e.preventDefault();
    setCredentialUsername(!credentialusername);

  }


  return (
    <main className=" bg-black/90 flex relative items-center   min-h-screen ">
      <section className=" pt-20 w-full flex max-w-4xl mx-auto ">
        <form className="flex items-center pt-4 justify-around w-full">
          <div className="bg-white flex flex-col h-[80%]  justify-center p-16 rounded-md gap-2 ">
            <h1 className="text-blue-500 font-bold text-center pb-2 text-4xl">
              Login
            </h1>

            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="w-full px-2 text-start py-2 rounded-md bg-gray-300 focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={showpassword ? "text" : "password"}
                id="password"
                className="w-full px-2 text-start py-2 bg-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md  "
              />
              <div
                onClick={handleshowpassword}
                className=" bottom-2 right-2 absolute bg-gray-300 hover:cursor-pointer hover:text-blue-500"
              >
                {showpassword ? <Eye /> : <EyeClosed />}
              </div>
            </div>
            <div className="pt-2">
              <button className="w-full hover:cursor-pointer bg-blue-500 rounded-md text-white  py-2 ">
                Login
              </button>
            </div>
          </div>



        <div>
          <div className="flex flex-col gap-6">
            <button
            onClick={handlecredentialusername}
            className="bg-green-500 px-4 py-2 rounded-md text-white hover:cursor-pointer hover:scale-105 duration-300 transition-transform hover:bg-green-600">Username Credentials</button>

            <button
            className="bg-orange-500 px-4 py-2 rounded-md text-white hover:cursor-pointer hover:scale-105 duration-300 transition-transform hover:bg-orange-600"
            >Password Credentials</button>

          </div>
        </div>

        </form>
      </section>

    { credentialusername &&  <Authenticationdialog opened={setCredentialUsername}/> }
    

    </main>
  );
}
