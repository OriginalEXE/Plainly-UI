import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  body {
    font-family: proxima-nova, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;
