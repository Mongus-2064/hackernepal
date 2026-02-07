"use client"

import React from 'react'
import {labs} from "@/dummydatas/Labsname"
import { Play, Router } from 'lucide-react'
import Link from 'next/link'


export default function page() {

 


  return (
    <div className='pt-25 min-h-screen  bg-gray-950'>
      <div className='grid grid-cols-3 gap-4 max-w-7xl mx-auto '>
        {labs.map((lab)=>(

          <div
          className='bg-gray-900 border hover:bg-gray-950 hover:scale-[1.03] transition-transform duration-300 border-gray-800 flex flex-col gap-8 p-4 rounded-md'
          key={lab.id}>
            <div className='flex gap-2 justify-center'>
              <div>
              <p>{lab.icon}</p>
            </div>
            <div className='flex flex-col gap-2 h-32 overflow-x-hidden'>
              <p className='text-white font-bold'>{lab.name}</p>
              <p className='text-gray-400'>{lab.description}</p>
              
            </div>
            </div>
            
            <Link 
            href={`/Labs/${lab.slug}`}
            className='flex p-2 hover:cursor-pointer hover:bg-green-700 hover:scale-[1.02] duration-300 transition-transform rounded-md w-full items-center bg-green-500 justify-center text-white gap-2 '>Start Lab<Play size={18}/></Link>
          </div>

        ))}
      </div>
    </div>
  )
}
