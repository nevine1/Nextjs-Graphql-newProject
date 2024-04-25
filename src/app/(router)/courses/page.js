"use client"
import { useEffect, useState  } from "react"
import  WelcomeBanner  from "../_components/WelcomeBanner"
import CourseList from "../_components/CourseList"
import { master_graph , coursesQuery} from './../../_utils/GlobalAPI'
import { getAllCourseList } from './../../_utils/GlobalAPI'
import  CoursesList  from '../_components/CourseList'
import SideBanner from "../_components/SideBanners"
import SideBar2 from "../_components/SideBar2"
export default function page () {
  const [courses, setCourses ] = useState([]);


   
    useEffect(() =>{

    }, [])
    
   

    return(
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="col-span-3 ">
                <WelcomeBanner/>
                {/* courses list  */}
                <CourseList/> 
            </div>
                
            <div className="bg-white p-5 ">
               <SideBanner/>
               <SideBar2/>
            </div>
            

        </div>
    )
}
