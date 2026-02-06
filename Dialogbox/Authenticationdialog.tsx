"use client";

import React, { useState } from "react";

import { X } from "lucide-react";
import { dummynames } from "@/dummydatas/auth";
import { dummypassword } from "@/dummydatas/auth";

interface IOpened {
  text: string,
  opened: (value: boolean) => void
}

export default function Authenticationdialog({ opened, text }: IOpened) {
  return (
    <main className="absolute flex w-96 h-60 bottom-15 left-120 ">
      <section className="bg-white  h-full w-full p-4 rounded-md">
        <h1>{text}</h1>

        <div className=" overflow-y-scroll  h-32 bg-gray-300 rounded-md p-2">
          {text == "Username"
            ? dummynames.map((username) => (
                <div key={username.id}>
                  <p>{username.username}</p>
                </div>
              ))
            : dummypassword.map((pass) => (
                <div key={pass.id}>
                  <p>{pass.passwords}</p>
                </div>
              ))}
        </div>

        <div className="pt-2 w-full">
          <button
            onClick={() => opened(false)}
            className="flex px-4 py justify-center py-2 hover:cursor-pointer hover:bg-red-600 w-full rounded-md text-white bg-red-500"
          >
            Close
            <X />
          </button>
        </div>
      </section>
    </main>
  );
}
