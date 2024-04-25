"use client"
import { useState, useEffect } from 'react';
import { url2 } from '../../_utils/queries';
import { coursesQuery } from '../../_utils/queries';

function MyComponent() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllMyCourses = async () => {
    try {
      
      setIsLoading(true);
      const headers = {
        'content-type': 'application/json'
      };
      const requestBody = {
        query: `query CourseLists {
          courseLists() {
              author
              createdAt
              description
              free
              id
              name
              totalParts
              uploadedDate
              youtbueUrl
              bannerPicture {
              url
              }
              updatedBy {
              id
              name
              }
            
          }
      }`
      };
      const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody)
      };
      const response = await (await fetch(url2, options)).json();
      //console.log('RESPONSE FROM FETCH REQUEST', response?.data);
      setCourses(response?.data?.courseLists)
    }
    catch (err) {
      console.log('ERROR DURING FETCH REQUEST', err);
    }
    finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllMyCourses();
  }, []); // Empty dependency array: fetch data only once on component mount

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
    {courses?.length > 0 && (
      courses.map((course, index) => (
        <li key={index}>
          {course.name}
        </li>
      ))
    )}
    {courses?.length === 0 && <p>No courses found.</p>}
    {error && <p>Error: {error.message}</p>}
  </ul>
  );
}

export default MyComponent;