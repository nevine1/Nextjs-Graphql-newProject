import { BadgeIcon, BookOpen, GraduationCap, MenuSquare } from 'lucide-react';
import Link from 'next/link'

const SideNav = () => {
    const menus = [
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
    <div className="bg-white p-5 shadow-sm border h-screen">
     {/* Menu list  */}
     {
        menus.map((item, index) =>(
            <div key={item.id} className="flex gap-3 mt-2 text-[16px] 
                p-2 items-center text-grey-500 cursor-pointer
                hover:bg-primary hover:text-white 
                transition-all ease-out duration-300
                rounded-md
                ">
               <item.icon/> 
              <h2 > {item.name}</h2>
             </div>
        ))
     }
    </div> 
  )
}

export default SideNav;