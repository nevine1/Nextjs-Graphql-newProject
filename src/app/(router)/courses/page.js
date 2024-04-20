"use client"
import { useEffect, useState  } from "react"
import  WelcomeBanner  from "../_components/WelcomeBanner"
import CourseList from "../_components/CourseList"
import { master_graph , coursesQuery} from './../../_utils/GlobalAPI'
import { getAllCourseList } from './../../_utils/GlobalAPI'
import  geAllCoursesList  from '../_components/CourseList'
export default function page () {
  const [courses, setCourses ] = useState([]);

   /*  if(error){
        return <h1>there  is something went wrogn , try again </h1>
    } */
   
    useEffect(() =>{

    }, [])
    
    const getBannerCourses = async () =>{
        const resp = await getAllCourseList();
        setCourses(resp?.courseLists)
    }
    console.log(getBannerCourses); 
    return(
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="col-span-2">
                <WelcomeBanner/>
            </div>
                
            <div>
              <CourseList/>  
            </div>
            

        </div>
    )
}
