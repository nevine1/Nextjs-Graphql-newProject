import { useState } from 'react'
import { Lock, Play } from 'lucide-react'
const CourseContentSection = ({course}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = () =>{
    setActiveIndex(activeIndex+1)
  }
  return (
    <div className="p-3 rounded-sm bg-white">
        <h2 className="text-[20px] font-bold flex gap-2 cursor-pointer">Course Content</h2>
        {
          course && course.totalVideos.map((item, index) =>(
            <div key={index}>
              <h3 className={`flex justify-between border rounded-sm p-2 m-1
                hover:bg-gray-200 hover:text-gray-500 
                ${activeIndex==index && 'bg-primary text-white'}`}
                onClick={handleClick}
              >
                <span className=" text-[14px] pr-1 text-left" >{index+1}. 
                   {item.name}</span>
                {
                  activeIndex == index ? 
                  <Play className="h-4 w-4" /> : 
                  <Lock className="h-4 w-4" />
                }
                 
                 </h3>
            </div>
          )) 
        }
    </div>
  )
}

export default CourseContentSection