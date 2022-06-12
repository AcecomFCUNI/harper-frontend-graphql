import { gql } from '@apollo/client'

const GET_AREAS = gql`
  query getAreas {
    areas: getAreas {
      id
      abstract
      code
      image
      name
      createdAt
      updatedAt
    }
  }
`

export { GET_AREAS }
