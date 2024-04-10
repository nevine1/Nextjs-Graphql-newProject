"use client"
import SideNav from "./_components/SideNav"

export default function  Layout ({children}:{
    children: React.ReactNode
}) {
    return(
        <div>
            <div className="sm:w-64  sm:block fixed">
                <SideNav/>
            </div>
            <div className="sm:ml-64 ">
                {children}
            </div>
        </div>
    )
}