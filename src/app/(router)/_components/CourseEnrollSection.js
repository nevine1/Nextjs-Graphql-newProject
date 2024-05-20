import React from 'react'
import VideoPlayer from './VideoPlayer'
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link'
const CourseEnrollSection = ({course}) => {

  const memberShip = false; 
  const { user, isLoaded } = useUser();



  return (
    <div className="p-3 bg-primary text-center rounded-sm flex flex-col gap-3">
        <h2 className="text-[20px] text-white text-center font-bold">Enroll to the course</h2>
    
      {/* user already has membership and logged in */}
        {
         user && (memberShip || course.free)  ? (
            <div>
              <h2 className="text-[15px] text-white font-light">Enroll now to start building your project</h2>
              <Button className="bg-white text-primary p-3
                 rounded-sm transition-all hover:text-white
                  hover:bg-primary">
                    Enroll Now
              </Button>
            </div>
          ) : !user ? (
            <div>
              <h2 className="text-[15px] text-white font-light">Enroll now to start building your project</h2>
              <Link href="/sign-in">
                <Button className="bg-white text-primary p-3
                  rounded-sm transition-all hover:text-white
                    hover:bg-primary">
                      Enroll Now
                </Button>
              </Link>
            </div>
          ):(
        
            <div>
              <h2 className="text-[15px] text-white font-light">By membership and login</h2>
              <Button className="bg-white text-primary p-3 rounded-sm transition-all hover:text-white hover:bg-primary">Buy membership just for $2.99</Button>
            </div>
          )
        }
        

       
    </div>
  )
}

export default CourseEnrollSection