import { GlobalStyles } from '@mui/material'

const GlobalStyle = () => (
  <GlobalStyles
    styles={{
      '*': { margin: 0, padding: 0, fontFamily: 'Nunito' },
      '*::-webkit-scrollbar': {
        backgroundColor: '#5bc1a5',
        width: 8,
        height: 8
      },
      '*::-webkit-scrollbar-thumb': {
        background: 'grey',
        borderRadius: 15
      }
    }}
  />
)

export { GlobalStyle }
