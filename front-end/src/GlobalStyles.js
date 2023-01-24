import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
    text-decoration: none;
  }

  :root {
    font-size: 16px;

    button {
      :hover{
        cursor: pointer;
      }
    }
  }
`;

export default GlobalStyles;
