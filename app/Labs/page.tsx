import React from 'react'
import Link from 'next/link'

export default function page() {

  const Labs = [{id:1,labname:"authentication",description:""}]

  return (
    <div className='pt-20 min-h-screen bg-gray-950'>
        <Link href={"/Labs/Authenticationlab"} className='text-white'>Authentication Lab</Link>
    </div>
  )
}
