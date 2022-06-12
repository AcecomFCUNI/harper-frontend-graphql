import { useQuery } from '@apollo/client'

import { GET_AREAS } from './graphQL'

const Areas = () => {
  const { loading, error, data } = useQuery(GET_AREAS)

  console.log({ loading, error, areas: data })

  return <div>Areas</div>
}

export { Areas }
