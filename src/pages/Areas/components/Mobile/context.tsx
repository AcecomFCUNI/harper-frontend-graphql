import { createContext, FC, ReactNode, useState } from 'react'

import { Area } from '../../types'

type MobileLayoutContextProps = {
  areas?: Area[]
  currentArea?: Area
  setCurrentArea: (area: Area) => void
}

const MobileLayoutContext = createContext<MobileLayoutContextProps>({
  setCurrentArea: (area: Area) => {}
})

type MobileLayoutContextAPIProps = {
  children: ReactNode
  areas?: Area[]
}

const MobileLayoutContextAPI: FC<MobileLayoutContextAPIProps> = ({
  children,
  areas
}) => {
  const [currentArea, setCurrentArea] = useState(areas ? areas[0] : undefined)

  return (
    <MobileLayoutContext.Provider
      value={{ areas, currentArea, setCurrentArea }}
    >
      {children}
    </MobileLayoutContext.Provider>
  )
}

export { MobileLayoutContext, MobileLayoutContextAPI }
