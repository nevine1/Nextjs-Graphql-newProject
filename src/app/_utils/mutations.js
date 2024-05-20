const { gql } = require("graphql-request");

export const createEnrollMutation = gql`

mutation CreateEnrollMutation {
  createEnrollMutation(
    data: {userEmail: $userEmail, courseId: $courseId, coursesList: {connect: {slug: $slug}}}
    ) {
      id
    }
  }
    `