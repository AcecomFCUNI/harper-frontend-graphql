import { FC } from 'react'
import { Grid, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Loader } from 'global'
import { MemberCard } from './MemberCard'
import { Member } from '../types'

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    backgroundColor: '#D9D9D9',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '50px'
  },
  content: {
    width: '1100px',
    [theme.breakpoints.down('lg')]: {
      width: '800px'
    },
    [theme.breakpoints.down('md')]: {
      width: '640px'
    },
    [theme.breakpoints.down('smd')]: {
      width: '90%'
    }
  },
  title: {
    position: 'relative',
    zIndex: 100,
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: '60px',
    color: '#222222',
    padding: '100px 0 30px 0',
    borderBottom: '5px solid #222222',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10vw'
    }
  }
}))

type ListOfMembersProps = {
  loading: boolean
  members?: Member[]
}

const ListOfMembers: FC<ListOfMembersProps> = props => {
  const { loading, members } = props
  const regularMembers: Member[] = []
  const boardOfDirectors = (members || []).filter(member => {
    member.status.name === 'Regular' && regularMembers.push(member)

    return member.status.name === 'Junta Directiva'
  })
  const classes = useStyles()

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.title}>Junta Directiva</div>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            justifyContent='center'
          >
            {boardOfDirectors.map(
              ({ id, name, displayName, photo, git, linkedin }) => (
                <Grid key={id} item xl={4} lg={4} md={6} sm={6} xs={12}>
                  <MemberCard
                    name={displayName || name}
                    photo={photo}
                    git={git}
                    linkedin={linkedin}
                  />
                </Grid>
              )
            )}
          </Grid>
          <div className={classes.title}>Miembros</div>
          <Grid container spacing={2} justifyContent='center'>
            {regularMembers.map(
              ({ id, name, displayName, photo, git, linkedin }) => (
                <Grid key={id} item xl={4} lg={4} md={6} sm={6} xs={12}>
                  <MemberCard
                    name={displayName || name}
                    photo={photo}
                    git={git}
                    linkedin={linkedin}
                  />
                </Grid>
              )
            )}
          </Grid>
        </div>
      </div>
    </>
  )
}

export { ListOfMembers }
