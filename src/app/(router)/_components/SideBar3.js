"use client"
import { useState, useEffect } from 'react';
import { url2 } from '../../_utils/GlobalAPI'
import { coursesQuery } from '../../_utils/GlobalAPI'
function MyComponent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('url2', coursesQuery /* {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
          query CourseLists {
            courseLists(first: 5, orderBy: name_ASC) {
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
           }
          `,
        }),
      } */);
      const data = await response;
      setPosts(data?.courseLists);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    /* const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('url2', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
            query CourseLists {
              courseLists(first: 5, orderBy: name_ASC) {
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
          }
            `,
          }),
        });
        //const data = await response.json();
        setPosts(data?.courseLists);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }; */

    fetchData();
  }, []); // Empty dependency array: fetch data only once on component mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
     {
      posts?.length > 0 ? (
        posts?.map((post, index) =>(
          <div key={index}>
            <h1>{post.name}</h1>
          </div>
        ))
      ) : (
        <p>Something went wrong </p>
      )
     }
    </ul>
      
  );
}

export default MyComponent;
