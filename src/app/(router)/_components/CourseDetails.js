
import { useEffect, useState} from 'react'
import { courseDetailsQuery } from '../../_utils/queries'
import { headers } from 'next/headers';
const CourseDetails = ({params}) => {
    const [course, setCourse ] = useState();
    const [error, setError ] = useState(null );
    const [isLoading, setIsLoading] = useState(false)
    console.log(params)
    console.log('params')
    const fetchingCourseDetails = async () =>{
        setIsLoading(true);
        try{
            const requestBody = {
                query: courseDetailsQuery
            }
            const options = {
                method: 'POST', 
                headers:{'content-type': 'application/json'}, 
                body: JSON.stringify(requestBody)
            }
            const response = await (await fetch(process.env.NEXT_PUBLIC_COURSESLISTS_ENDPOINT, options)).json();
            setCourse(response.data?.courseDetails);
            console.log(course)
            console.log('course detailsssssssssssssssssssssssssssssssssss')
        }catch(err){

        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() =>{
        fetchingCourseDetails();
    }, [])
  return (
    <div>CourseDetails</div>
  )
}

export default CourseDetails