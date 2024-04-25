"use client"
import { useState, useEffect } from 'react';
import { url2 } from '../../_utils/GlobalAPI';
import { coursesQuery } from '../../_utils/GlobalAPI';

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
      console.log('RESPONSE FROM FETCH REQUEST', response?.data);
      setUserDetails(response?.data?.nextUser ?? {});
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {posts?.length > 0 ? (
        posts?.map((post, index) => (
          <div key={index}>
            <h1>{post.name}</h1>
          </div>
        ))
      ) : (
        <p>Something went wrong </p>
      )}
    </ul>
  );
}

export default MyComponent;




/* const getUserDetailByFetchAPICall = async () => {
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
    }`,
      variables: { email }
    };
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody)
    };
    const response = await (await fetch(url2, options)).json();
    console.log('RESPONSE FROM FETCH REQUEST', response?.data);
    setUserDetails(response?.data?.nextUser ?? {});
  }
  catch (err) {
    console.log('ERROR DURING FETCH REQUEST', err);
  }
  finally {
    setIsLoading(false);
  }
}; */