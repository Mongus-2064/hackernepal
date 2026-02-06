"use client";

import React, { FormEvent, useState } from "react";
import { Eye, EyeClosed, TriangleAlert } from "lucide-react";
import Authenticationdialog from "@/Dialogbox/Authenticationdialog";
import { setupFsCheck } from "next/dist/server/lib/router-utils/filesystem";

export default function Page() {
  const [showpassword, setShowPassword] = useState<boolean>(false);
  const [credentialusername, setCredentialUsername] = useState<boolean>(false);
  const [credentialpassword, setCredentialPassword] = useState<boolean>(false);
  const [showdialogbox, setShowDialogBox] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errormessage , setErrorMessage] = useState<string>("");
  const [successmessage , setSuccessMessage] = useState<string>("");

  const [hone, setHone] = useState<string>("");

  const handleshowpassword = () => {
    setShowPassword(!showpassword);
  };

  const handlecredentialusername = (e: React.FormEvent) => {
    e.preventDefault();
    setCredentialUsername(!credentialusername);
    setShowDialogBox(true);
    setHone("Username");
  };

  const handlecredentialpasswords = (e: FormEvent) => {
    e.preventDefault();
    setShowDialogBox(true);
    setCredentialPassword(!credentialpassword);
    setHone("passwords");
  };


  const handlesubmit = async (e:React.FormEvent)=>{
    e.preventDefault()
    try {
      const data = await fetch("/Labs/Authenticationlab/api/authlabroute",{
      method: "POST",
      body: JSON.stringify({username , password}),
    });
    const res = await data.json();
    console.log(res.msg);
    setSuccessMessage(res.success);
    setErrorMessage(res.err);
    } catch (error) {
      return console.log("Error")
    }
  }

  return (
    <main className=" bg-black/90 flex relative flex-col p-4  items-center   min-h-screen ">
      <section className=" pt-25 w-full flex gap-4 flex-col max-w-4xl mx-auto ">
        <div className="bg-gray-800 h-auto rounded-md p-4">
          <p className="text-green-500 text-3xl font-bold ">
            What is Credential Stuffing?
          </p>

          <p className="text-white flex flex-col pt-2 gap-4">
            Credential stuffing is a type of automated login attack where an
            attacker uses a large list of stolen username–password combinations
            (called a combo list) and tests them against a target login system.
            <br />
            <span>
              Instead of guessing passwords randomly, the attacker relies on the
              fact that many users reuse the same credentials across different
              websites. If even a small percentage of logins succeed, the
              attacker
              <br />
            </span>
            <span>
              gains access to real accounts. This attack is usually performed
              using automated tools (such as web testing proxies or custom
              scripts) that can send thousands of login requests in a short
              time.
            </span>
          </p>

          <p className="text-green-500 text-3xl font-bold pt-4">Guide</p>
          <ul className="list-disc text-white p-4">
            <li>Capture a normal login request</li>
            <li>Replay the same request many times</li>
            <li>Replace the username and password fields on each attempt</li>
            <li>Compare server responses to detect success</li>
          </ul>
        </div>

        <div className="h-auto w-full bg-red-500/10 border border-red-500/30 backdrop-blur-2xl p-4 rounded-sm">
          <p className="text-white flex items-start gap-2">
            <TriangleAlert size={24} className="text-red-500" />
            <span>
              This lab is designed for a deliberately vulnerable test
              application. Do NOT use these techniques on real systems without
              permission.
            </span>
          </p>
        </div>

        <div className="bg-gray-800 p-2 w-full h-auto border border-green-500 rounded-sm">
          <h1 className="text-green-500 text-5xl font-bold text-center">
            Credential Stuffing Lab
          </h1>
          <hr className="text-green-500 pb-4" />

          <form onSubmit={handlesubmit} className="flex items-center pt-4 justify-around w-full">
            <div className="bg-white flex flex-col h-[80%]  justify-center p-16 rounded-md gap-2 ">
              <h1 className="text-blue-500 font-bold text-center pb-2 text-4xl">
                Login
              </h1>

                {errormessage &&(<p className="text-red-500 p-2 bg-red-800/30 border border-red-500">{errormessage}</p>)                                
                }
                {successmessage && (
                  <p className="bg-green-800/30 border border-green-500 p-2">{successmessage}</p>
                )}

              <label htmlFor="username">Username</label>
              <input
              onChange={(e)=> setUsername(e.target.value)}
                id="username"
                type="text"
                className="w-full px-2 text-start py-2 rounded-md bg-gray-300 focus:ring-2 focus:ring-blue-500"
              />

              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                onChange={(e)=> setPassword(e.target.value)}
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
                <button 
                type="submit"
                className="w-full hover:cursor-pointer bg-blue-500 rounded-md text-white  py-2 ">
                  Login
                </button>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-6">
                <button

                  onClick={handlecredentialusername}
                  className="bg-green-500 px-4 py-2 rounded-md text-white hover:cursor-pointer hover:scale-105 duration-300 transition-transform hover:bg-green-600"
                >
                  Username Credentials
                </button>

                <button
                  onClick={handlecredentialpasswords}
                  className="bg-orange-500 px-4 py-2 rounded-md text-white hover:cursor-pointer hover:scale-105 duration-300 transition-transform hover:bg-orange-600"
                >
                  Password Credentials
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {showdialogbox && (
        <Authenticationdialog opened={setShowDialogBox} text={hone} />
      )}
    </main>
  );
}
