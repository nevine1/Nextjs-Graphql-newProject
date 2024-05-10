import { useEffect, useState } from 'react'
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

  
  const getAllMyCourses = async () => {

    try {

      setIsLoading(true);

      const requestBody = {
        query: coursesQuery 
      };
     

      const options = {
        method: 'POST',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(requestBody)
      };

      const response = await fetch(process.env.NEXT_PUBLIC_COURSESLIST, options);
      console.log('response status:', response.status);
      if (response.ok) {
        console.log('response is successful');
        const data = await response.json(); // Parse the JSON response body
        // Now you can use the parsed data (data)
  
        // Check for errors in the GraphQL response
        if (data?.errors) {
          setError(data.errors[0].message);
        } else {
          setCourses(data?.data?.coursesLists);
        }
      } else {
        console.error('Error fetching data:', response.status);
        setError('An error occurred while fetching courses.');
      }
   
    } catch (err) {
      console.log(`ERROR DURING FETCH REQUEST`, err);
      setError('An error occurred while fetching courses.'); // Set a generic error message
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllMyCourses();
  }, []); // Empty dependency array: fetch data only once on component mount

  return (
   
    <div className="p-3 m-3 rounded-lg bg-white">
    <div className="flex items-center justify-between">
      <h2 className="text-[20px] font-bold text-primary">Select options</h2>
      {/* The Select component can be removed if not needed for this page */}
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
    {/* Display the courses list conditionally */}
    {isLoading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error is : {error}</p>
    ) : (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
        {courses?.length > 0 && ( // Check if courses array has data
          courses.map((course, index) => (
            <div key={index}>
              <CourseItem course={course} />
            </div>
          ))
        )}
        {courses?.length === 0 && ( // Handle empty courses scenario
          <p>No courses found.</p>
        )}
      </div>
    )}
  </div>
  )
}

export default CourseList