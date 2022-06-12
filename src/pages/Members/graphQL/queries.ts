import { gql } from '@apollo/client'

const GET_MEMBERS = gql`
  query getMembers {
    members: getMembers {
      id
      name
      git
      photo
      status {
        name
      }
    }
  }
`
export { GET_MEMBERS }
