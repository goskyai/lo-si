import { createGlobalStyle } from 'styled-components';

export type GlobalThemeType = typeof globalTheme;
export type ColorType = keyof typeof themeColors;
export type MainColorType =
  | 'gosky-blue'
  | 'gosky-orange'
  | 'gosky-green'
  | 'red'
  | 'green';
export type NeutralColorType = 'grey';
export type ColorLevelType =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
export type FontSizeType = keyof typeof themeFontSizes;
export type FontFamilyType = keyof typeof themeFontFamily;
export type GridType = true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export const maxGridColumns = 12;
export const Breakpoints = { xs: 320, sm: 480, md: 768, lg: 1024, xl: 1200 };
export const baseSizePx = 16;

const themeColors = {
  'gosky-blue': '#0062FF',
  'gosky-blue-200': '#ECF4FF',
  'gosky-blue-300': '#AACBFF',
  'gosky-blue-400': '#5596FF',
  'gosky-blue-500': '#0062FF',
  'gosky-blue-600': '#003C9B',

  'gosky-orange': '#FF653B',
  'gosky-orange-200': '#FFF0EC',
  'gosky-orange-300': '#FFC1B1',
  'gosky-orange-400': '#FF8D6E',
  'gosky-orange-500': '#FF653B',
  'gosky-orange-600': '#CC4105',

  'gosky-green': '#C8EA00',
  'gosky-green-200': '#F8FFD0',
  'gosky-green-300': '#EDFF84',
  'gosky-green-400': '#E2FF38',
  'gosky-green-500': '#C8EA00',
  'gosky-green-600': '#98B200',

  red: '#C80B1B',
  'red-200': '#FAE7E9',
  'red-300': '#E99DA4',
  'red-400': '#D95560',
  'red-500': '#C80B1B',
  'red-600': '#980814',

  green: '#22CC33',
  'green-200': '#E9FAEB',
  'green-300': '#D3F5D6',
  'green-400': '#7AE085',
  'green-500': '#22CC33',
  'green-600': '#0EA413',

  grey: '#71787D',
  'grey-100': '#F4F6F7',
  'grey-200': '#DBDDDF',
  'grey-300': '#C0C3C6',
  'grey-400': '#A5ABAE',
  'grey-500': '#8A9196',
  'grey-600': '#71787D',
  'grey-700': '#585E62',
  'grey-800': '#404548',
  'grey-900': '#282A2D',

  backdrop: 'rgba(0, 0, 0, 0.6)',
  transparent: 'rgba(255, 255, 255, 0)',
};
const themeFontSizes = {
  h2: '1.75rem',
  h3: '1.25rem',
  h4: '1rem',
  h5: '0.75rem',
};
const themeFontFamily = {
  default: 'PingFang TC, Noto Sans TC, Microsoft JhengHei, sans-serif',
};

interface ThemeInterface {
  colors: typeof themeColors;
  fontSizes: typeof themeFontSizes;
  fontFamily: typeof themeFontFamily;
  breakpoints: string[];
  space: string[];
  radii: string[];
}

const globalTheme: ThemeInterface = {
  colors: themeColors,
  fontSizes: themeFontSizes,
  fontFamily: themeFontFamily,
  breakpoints: Object.values(Breakpoints).map(
    (val) => `${val / baseSizePx}rem`,
  ),
  space: Array.from(Array(51).keys()).map(
    (val) => `${(val * 2) / baseSizePx}rem`,
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
    background-color: ${themeColors['grey-100']};
    color: ${themeColors['grey-600']};
    font-size: 16px;
    line-height: 1.3;
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
    color: ${themeColors['grey-500']};
  }
`;

export default globalTheme;
