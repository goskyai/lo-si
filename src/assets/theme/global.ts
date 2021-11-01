import { createGlobalStyle } from 'styled-components';

export type GlobalThemeType = typeof globalTheme;
export type ColorType = 'blue' | 'red' | 'green' | 'grey';
export type FontSizeType = 'h1' | 'h2' | 'h3' | 'body' | 'caption';
export type GridType = true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export const maxGridColumns = 12;
export const Breakpoints = { xs: 320, sm: 480, md: 768, lg: 1024, xl: 1200 };
export const baseSizePx = 16;

interface ThemeInterface {
  colors: { [index: string]: string };
  space: string[];
  fontSizes: { [index: string]: string };
  fontFamily: {
    default: string;
  };
  breakpoints: string[];
  radii: string[];
}

const globalTheme: ThemeInterface = {
  colors: {
    blue: '#0062FF',
    'blue-200': '#ECF4FF',
    'blue-300': '#AACBFF',
    'blue-400': '#5596FF',
    'blue-500': '#0062FF',
    'blue-600': '#003C9B',
    red: '#AA2029',
    'red-200': '#F7E9EA',
    'red-300': '#EED2D4',
    'red-400': '#CC797F',
    'red-500': '#AA2029',
    'red-600': '#870718',
    green: '#22CC33',
    'green-200': '#E9FAEB',
    'green-300': '#D3F5D6',
    'green-400': '#7AE085',
    'green-500': '#22CC33',
    'green-600': '#0EA413',
    grey: '#979797',
    'grey-100': '#FFFFFF',
    'grey-200': '#F5F5F5',
    'grey-300': '#EEEEEE',
    'grey-400': '#D9D9D9',
    'grey-500': '#979797',
    'grey-600': '#4C5357',
    backdrop: 'rgba(0, 0, 0, 0.6)',
    transparent: 'rgba(255, 255, 255, 0)',
  },
  space: Array.from(Array(51).keys()).map(
    (val) => `${(val * 2) / baseSizePx}rem`,
  ),
  fontSizes: {
    h1: '1.75rem',
    h2: '1.1875rem',
    h3: '1.0625rem',
    body: '0.9375rem',
    caption: '0.6875rem',
  },
  fontFamily: {
    default: 'PingFang TC, Noto Sans TC, Microsoft JhengHei, sans-serif',
  },
  breakpoints: Object.values(Breakpoints).map(
    (val) => `${val / baseSizePx}rem`,
  ),
  radii: Array.from(Array(10).keys()).map(
    (val) => `${(val * 2) / baseSizePx}rem`,
  ),
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    background-color: ${({ theme }) => theme.colors['grey-200']};
    color: ${({ theme }) => theme.colors['grey-600']};
    font-size: 16px;
    line-height: 1.4;
    font-family: ${({ theme }) => theme.fontFamily.default};
    width: 100%;
    height: 100%;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  a {
    color: ${({ theme }) => theme.colors['blue']};
  }
`;

export default globalTheme;
