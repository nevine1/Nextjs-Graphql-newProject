import { BadgeIcon, BookOpen, GraduationCap, MenuSquare } from 'lucide-react';
import Link from 'next/link'

const SideNav = (props: Props) => {
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
    <div className="sm:w-64 hidden sm:block fixed">
     {/* Menu list  */}
     {
        menus.map((item, index) =>(
            <h2 key={item.id}>{item.name} {item.icon}</h2>
        ))
     }
    </div> 
  )
}

export default SideNav;