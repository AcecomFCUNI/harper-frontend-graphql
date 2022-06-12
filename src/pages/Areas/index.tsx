import { useQuery } from '@apollo/client'
import { Hidden } from '@mui/material'

import { ContentCards, ContentMenuAreas } from './components'
import { GET_AREAS } from './graphQL'
import { Area } from './types'

const Areas = () => {
  const { loading, error, data } = useQuery<{ areas: Area[] }>(GET_AREAS)
  const areas = data?.areas

  return (
    <>
      <Hidden smDown>
        <ContentCards loading={loading} error={error} areas={areas} />
      </Hidden>
      <Hidden mdUp>
        <ContentMenuAreas loading={loading} error={error} areas={areas} />
      </Hidden>
    </>
  )
}

export { Areas }
