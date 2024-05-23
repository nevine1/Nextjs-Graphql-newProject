import React from 'react'
import VideoPlayer from './VideoPlayer'
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';
import { useUser } from '@clerk/nextjs';
import {createEnrollMutation  } from '../../_utils/mutations'
import Link from 'next/link'
const CourseEnrollSection = ({course}) => {

  const memberShip = false; 
  const { user, isLoaded } = useUser();

console.log('hi  membership , this is nevine')
console.log(user)
console.log(course)
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







import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';
import { useUser } from '@clerk/nextjs';
import { createEnrollMutation } from '../../_utils/mutations';
import Link from 'next/link';

const CourseEnrollSection = ({ course }) => {
  const memberShip = false; // Adjust this based on your membership logic
  const { user, isLoaded } = useUser();
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [enrollmentError, setEnrollmentError] = useState(null);

  const handleEnroll = async () => {
    if (!user) {
      console.warn('User is not logged in, cannot enroll.');
      return; // Prevent enrollment if not logged in
    }

    setIsEnrolling(true);
    setEnrollmentError(null);

    try {
      const userEmail = user.email; // Assuming email is stored in user object
      const courseId = course.id; // Assuming course ID is available in course object

      const response = await fetch(YOUR_HYGRAPH_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: createEnrollMutation,
          variables: { userEmail, courseId, slug: course.slug }, // Add course slug as needed
        }),
      });

      const data = await response.json();

      if (data.errors) {
        console.error('Enrollment error:', data.errors);
        setEnrollmentError(data.errors[0].message); 
      } else {
        console.log('User enrolled successfully:', data.data.createUserEnrollCourse.id);
        // Handle successful enrollment (e.g., display success message)
      }
    } catch (err) {
      console.error('Error enrolling user:', err);
      setEnrollmentError(err.message); 
    } finally {
      setIsEnrolling(false);
    }
  };

  return (
    <div className="p-3 bg-primary text-center rounded-sm flex flex-col gap-3">
      <h2 className="text-[20px] text-white text-center font-bold">Enroll to the course</h2>

      {/* User already has membership and logged in */}
      {user && (memberShip || course.free) ? (
        <div>
          <h2 className="text-[15px] text-white font-light">Enroll now to start building your project</h2>
          <Button
            className="bg-white text-primary p-3 rounded-sm transition-all hover:text-white hover:bg-primary"
            disabled={isEnrolling}
            onClick={handleEnroll}
          >
            {isEnrolling ? 'Enrolling...' : 'Enroll Now'}
          </Button>
          {enrollmentError && <p style={{ color: 'red' }}>{enrollmentError}</p>}
        </div>
      ) : !user ? (
        <div>
          <h2 className="text-[15px] text-white font-light">Enroll now to start building your project</h2>
          <Link href="/sign-in">
            <Button
              className="bg-white text-primary p-3 rounded-sm transition-all hover:text-white hover:bg-primary"
            >
              Enroll Now
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <h2 className="text-[15px] text-white font-light">By membership and login</h2>
          <Button className="bg-white text-primary p-3 rounded-sm transition-all hover:text-white hover:bg-primary">
            Buy membership just for $2.99
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseEnrollSection;





