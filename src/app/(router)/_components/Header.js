"use client"
import React from 'react'
import { Search, BellDot } from 'lucide-react'
import { UserButton, useUser } from '@clerk/nextjs'
import { Button } from '@mui/material'
import Link from 'next/link'
export default function Header({}) {
  const { user, isLoaded } = useUser();
 console.log(user && isLoaded? user.fullName : "not found")
  return (
   <div className="bg-white p-4 flex justify-between ">
     <div className="flex gap-3 border rounded-md p-2">
         <input type="text" placeholder="Search " 
            className="outline-none"
         />
        <Search className="h-5 w-5 " />
    </div>
    <div className="flex items-center gap-3 mr-2">
        <BellDot className="text-gray-500 "/> 
        
        {
          isLoaded && user ? (
            <UserButton afterSignOutUrl='/courses'/>
          ):(
           <Link href={`/sign-in`}>
             <Button variant="outline" color="primary">Get Started</Button>
           </Link>
          )
        }
    </div>
   </div>
  )
}