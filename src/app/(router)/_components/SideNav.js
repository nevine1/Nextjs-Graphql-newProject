
import { useEffect } from 'react'
import { BadgeIcon, BookOpen, GraduationCap, LayoutDashboard, MenuSquare } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
const SideNav = () => {
    const path = usePathname();
    const { user, isLoaded} = useUser();
    const menus = [
        {
            id: 1, 
            name: "Dashboard", 
            icon: LayoutDashboard, 
            path:"/dashboard", 
            auth: user,
        }, 
        {
            id: 2, 
            name: "All Courses", 
            icon: BookOpen, 
            path:"courses", 
            auth: true,
        }, 
        {
            id: 3, 
            name: "MemberShip", 
            icon: BadgeIcon,
            path:"/membership",
            auth: true,
        }, 
        {
            id: 4, 
            name: "Be_Instructor",
            icon: GraduationCap, 
            path:"/graduation",
            auth: true,
        }
    ]
    
  return (
    <div className="bg-white p-3 shadow-sm border h-screen">
     {/* Menu list  */}
     {
       isLoaded&&user ? (
            menus.map((item, index) =>(
                <Link href={item.path} key={index}>
                    <div key={item.id} className= {`group flex gap-3 mt-2 text-[16px] 
                        p-2 items-center text-grey-500 cursor-pointer
                        hover:bg-primary hover:text-white 
                        transition-all ease-out duration-300
                        rounded-md
                        ${path.includes(item.path) && `text-white bg-primary`}`
                    }
                        >
                        <item.icon/> 
                        <h2 > {item.name}</h2>
                    </div>
                </Link>
            ))
       ):(
        <Link href="/courses">Courses</Link>
       ) 
     }
    </div> 
  )
}

export default SideNav;