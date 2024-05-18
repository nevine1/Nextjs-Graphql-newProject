"use client"
import { useState, useEffect } from 'react';
import CourseVideoDescription from '../../../_components/CourseVideoDescription'
import { courseInfo } from '../../../../_utils/queries'
import { useParams } from 'next/navigation';
import CourseEnrollSection from '../../../_components/CourseEnrollSection';
import CourseContentSection from '../../../_components/CourseContentSection';

const page = () => {

  const { slug } = useParams();
   const [course, setCourse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchingCourseInfo = async (slug) => {
    try {
      setIsLoading(true);

      const response =await fetch(process.env.NEXT_PUBLIC_COURSESLIST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: courseInfo,
          variables: { slug },
        }),
      })
      ;
      const data = await response.json();
      console.log('data')
      console.log(data)
      setCourse(data?.data?.course)
      
     
    } catch (err) {
   
      setError(err.message); 
    } finally {
      setIsLoading(false);
    }
  };
console.log(course)
  useEffect(() => {
    fetchingCourseInfo(slug);
  }, [slug]);



  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      <div className="bg-white p-2 col-span-2">
       {
        course && (
          <CourseVideoDescription course={course} />
        )
       }
      </div>
      <div className="bg-white p-2 col-span-1">
        <CourseEnrollSection course={course} />
       <CourseContentSection course={course} />
      </div>
    </div>
  );
};

export default page