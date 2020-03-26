import { createGlobalStyle } from 'styled-components';
import fontSizes from 'theme/fontSizes';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${fontSizes[0]}px;
    min-width: 320px;
  }
`;
