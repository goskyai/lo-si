const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../src/components/**/*.stories.tsx',
  ],
  addons: ['storybook-addon-designs', '@storybook/addon-essentials'],
  // https://github.com/storybookjs/storybook/issues/6188#issuecomment-822924831
  babel: async (options) => {
    options.plugins.push([
      'babel-plugin-inline-react-svg',
      {
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false,
            },
          ],
        },
      },
    ]);
    return options;
  },
};
