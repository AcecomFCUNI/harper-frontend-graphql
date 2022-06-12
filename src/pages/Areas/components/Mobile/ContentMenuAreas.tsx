import { FC } from 'react'
import { ApolloError } from '@apollo/client'

import { InfoArea } from './InfoArea'
import { Loader } from 'global'
import { Area } from '../../types'
import { BottomMenu } from './BottomMenu'
import { MobileLayoutContextAPI } from './context'

type ContentMenuAreasProps = {
  loading: boolean
  error?: ApolloError
  areas?: Area[]
}

const ContentMenuAreas: FC<ContentMenuAreasProps> = props => {
  const { loading, error, areas } = props

  return loading ? (
    <Loader />
  ) : error ? (
    <h1>Error</h1>
  ) : (
    <MobileLayoutContextAPI areas={areas}>
      <InfoArea />
      <BottomMenu />
    </MobileLayoutContextAPI>
  )
}

export { ContentMenuAreas }
