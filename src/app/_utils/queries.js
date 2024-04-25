import { request, gql , GraphQLClient} from "graphql-request"

 const url = "https://api-ca-central-1.hygraph.com/v2/cluwi9h271dvu08watlqqenwh/master";
 export const COURSES_LIST = process.env.COURSESLISTS_ENDPOINT;
/* const graphQLClient = new GraphQLClient(master_graph) */
const getAllCourseList = async () =>{
    const coursesQuery = gql`
        query CourseLists {
            courseLists(first: 5, orderBy: name_ASC) {
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


const getSideBanner2 = async () =>{
    const sideBannerQuery = `
        query SideBanner {
            sideBanners {
            name
            id
            url
            banner {
                url
                id
            }
            }
        }
     `
     const result = await request(url, sideBannerQuery);
     return result;


    }
    export default {
        getAllCourseList, 
        getSideBanner2
    }

  

   export const sideBannerQuery = /* GraphQL */ `
    query SideBanner {
        sideBanners {
        name
        id
        url
        banner {
            url
            id
        }
        }
    }
 `


 export const coursesQuery = /* gql */ `
    query CourseLists {
        courseLists(first: 5, orderBy: name_ASC) {
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
