import React from 'react'
import VideoPlayer from './VideoPlayer'
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';

const CourseEnrollSection = () => {
  const memberShip = true; 
  return (
    <div className="p-3 bg-primary text-center rounded-sm flex flex-col gap-3">
        <h2 className="text-[20px] text-white text-center font-bold">Enroll to the course</h2>
    
        {
          memberShip ? (
            <div>
                  {/* if user has already membership and login  */}
              <h2 className="text-[15px] text-white font-light">Enroll now to start building your project</h2>
              <Button className="bg-white text-primary p-3
                 rounded-sm transition-all hover:text-white
                  hover:bg-primary">
                    Enroll Now
              </Button>
            </div>
          ) : (
        
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