import { useContext } from 'react'
import { Fab, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

import { MobileLayoutContext } from './context'

const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    backgroundColor: theme.fab.mainColor,
    position: 'fixed',
    color: theme.fab.fontColor,
    zIndex: 300,
    top: 0,
    right: 0,
    marginRight: '10px',
    marginTop: '35px',
    '&:hover': {
      backgroundColor: theme.fab.hoverColor
    },
    '&:active': {
      backgroundColor: theme.fab.activeColor
    }
  }
}))

const FabMobile = () => {
  const { openFab, toggleOpenFab } = useContext(MobileLayoutContext)
  const classes = useStyles()

  return (
    <Fab
      onClick={() => toggleOpenFab()}
      color='primary'
      className={classes.fab}
      size='large'
    >
      {openFab ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
    </Fab>
  )
}

export { FabMobile }
