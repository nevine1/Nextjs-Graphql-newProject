"use client"
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";
function CourseVideoDescription({course}) {
console.log(' course in separtate page ')

console.log(course.totalVideos[0]?.vidoeUrl)
  return (
    <div >
      
      
      {course && ( 
        <div className="m-2"> 
          <h1 className="text-[20px] font-semibold mt-2">{course.name}</h1>
          <h1 className="text-gray-500 text-[14px] mb-2">{course.author}</h1>
        
          {course?.totalVideos?.length > 0 && (
            <VideoPlayer 
              videoUrl={course.totalVideos[0].videoUrl} />
          
            )}
          <div>
            <h2 className="text-[17px] font-semibold mt-2">About this course</h2>
            
              <Markdown className="text-[13px] p-3 leading-6 font-light">
                {course.description.markdown}
              </Markdown>
            
          </div>
        </div>
      )}
   
    </div>
  );
}

export default CourseVideoDescription;
