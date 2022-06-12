import { FC, ReactNode } from 'react'
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
      <div className={classes.content}>{children}</div>
    </>
  )
}

export { MobileLayout }
