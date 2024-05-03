"use client"
import { useState, useEffect } from 'react';
import { courseInfo } from '../../_utils/queries';
import { useParams } from 'next/navigation';

function CourseVideoDescription() {
  const { id } = useParams();
  console.log('course id:', id); // Log the received id

  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchingCourseInfo = async (id) => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_COURSESLISTS_ENDPOINT, {
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
      //return courseData;
      console.log(courseData)
      setCourse(courseData)
    } catch (err) {
      console.error('Error fetching course info:', err);
      throw err; // Re-throw the error for handling in useEffect's catch
    }
  };
 

  useEffect(() => {
   
    fetchingCourseInfo(id)
  }, [id]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      <h1>Course Details</h1>
      
      {isLoading && <p>Loading course details...</p>}
      {error && <p>Error: {error.message}</p>}
      {course && ( // Only render course details if course is available
        <> {/* Use a fragment to avoid unnecessary wrapper */}
          <h1>{course.description}</h1>
          {/* Add other course details as needed */}
        </>
      )}
      {!course && !isLoading && <h1>Course not found</h1>} 
    </div>
  );
}

export default CourseVideoDescription;
