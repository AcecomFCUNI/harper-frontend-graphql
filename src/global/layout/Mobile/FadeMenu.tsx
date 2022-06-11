import { useNavigate } from 'react-router-dom'
import { Typography, Fade, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { routes } from 'routes'

const useStyles = makeStyles((theme: Theme) => ({
  menuFab: {
    position: 'fixed',
    zIndex: 200,
    width: '100%',
    height: '100%',
    backgroundColor: theme.customColors.upColor
  },
  menuOption: {
    width: '100%',
    height: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    '&:hover': {
      color: theme.customColors.bottomColor
    }
  },
  menuOptionFont: {
    fontSize: '9vw',
    fontWeight: 'bold'
  }
}))

const FadeMenu = () => {
  const classes = useStyles()
  const history = useNavigate()

  return (
    <Fade in={true}>
      <div className={classes.menuFab}>
        {routes.map(({ label, path }) => (
          <div
            key={label}
            className={classes.menuOption}
            onClick={() => {
              history(path)
            }}
          >
            <Typography variant='h2' className={classes.menuOptionFont}>
              {label}
            </Typography>
          </div>
        ))}
      </div>
    </Fade>
  )
}

export { FadeMenu }
