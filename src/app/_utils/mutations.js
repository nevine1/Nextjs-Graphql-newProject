const { gql } = require("graphql-request");

export const createEnrollMutation = gql`

mutation CreateUserEnrollCourse($userEmail: String!, $courseId: String!) {
  createUserEnrollCourse(
    data: {
      userEmail: $userEmail,
      courseId: $courseId,
      coursesList: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
    `