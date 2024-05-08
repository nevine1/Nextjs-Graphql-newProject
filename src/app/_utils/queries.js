import { request, gql , GraphQLClient} from "graphql-request"
 

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
                youtubeUrl
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


 export const coursesQuery =  gql  `
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
            youtubeUrl
            slug
            bannerPicture {
            url
            }
            updatedBy {
            id
            name
            }
            totalChapters {
            ... on TotalChapters {
                id
                name
                videoUrl {
                url
                }
            }
            }
        }
    }
    `;
    
    export const courseInfo =  gql `
       query GetCourseDetails($slug: String) {
        courseList(where: {slug: $slug}) {
            author
            description
            bannerPicture {
            url
            }
            free
            id
            name
            slug
            totalChapters {
            ... on TotalChapters {
                id
                name
                videoUrl {
                id
                url
                }
            }
            }
            youtubeUrl
            totalParts
        }
        }

    `

