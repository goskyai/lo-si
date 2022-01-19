import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Button } from '.';
import { Box } from '../Box';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/og8KJ9f4UINpdYPb3slesI/GoSky-Library-(Lo-si)?node-id=626%3A1446',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Box>
    <Button {...args}>Text</Button>
  </Box>
);

export const Default = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Small = Template.bind({});
Small.args = { size: 'small' };

export const SmallSecondary = Template.bind({});
SmallSecondary.args = { size: 'small', variant: 'secondary' };

export const SmallDisabled = Template.bind({});
SmallDisabled.args = { size: 'small', disabled: true };

export const Block = Template.bind({});
Block.args = { block: true };

export const Color = Template.bind({});
Color.args = { color: 'gosky-orange' };
