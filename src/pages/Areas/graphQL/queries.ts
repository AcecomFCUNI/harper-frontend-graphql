import { gql } from '@apollo/client'

const GET_AREAS = gql`
  query getAreas {
    areas: getAreas {
      abstract
      code
      image
      name
    }
  }
`

export { GET_AREAS }
