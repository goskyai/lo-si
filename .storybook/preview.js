import '../src/assets/css/gosky-icons.css';
import 'normalize.css';

import { withThemes } from '@react-theming/storybook-addon';
import { addDecorator } from '@storybook/react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { ThemeProvider } from 'styled-components';

import Theme, { GlobalStyle } from '../src/assets/theme/global';

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

addDecorator(withThemes(ThemeProvider, [Theme]));
addDecorator((storyFn) => (
  <>
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme={'light'}
      insertionPoint="styles-insertion-point"
    >
      <GlobalStyle theme={Theme} />
      {storyFn()}
    </ThemeSwitcherProvider>
  </>
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
