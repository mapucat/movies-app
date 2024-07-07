import { createGlobalStyle } from 'styled-components';
import { font } from './settings/Font';
import { devices } from './settings/Breakpoints';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

  body {
    font-family: ${font.primary}, sans-serif;
    font-weight: normal;
    font-style: normal;

    font-size: ${font.sizes.desktop[100]};

    @media ${devices.sm} {
      font-size: ${font.sizes.mobile[100]};
    }
  }
`;

export default GlobalStyle;
