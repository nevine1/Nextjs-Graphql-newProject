"use client"
import { useEffect, useState} from 'react'
import { courseDetailsQuery } from '../../_utils/queries'
//import { useParams } from 'next/navigation'
const CourseVideoDescription = ({params}) => {
    const [course, setCourse ] = useState();
    const [error, setError ] = useState(null );
    const [isLoading, setIsLoading] = useState(false)


//const param = useParam();

  return (
    <div>CourseDetails </div>
  )
}

export default CourseVideoDescription