"use client"
import VideoPlayer from "./VideoPlayer";

function CourseVideoDescription({course}) {

  return (
    <div >
      
      
      {course && ( // Only render course details if course is available
        <div> {/* Use a fragment to avoid unnecessary wrapper */}
          <h1 className="text-[20px] font-semibold ">{course.name}</h1>
          <h1 className="text-gray-500 text-[14px]">{course.author}</h1>
          <VideoPlayer videoUrl={course?.youtbueUrl[2]} video/>
        </div>
      )}
   
    </div>
  );
}

export default CourseVideoDescription;
