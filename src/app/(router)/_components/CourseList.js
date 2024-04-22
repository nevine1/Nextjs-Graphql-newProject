import { useEffect, useState } from 'react'
import  GlobalAPI  from '../../_utils/GlobalAPI'
import CourseItem from './CourseItem'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  } from "@/components/ui/select";
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
   
   <div className="p-5 m-5 rounded-lg bg-white">
    <div className="flex items-center justify-between">
      <h2 className="text-[20px] font-bold text-primary">Select options</h2>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    {/* display the courses list */} 
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
      {courses?.length > 0 ? ( // Check if pages has data
        courses.map((course, index) => (
          <div key={index}>
            
            <CourseItem /* {...course} */ course={course} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
   </div>
  )
}

export default CourseList