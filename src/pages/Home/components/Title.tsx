import { FC } from 'react'
import { Typography, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/system'

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: '#FFF',
    fontFamily: 'Nunito, sans-serif',
    fontWeight: '700',
    fontSize: '8.5vw'
    // [theme.breakpoints.down('md')]: {
    //   fontSize: '10vw'
    // }
  },
  subtitle: {
    color: '#FFF',
    fontFamily: 'Nunito, sans-serif',
    fontWeight: '300',
    fontSize: '1.8vw'
    // [theme.breakpoints.down('md')]: {
    //   fontSize: '1.8vw'
    // }
  }
}))

type TitleProps = {
  isMobile?: boolean
}

const Title: FC<TitleProps> = ({ isMobile = false }) => {
  const classes = useStyles()

  return (
    <>
      {!isMobile && (
        <Grid
          item
          lg={8}
          md={7}
          container
          // justify='center'
          alignItems='center'
          style={{ width: '100%', height: '100%' }}
        >
          <div style={{ textAlign: 'center' }}>
            <Typography variant='h1' className={classes.title}>
              ACECOM
            </Typography>
            <Typography variant='h2' className={classes.subtitle}>
              Asociación Científica Especializada en Computación
            </Typography>
          </div>
        </Grid>
      )}
    </>
  )
}

export { Title }
