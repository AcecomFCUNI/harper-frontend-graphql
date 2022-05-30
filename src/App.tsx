import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './global'
import { routes } from './routes'

const Test = () => <h1>404</h1>

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          {routes.map(({ path, component }) => (
            <Route path={path} key={path} element={component} />
          ))}
          <Route path='*' element={<Test />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
