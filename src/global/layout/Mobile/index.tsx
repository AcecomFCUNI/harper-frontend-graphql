import { FC, ReactNode } from 'react'
import { AppBar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { FabMobile } from './Fab'
import { FadeMenu } from './FadeMenu'

const useStyles = makeStyles(() => ({
  content: {
    position: 'relative',
    zIndex: 100
  }
}))

type MobileLayoutProps = {
  children?: ReactNode
}

const MobileLayout: FC<MobileLayoutProps> = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <FadeMenu />
      <FabMobile />
      <div className={classes.content}>
        <AppBar position='fixed' />
        {children}
      </div>
    </>
  )
}

export { MobileLayout }
