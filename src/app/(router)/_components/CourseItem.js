import React from 'react'
import Image from 'next/image'
import Img1 from '../../../../public/assets/imgs/youtube.png'
import Img2 from '../../../../public/assets/imgs/chapter.png'

import  Link  from 'next/link'
const CourseItem = ({/* bannerPicture, title */ course }) => {
    
    const imageLoader = ({ id, src, width, quality }) => {
        // No CDN prefix needed, return the original src
        return src;
      }
      
  return (
      <div className="grid md:grid-cols-1 sm:grid-cols-1 
        border-slate-400 width-full
          bg-gray-100 m-2 rounded-xl
          hover:shadow-md hover:shadow-purple-300
          cursor-pointer 
            ">
             <Link href={`/courses/${course.id}`}>
              <Image src={course.bannerPicture.url}
                loader={imageLoader}
                width={900} height={600} alt={course.author}
                className="border-t-xl   w-full rounded-t-xl"
                  />

            </Link>
          <div className="p-2">
           <div>
           
              <h3 className="font-medium ">{course.name.slice(0, 30)}</h3>
          
              
              <p className="text-[14px] text-gray-400 p-1">{course.author}</p>
           </div>
           {course.totalParts?.length == 0 ? (
              <div className=" flex gap-2">
                <p className=" text-[15px] text-gray-400">Watch on </p>
                <Image src={Img1} width={30} height={30} 
                  alt="youtube image"
                  className=""
                  />
              </div>
            ): (
              <div className=" flex gap-2">
                <p className=" text-[15px] text-gray-400"> Watch all videos </p>
                <Image src={Img2} width={30} height={30} 
                  alt="youtube image"
                  className=""
                  />
              </div>
            )
          }
          <p className="text-[14px]">{course.free? "Free" : "Paid"}</p>


          </div>
          
      
       
    </div>
  )
}

export default CourseItem