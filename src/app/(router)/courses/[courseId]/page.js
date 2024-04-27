import React from 'react'
//import { useRouter } from 'next/navigation'
import CourseVideoDescription from '../../_components/CourseVideoDescription';
function CourseDetails({params}) {
 /*  const router = useRouter()
  const { courseId } = router.query;  */

  return (
    <div className="gird grid-cols-1 md:grid-cols-3 p-5 gap-3">
      {/* courseDetails{params.courseId} */}
      <div className="col-span-2 bg-white p-3">
        <h1>course content </h1>
        <CourseVideoDescription/>
      </div>

      <div className="col-span-1 bg-white">

      </div>
    </div>
  )
}

export default CourseDetails