"use client";

import { ArrowRightCircle, Building, Contact, Home, Icon, InfoIcon, User } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const links = [
  { id: 1, label: "Home", href: "/", icon: <Home size={18} /> },
  { id: 2, label: "Lab", href: "/Labs", icon: <Building size={18} /> },
  { id: 3, label: "About", href: "/about", icon: <InfoIcon size={18} /> },
  { id: 4, label: "Contact", href: "/contact", icon: <Contact size={18} /> },
];

export default function Navbar() {
  const [label , setLabel] = useState<string>("");
  return (
    <nav className={`fixed  z-30  w-full h-20 ${label === "Home" ? "": "bg-black/90 border-b border-white"} `}>
      <section className="flex max-w-6xl   mx-auto items-center justify-between h-full ">
        <div className="logo">
          <Link className="text-white text-3xl" href={"/"}>
            Hacker<span className="logo font-bold text-5xl  text-green-500">एक</span>
          </Link>
        </div>

        {/* NAVLINKS */}

        <div className="flex gap-8 text-white">
          {links.map((nav) => (
            <div className=" hidden lg:flex relative flex-col " key={nav.id}>
              <Link 
              onClick={()=> setLabel(nav.label)}
              className="flex gap-2 items-center justify-center 
              border-b-2 border-transparent hover:border-b-2 pb-2 pt-6 hover:border-green-500 transform-transition duration-300" href={nav.href}>
                {nav.icon}
                {nav.label}
              </Link>

              
            </div>
          ))}
        </div>


          {/* LOGIN AND GET STARTED */}


        <div className="text-white flex gap-4 items-center">
          <Link
            className="text-green-500 px-4 rounded-md py-2 gap-2 border flex border-green-500 items-center "
            href={"/auth/login"}
          >
            <User size={18}/>Login
          </Link>
          <Link 
          className="bg-green-500 px-4 rounded-md py-2 justify-center flex border border-green-500 items-center gap-2 hover:bg-transparent hover:text-green-500 duration-300"
          href={"/auth/signup"}>Get Started <ArrowRightCircle size={18} className="hover:animate-pulse"/></Link>
        </div>
      </section>
    </nav>
  );
}
