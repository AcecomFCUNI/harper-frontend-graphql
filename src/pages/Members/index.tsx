import { useQuery } from '@apollo/client'
import { makeStyles } from '@mui/styles'

import { Member } from './types'
import { GET_MEMBERS } from './graphQL'
import { ListOfMembers } from './components'

const useStyles = makeStyles(() => ({
  membersContent: {
    display: 'block',
    height: '100%'
  }
}))

const Members = () => {
  const classes = useStyles()
  const { loading, data } = useQuery<{ members: Member[] }>(GET_MEMBERS)

  return (
    <div className={classes.membersContent}>
      <ListOfMembers loading={loading} members={data?.members} />
    </div>
  )
}

export { Members }
