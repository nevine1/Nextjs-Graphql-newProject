"use client"
import { useState, useEffect } from 'react';
import CourseVideoDescription from '../../_components/CourseVideoDescription'
import { courseInfo } from '../../../_utils/queries'
import { useParams } from 'next/navigation';
const page = () => {

  const { id } = useParams();
  console.log('course id:', id); // Log the received id

  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchingCourseInfo = async (id) => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_COURSESLIST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: courseInfo,
          variables: { id },
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('fetched data:', data); // Log the complete response data
      const courseData = data?.data?.courseList || null;
      setCourse(courseData)

    } catch (err) {
      console.error('Error fetching course info:', err);
      throw err; // Re-throw the error for handling in useEffect's catch
    }finally{
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchingCourseInfo(id)
  }, [id]); 

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      <div className="col-span-2 p-3 bg-white">
        <CourseVideoDescription course={course} />
      </div>
       
      
    </div>
  )
}

export default page