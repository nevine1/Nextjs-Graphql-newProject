
import { useState, useEffect } from 'react'
import  WelcomeBanner  from "../_components/WelcomeBanner"
//import CourseList from "../_components/CourseList"
import { master_graph , coursesQuery} from './../../_utils/GlobalAPI'
import { getAllCourses } from './../../_utils/GlobalAPI'
import  geAllCoursesList  from '../_components/CourseList'
export default function CourseList () {
    const url="https://api-ca-central-1.hygraph.com/v2/cluwi9h271dvu08watlqqenwh/master"
    const [courses , setCourses ] = useState([]);
    const [ error , setError ] = useState( null );
    const [isLoading , setIsLoading ] = useState(false)

   /*  if(error){
        return <h1>there  is something went wrogn , try again </h1>
    } */
    const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              query: coursesQuery, // Replace with your actual GraphQL query
              variables: { /* Optional variables for your query */ },
            }),
          });
    
          const result = await response.json();
          if (result.errors) {
            setError(result.errors[0].message);
          } else {
            setData(result.data);
          }
        } catch (err) {
          setError(err.message);
        } finally {
            setIsLoading(false);
        }
      };
    
      useEffect(() => {
        fetchData();
        console.log(fetchData())
      }, []);
    
    
    return(
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
          
                { courses.map((course) =>(
                    <div key={index}>
                        <h1>{course.name} </h1>
                    </div>
                ))}
            
            

        </div>
    )
}
