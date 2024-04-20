import { useEffect, useState } from 'react'
import  GlobalAPI  from '../../_utils/GlobalAPI'
function CourseList() {
  const [courses, setCourses] = useState([])
useEffect(()=> {
  fetchCourses();
}, [])
  const fetchCourses = () => {
    GlobalAPI.getAllCourseList().then(resp=>{
      console.log(resp)
      setCourses(resp?.courseLists)
    })
  }
  return (
    <div>
      {
        courses.map((course) =>{
          <div>
            { course.name}
          </div>
        })
      }
    </div>
  )
}

export default CourseList