const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../src/components/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@react-theming/storybook-addon',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: function (prop) {
        if (prop.parent) {
          // removes props that inherits from React or other packages (includes HTMLProps)
          return !prop.parent.fileName.includes('react');
        }

        return true;
      },
    },
    compilerOptions: {
      allowSyntheticDefaultImports: false,
      esModuleInterop: false,
    },
  },
  webpackFinal: async (config) => {
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
