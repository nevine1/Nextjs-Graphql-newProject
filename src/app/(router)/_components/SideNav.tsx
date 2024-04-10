import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react';
import React from 'react'



const SideNav = (props: Props) => {
    const menu = [
        {
            id: 1, 
            name: "All Courses", 
            icon: BookOpen
        }, 
        {
            id: 2, 
            name: "MemberShip", 
            icon: BadgeIcon
        }, 
        {
            id: 3, 
            name: "Be_Instructor",
            icon: GraduationCap
        }
    ]
  return (
    <div className="sm:w-64 hidden sm:block fixed">SideNav</div>
  )
}

export default SideNav;