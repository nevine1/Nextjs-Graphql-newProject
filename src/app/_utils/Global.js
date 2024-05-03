

import { request, gql , GraphQLClient} from "graphql-request"
 const url = "https://api-ca-central-1.hygraph.com/v2/cluwi9h271dvu08watlqqenwh/master";
 
    
    const courseQy = gql`
        query courseInfo($courseId: ID!) {
        singleCourse(id: $courseId) {
            author
            bannerPicture {
            id
            url
            }
            free
            id
            name
            totalParts
            youtbueUrl
            description
            }
        }
     
    `



export const getCourseById = async (courseId) => {
    const client = new GraphQLClient(url);
    try {
      const data = await client.request(courseDetailsQuery, { courseId });
      return data.course;
    } catch (error) {
      console.error('Error fetching course details:', error);
      throw error; // Re-throw to handle in CourseDetails
    }

}