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


 export const coursesQuery = /* GraphQL */`
   query getCoursesLists {
            coursesLists {
            id
            name
            slug
            free
            youtubeUrl
            description {
            markdown
            }
            bannerPicture {
            id
            url
            }
            totalVideos {
            ... on Videos {
                id
                name
                vidoeUrl
            }
            }
            author
        }
        }
    `;
    
    export const courseInfo =  /* GraphQL */`
       query GetCourseDetails($id: ID!) {
            coursesList(where: {id: $id}) {
            author
            bannerPicture {
            url
            }
            description {
            markdown
            }
            free
            slug
            totalVideos {
            ... on Videos {
                id
                name
                vidoeUrl
            }
            }
            youtubeUrl
        }
        }

    `

