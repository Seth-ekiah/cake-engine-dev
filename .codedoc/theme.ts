// Batter (Light): ffe9ce
// Batter (Dark): e5d0b7
// Frosting (Light): ffa1bb
// Frosting (Dark): ff6d96

import {
  createTheme,
} from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    primary: '#ff6d96',
    background: '#ffe9ce',
    code: '#ff6d96',
  },
  dark: {
    primary: '#ff6d96',
  },
  code: {
    wmbar: false,
    light: {
      text: '#0f0f0f',
      background: '#e5d0b7',
      lineHover: '#ffa1bb',
    },
  },
  quote: {
    light: {
      background: '#e5d0b7',
    },
  },
  toc: {
    light: {
      background: '#ffa1bb',
    },
  }



});

// export interface QuoteTheme {
//   background: '#e5c49b';             // --> CSS color string, background of block-quotes
//   // text: string;                   // --> CSS color string, text color of block-quotes
//   // border: string;                 // --> CSS color string, border color for block-quotes
// }