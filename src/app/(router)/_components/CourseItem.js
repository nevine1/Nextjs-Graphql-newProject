import React from 'react'
import Image from 'next/image'
const CourseItem = ({/* bannerPicture, title */ course }) => {

    const imageLoader = ({ src, width, quality }) => {
        // No CDN prefix needed, return the original src
        return src;
      }
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 ">
        <Image src={course.bannerPicture.url}
        loader={imageLoader}
        width={500} height={400} alt={course.author} />
      
       
    </div>
  )
}

export default CourseItem