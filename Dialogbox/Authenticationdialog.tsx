"use client"

import React, { useState } from 'react'

import { Cross, Crosshair, CrossIcon, LucideCross, X } from 'lucide-react'
import { dummynames } from '@/dummydatas/auth'

interface IOpened {
  opened:(value:boolean)=> void;
}



export default function Authenticationdialog({opened}: IOpened) {
  


  return (

    <main className='absolute flex w-96 h-60  left-120 '>
        <section className='bg-white  h-full w-full p-4 rounded-md'>
          <h1>Username</h1>
          
          <div className= ' overflow-y-scroll  h-32 bg-gray-300 rounded-md p-2'>
            {dummynames.map((username)=>(
              <div key={username.id}>
                <p>{username.username}</p>
              </div>
            ))}
          </div>

            <div className='pt-2 w-full'>
            <button 
            onClick={()=> opened(false)}
            className='flex px-4 py justify-center py-2 hover:cursor-pointer hover:bg-red-600 w-full rounded-md text-white bg-red-500'>Close<X/></button>

            </div>

        </section>

              


    </main>

  )
}
