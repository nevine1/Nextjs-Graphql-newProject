"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import CourseVideoDescription from '../../_components/CourseVideoDescription';
import { courseDetailsQuery } from '../../../_utils/queries'
import { useParams  } from 'next/navigation'
function CourseDetails({params}) {
  const router = useRouter();
  const { id } = useParams()

  const [courseDetails, setCourseDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCourseDetails = async (variables = {}) => {
    try {
      const headers = {
        'content-type': 'application/json'
      };
  
      const body = JSON.stringify({
        query: courseDetailsQuery,
        variables
      });
  
      const response = await fetch(process.env.NEXT_PUBLIC_COURSESLISTS_ENDPOINT, {
        method: 'POST',
        headers,
        body
      });
  
      const data = await response.json();
      return data?.data?.course || null; // Return null if no course found
    } catch (err) {
      console.error('Error fetching course details:', err);
      return null;
    }
  };
  
  

useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const details = await fetchCourseDetails({ id });
        setCourseDetails(details);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);



  return (
    <div className="gird grid-cols-1 md:grid-cols-3 p-5 gap-3">
      {/* courseDetails{params.courseId} */}
      <div className="col-span-2 bg-white p-3">
        <h1>course content { id } is id  </h1>

        <div>
      {/* Display loading state while fetching */}
      {isLoading && <p>Loading course details...</p>}

      {/* Display error message if encountered */}
      {error && <p>Error: {error.message}</p>}

      {/* Render course details if found */}
      {courseDetails && (
        <div>
          <h1>{courseDetails.id} - {courseDetails.name}</h1> {/* Assuming name exists */}
          <p>{courseDetails.description}</p>
          {/* ... other details ... */}
        </div>
      )}

      {/* Handle case where no course is found (optional) */}
      {!courseDetails && <p>Course not found.</p>}
    </div>



        {/* <CourseVideoDescription/> */}
      </div>

      <div className="col-span-1 bg-white">

      </div>
    </div>
  )
}

export default CourseDetails