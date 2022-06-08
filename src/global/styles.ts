import { createGlobalStyle } from 'styled-components'

type GlobalStyleProps = {
  darkMode?: Boolean
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    font-family: "Nunito";
  }

  *::-webkit-scrollbar {
    background-color: #5bc1a5;
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 15px;
  }
`

export { GlobalStyle }
