import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Urbanist', 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.7;
  }
`;

export default GlobalStyle;
