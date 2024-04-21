import { request, gql , GraphQLClient} from "graphql-request"

 const url = "https://api-ca-central-1.hygraph.com/v2/cluwi9h271dvu08watlqqenwh/master";
/* const graphQLClient = new GraphQLClient(master_graph) */
const getAllCourseList = async () =>{
    const coursesQuery = gql`
        query CourseLists {
            courseLists {
                author
                createdAt
                description
                free
                id
                name
                totalParts
                uploadedDate
                youtbueUrl
                bannerPicture {
                url
                }
                updatedBy {
                id
                name
                }
              
            }
        }
    `;
    
   const result = await request(url, coursesQuery);
    return result; 
}
export default {
    getAllCourseList
}
