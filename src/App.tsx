import { Theme, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/styles'
import { Routes, Route } from 'react-router-dom'

import { routes } from 'routes'
import { DesktopLayout, GlobalStyle, MobileLayout } from './global'

const Test = () => <h1>404</h1>

const App = () => {
  const theme = useTheme<Theme>()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const Layout = isMobile ? MobileLayout : DesktopLayout

  return (
    <Layout>
      <GlobalStyle />
      <Routes>
        {routes.map(({ path, component }) => (
          <Route path={path} key={path} element={component} />
        ))}
        <Route path='*' element={<Test />} />
      </Routes>
    </Layout>
  )
}

export default App
