"use client"
import { useState, useEffect } from 'react';
import CourseVideoDescription from '../../_components/CourseVideoDescription'
import { courseInfo } from '../../../_utils/queries'
import { useParams } from 'next/navigation';
import CourseEnrollSection from '../../_components/CourseEnrollSection';
import CourseContentSection from '../../_components/CourseContentSection';
const page = () => {

  const { id } = useParams();

  // Log the received slug for debugging purposes
  console.log('slug:', id);

  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchingCourseInfo = async (id) => {
    try {
      setIsLoading(true);

      const response = await fetch(process.env.NEXT_PUBLIC_COURSESLIST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: courseInfo,
          variables: { id },
        }),
      });

      /* if (!response.ok) {
        throw new Error('Network response was not ok');
      } */

      const resData = await response.json();
      console.log('Course Details Response:', resData); // Log detailed response data for debugging

      const courseData = resData?.data?.courseBySlug || null;
      setCourse(courseData);
      console.log(course)
    } catch (err) {
   
      setError(err.message); // Set a user-friendly error message
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchingCourseInfo(id);
  }, [id]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      <div className="col-span-2 p-4 bg-white">
        {course && (
          <CourseVideoDescription course={course} />
        )}
        {isLoading && <p>Loading course details...</p>}
        {error && <p>Error: {error}</p>}
      </div>
      <div className="col-span-1 p-4 bg-white">
        <CourseEnrollSection />
        {/* <h2>{course.name}</h2> */}
        {course && <CourseContentSection course={course} />}
      </div>
    </div>
  );
};

export default page