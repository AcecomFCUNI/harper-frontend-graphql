import { Theme, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/styles'
import { Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './global'
import { DesktopLayout } from './global/layout'
import { routes } from './routes'

const Test = () => <h1>404</h1>

const App = () => {
  const theme = useTheme<Theme>()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const Layout = isMobile ? () => <></> : DesktopLayout

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
