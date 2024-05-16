"use client"
import React from 'react'
import { Search, BellDot } from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@mui/material'
import Link from 'next/link'
export default function Header({}) {
  const { user } = useUser();
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
          user ? (
            <Button variant="contained">loggedIn</Button>
          ):(
            <Link href="/">SignUp</Link>
          )
        }
    </div>
   </div>
  )
}