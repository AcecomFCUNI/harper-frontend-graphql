import { gql } from '@apollo/client'

const GET_MEMBERS = gql`
  query getMembers {
    members: getMembers {
      id
      name
      displayName
      git
      photo
      status {
        name
      }
    }
  }
`
export { GET_MEMBERS }
