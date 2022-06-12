import { useQuery } from '@apollo/client'

import { GET_AREAS } from './graphQL'
import { Area } from './types'

const Areas = () => {
  const { loading, error, data } = useQuery<Area[]>(GET_AREAS)

  console.log({ loading, error, areas: data })

  return <div>Areas</div>
}

export { Areas }
