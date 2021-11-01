import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const CustomTheme = create({
  base: 'light',
  brandTitle: 'GoSky CDP',
  brandUrl: 'https://goskyai.com/',
  brandImage: 'https://i.imgur.com/QT2C3In.png',
});

addons.setConfig({
  theme: CustomTheme,
});
