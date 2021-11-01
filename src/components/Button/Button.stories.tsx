import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '.';
import { Box } from '../Box';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Box>
    <Button {...args}>Text</Button>
  </Box>
);

export const Default = Template.bind({});

export const Outline = Template.bind({});
Outline.args = { outline: true };

export const Small = Template.bind({});
Small.args = { size: 'small' };

export const SmallOutline = Template.bind({});
SmallOutline.args = { size: 'small', outline: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Block = Template.bind({});
Block.args = { block: true };

export const Color = Template.bind({});
Color.args = { color: 'red' };
