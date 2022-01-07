import { addDecorator } from '@storybook/react';
import 'normalize.css';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { ThemeProvider } from 'styled-components';
import '../src/assets/css/gosky-icons.css';
import Theme, { GlobalStyle } from '../src/assets/theme/global';

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

addDecorator((storyFn) => (
  <ThemeProvider theme={Theme}>
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme={'light'}
      insertionPoint="styles-insertion-point"
    >
      <GlobalStyle theme={Theme} />
      {storyFn()}
    </ThemeSwitcherProvider>
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: false, iframeHeight: 'auto' },
};
