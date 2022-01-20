import {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }
`