import { gql } from "graphql-request"

const MASTER_URL="https://api-ca-central-1.hygraph.com/v2/"+process.env.MASTER_URL_KEY+"/master"

/* const getAllCourseList = async () =>{ */
    const query = gql`
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
    
    /* const result = await request(MASTER_URL, query);
    return result;  */
/* } */

/* export default {
    getAllCourseList
} */