import { request, gql , GraphQLClient} from "graphql-request"

export const master_graph = process.env.MASTER_URL;
const graphQLClient = new GraphQLClient(master_graph)
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
                createdBy
            }
        }
    `;
    
   // const result = await request(MASTER_URL, query);
    const result = await graphQLClient.request( query);
    return result; 
}

/* export default {
    getAllCourseList
} */
