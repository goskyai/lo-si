import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from '.';

export default {
  title: 'Components/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    This is a layout helper, which has most layout props provided by style
    system.
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};
