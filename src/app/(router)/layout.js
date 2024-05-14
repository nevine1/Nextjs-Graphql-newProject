"use client"
import SideNav from "./_components/SideNav"
import Header from './_components/Header'

export default function  Layout ({children}) {
    return(
        <div>
            <div className="sm:w-64  sm:block fixed">
                <SideNav/>
            </div>
            <div className="sm:ml-64 ">
                <Header/>
                {children}
            </div>
        </div>
    )
}