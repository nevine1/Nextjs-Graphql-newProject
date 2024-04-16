
import  WelcomeBanner  from "../_components/WelcomeBanner"
import CourseList from "../_components/CourseList"
export default function page () {
    return(
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="col-span-2">
                <WelcomeBanner/>
            </div>

            <div>
              <CourseList/>  
            </div>
            

        </div>
    )
}