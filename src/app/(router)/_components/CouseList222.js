import { useEffect, useState } from 'react'
import { url2 } from '../../_utils/queries';
import { coursesQuery } from '../../_utils/queries';
import CourseItem from './CourseItem'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  } from "@/components/ui/select";
function CourseList() {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  console.log(courses)


  const getAllMyCourses = async () => {
    try {
      
      setIsLoading(true);
      const headers = {
        'content-type': 'application/json'
      };
      const requestBody = {
        query: coursesQuery /* `query CourseLists {
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
      }` */
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
   
   <div className="p-5 m-5 rounded-lg bg-white">
    <div className="flex items-center justify-between">
      <h2 className="text-[20px] font-bold text-primary">Select options</h2>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    {/* display the courses list */} 
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
      {courses?.length > 0 ? ( // Check if pages has data
        courses.map((course, index) => (
          <div key={index}>
            
            <CourseItem /* {...course} */ course={course} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
   </div>
  )
}

export default CourseList