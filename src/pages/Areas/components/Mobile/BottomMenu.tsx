import { useContext, useState } from 'react'
import { BottomNavigation, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded'
import GamepadRoundedIcon from '@mui/icons-material/GamepadRounded'
import NotInterestedRoundedIcon from '@mui/icons-material/NotInterestedRounded'

import { MobileLayoutContext } from './context'
import { CustomBottomNavigationAction } from './styles'

const useStyles = makeStyles((theme: Theme) => ({
  menu: {
    position: 'fixed',
    zIndex: 200,
    backgroundColor: theme.fab.mainColor,
    bottom: 0,
    width: '100vw'
  },
  menuButton: {
    fontFamily: 'Nunito Sans',
    color: '#FFF'
  }
}))

const getAbbrAndIcon = (code: number) => {
  switch (code) {
    case 1:
      return {
        label: 'IA',
        icon: <SmartToyRoundedIcon />
      }
    case 2:
      return {
        label: 'DW',
        icon: <CodeRoundedIcon />
      }
    case 3:
      return {
        label: 'SI',
        icon: <SecurityRoundedIcon />
      }
    case 4:
      return {
        label: 'DV',
        icon: <GamepadRoundedIcon />
      }
    default:
      return {
        label: 'NV',
        icon: <NotInterestedRoundedIcon />
      }
  }
}

const BottomMenu = () => {
  const { areas, setCurrentArea } = useContext(MobileLayoutContext)
  const classes = useStyles()
  const [value, setValue] = useState(areas ? areas[0].code : 1)

  return (
    <BottomNavigation
      value={value}
      onChange={(e, value: string) => {
        const code = parseInt(value)
        const currentArea = areas?.find(area => area.code === code)

        if (!currentArea) return

        setValue(code)
        setCurrentArea(currentArea)
      }}
      className={classes.menu}
    >
      {(areas || []).map(({ code }) => {
        const { label, icon } = getAbbrAndIcon(code)

        return (
          <CustomBottomNavigationAction
            className={classes.menuButton}
            key={code}
            value={code}
            label={label}
            icon={icon}
          />
        )
      })}
    </BottomNavigation>
  )
}

export { BottomMenu }
