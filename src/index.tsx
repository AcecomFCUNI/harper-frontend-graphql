import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/styles'
import { StyledEngineProvider } from '@mui/material/styles'
import WebFont from 'webfontloader'

import App from './App'
import { theme } from './global'
import { client } from './graphQL'

WebFont.load({
  google: {
    families: ['Nunito:300,700', 'Nunito Sans:300,600', 'sans-serif']
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Router>
            <App />
          </Router>
        </ApolloProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
)
