import { useEffect } from 'react'
import  GlobalAPI  from '../../_utils/GlobalAPI'
function CourseList() {
  
useEffect(()=> {
  fetchCourses();
}, [])
  const fetchCourses = () => {
    GlobalAPI.getAllCourseList().then(resp=>{
      console.log(resp)
    })
  }
  return (
    <div>CourseList</div>
  )
}

export default CourseList