import { useEffect, useState } from 'react'
import  GlobalAPI  from '../../_utils/GlobalAPI'
function CourseList() {
  const [courses, setCourses] = useState([])
  console.log(courses)


  const fetchCourses = () => {
    GlobalAPI.getAllCourseList().then(resp=>{
      
      setCourses(resp?.courseLists)
      console.log(resp)
    })
  }
useEffect(()=> {
  fetchCourses();
}, [])
  
console.log(courses)
console.log(`coursees lenght is ${courses.length}`)

  return (
    <div>
      {courses?.length > 0 ? ( // Check if pages has data
        courses.map((course) => (
          <div key={course.id}>
            <h3 className="underline bg-red-200 m-2">{course.author}</h3>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default CourseList