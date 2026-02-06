import Image from "next/image";
import React from "react";
import Gridbackground from "./Gridbackground";
import Link from "next/link";
import { Book, LockIcon } from "lucide-react";

export default function Herosection() {


  return (
    <main className="w-full  ">
      <section className="w-full  relative min-h-screen" >
        <Gridbackground/>

           <div className=" absolute z-20 inset-0 max-w-6xl mx-auto flex items-center  pt-20">
          <div className="w-full flex flex-col gap-6">



            <p className="text-green-500  logo text-4xl">
              Learn Hacking like a Pro
            </p>



            <p className="text-gray-400">
              {" "}
              Master ethical hacking through practical labs, real attack
              scenarios, and step-by-step guidance designed to turn beginners
              into confident cybersecurity pros.
            </p>

            <div className="flex gap-4 items-center ">
              <Link
              className="text-white px-8 py-2 border-none shadow-lg shadow-green-500/50  rounded-md bg-green-700  border hover:scale-105 transition-transform duration-300 flex items-center gap-2 "
              href={"/auth/signup"}><Book size={18}/>Start Hacking Today</Link>
              <Link
              className="text-white border border-green-700 px-8 py-2 rounded-md flex gap-2 items-center hover:scale-105 transition-transform duration-300 hover:bg-green-950"
              href={"/labs"}><LockIcon size={18}/>View attacks</Link>
            </div>

          </div>
          <div className="w-full">
            <Image
            src={"/hero.png"}
            alt="heroimage"
            loading="lazy"
            width={1200}
            height={1200}
            />
          </div>
        </div>
       
      </section>
    </main>
  );
}
