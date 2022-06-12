import { FC } from 'react'
import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ApolloError } from '@apollo/client'

import { Loader } from 'global'
import { CardArea } from './CardArea'
import { Area } from '../../types'
import { getBackGround } from 'utils'

const useStyles = makeStyles((theme: Theme) => ({
  cardContent: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center'
  },
  progressContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    height: 'auto',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))

type ContentCardsProps = {
  loading: boolean
  error?: ApolloError
  areas?: Area[]
}

const ContentCards: FC<ContentCardsProps> = props => {
  const { loading, error, areas } = props
  const classes = useStyles()

  return (
    <div className={classes.cardContent}>
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>There was an error</h1>
      ) : (
        (areas || []).map(({ code, name, abstract }) => (
          <CardArea
            key={code}
            title={name}
            abstract={abstract}
            backgroundColor={getBackGround(code)}
          />
        ))
      )}
    </div>
  )
}

export { ContentCards }
