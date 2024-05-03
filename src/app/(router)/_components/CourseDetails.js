"use client"
import { useState, useEffect } from 'react';
import { courseInfo } from '../../_utils/queries';
import { useParams } from 'next/navigation';

function CourseDetails() {
 const { id } = useParams();  
console.log(id)
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);




   const fetchingCourseInfo = async(id) =>{ fetch("https://api-ca-central-1.hygraph.com/v2/cluwi9h271dvu08watlqqenwh/master", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query:courseInfo, 
      variables: { id : id},
    }),
  })
    .then(r => r.json())
    .then(data => console.log("data returned:", data))

  } 

  /* const fetchCourseDetails = async (id) => {
    try {
      setIsLoading(true)
      const requestBody = {
        query: courseDetails,
        variables: { id : id},
      };
      const response = await fetch("https://api-ca-central-1.hygraph.com/v2/cluwi9h271dvu08watlqqenwh/master", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data?.data?.course || null;
    } catch (err) {
      console.error('Error fetching course details:', err);
      return null;
    }
  }; */

/*   const fetchingCourseInfo = async (id) => {
    try {
      const response = await fetch("https://api-ca-central-1.hygraph.com/v2/cluwi9h271dvu08watlqqenwh/master", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: courseInfo,
          variables: { id: id },
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      const courseData = data?.data?.course || null;
      console.log("course data:", courseData); // Log only the course data
    } catch (err) {
      console.error('Error fetching course info:', err);
    }
  }; */
  
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const details = await fetchingCourseInfo(id);
      setCourse(details);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
 
console.log(course)
  // ... rest of your component logic ...

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      <h1>Course Deetails isssssssssssssssssss</h1>
      {isLoading && <p>Loading course details...</p>}
      {error && <p>Error: {error.message}</p>}
      {
        course ? (
          course.description
        ): (
          <h1>course is not found</h1>
        )
      }
    </div>
  );
}

export default CourseDetails;




/* fetch("/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query,
    variables: { dice, sides },
  }),
})
  .then(r => r.json())
  .then(data => console.log("data returned:", data)) */

