import React from 'react'
import { Lock } from 'lucide-react'
const CourseContentSection = ({course}) => {
  return (
    <div className="p-3 rounded-sm bg-white">
        <h2 className="text-[20px] font-bold flex gap-2">Course Content</h2>
        {
          course && course.totalVideos.map((item, index) =>(
            <div key={index}>
              <h2 className="  flex border rounded-sm p-2 m-1
                hover:bg-gray-200 hover:text-gray-500
              ">
                <span className="font-bold text-[14px] pr-1">{index+1}.</span>
                 {item.name}
                 <Lock className=" text-[10px] cursor-pointer"/>
                 </h2>
            </div>
          )) 
        }
    </div>
  )
}

export default CourseContentSection