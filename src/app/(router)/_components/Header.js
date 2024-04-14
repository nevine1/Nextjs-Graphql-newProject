"use client"
import React from 'react'
import { Search, BellDot } from 'lucide-react'



export default function Header({}) {
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
        {/* <Button>Get Started</Button> */}
    </div>
   </div>
  )
}