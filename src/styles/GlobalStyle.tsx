import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Gabarito , sans-serif;
  }

  body {
    background-color: rgb(235, 221, 204);
  }
  
  a {
    text-decoration: none;
  }
`;
