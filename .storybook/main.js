const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../src/components/**/*.stories.tsx',
  ],
  addons: ['storybook-addon-designs', '@storybook/addon-essentials'],
};
