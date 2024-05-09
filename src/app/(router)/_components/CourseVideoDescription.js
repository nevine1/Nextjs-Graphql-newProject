"use client"
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";
function CourseVideoDescription({course}) {

  return (
    <div >
      
      
      {course && ( 
        <div className="m-2"> 
          <h1 className="text-[20px] font-semibold mt-2">{course.name}</h1>
          <h1 className="text-gray-500 text-[14px] mb-2">{course.author}</h1>
          {/* <VideoPlayer   videoUrl={course?.totalChapters?.videoUrl?.url[1]} /> */}
          <VideoPlayer   videoUrl={course?.youtubeUrl} />
          <div>
            <h2 className="text-[17px] font-semibold mt-2">About this course</h2>
            
              <Markdown className="text-[14px] p-3 leading-6 font-light">
                {course.description}
              </Markdown>
            
          </div>
        </div>
      )}
   
    </div>
  );
}

export default CourseVideoDescription;
