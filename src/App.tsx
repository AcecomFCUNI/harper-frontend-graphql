import { useState } from 'react'

import { AppContainer, AppHeader, AppButton } from './styles'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <AppContainer>
      <AppHeader>
        <p>
          <AppButton type='button' onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </AppButton>
        </p>
        <p>This is going to be the ACECOM web page, someday!</p>
      </AppHeader>
    </AppContainer>
  )
}

export default App
