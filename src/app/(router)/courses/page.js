"use client"
import { useEffect, useState  } from "react"
import  WelcomeBanner  from "../_components/WelcomeBanner"
import CourseList from "../_components/CourseList"
import { master_graph , coursesQuery} from '../../_utils/queries'
import { getAllCourseList } from '../../_utils/queries'
import  CoursesList  from '../_components/CourseList'
import SideBanner from "../_components/SideBanners"
import SideBar2 from "../_components/SideBar2"
export default function page () {
 

    return(
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-3 ">
            <div className="col-span-3 ">
                <WelcomeBanner/>
                {/* courses list  */}
                <CourseList/> 
            </div>
                
            <div className="bg-white mt-3 p-3 ">
               <SideBanner/>
            </div>
            

        </div>
    )
}
