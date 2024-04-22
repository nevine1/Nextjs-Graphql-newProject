import React from 'react'
import Image from 'next/image'
const CourseItem = ({/* bannerPicture, title */ course }) => {

    const imageLoader = ({ src, width, quality }) => {
        // No CDN prefix needed, return the original src
        return src;
      }
  return (
    <div className="grid md:grid-cols-1 sm:grid-cols-1 p-4 bg-red-200 m-2 border-rounded">
        
          <Image src={course.bannerPicture.url}
            loader={imageLoader}
            width={900} height={600} alt={course.author}
            className="border-t-xl  p-1 w-100"
            />
          <div >
            <h3 className="font-medium ">{course.name.slice(0, 30)}</h3>
            <p className="text-[14px] text-gray-400 p-1">{course.author}</p>
          </div>
      
       
    </div>
  )
}

export default CourseItem