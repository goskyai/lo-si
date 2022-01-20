import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconButton } from './IconButton';

export default {
  title: 'Components/Icon Button',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <div>
    <IconButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  icon: 'times',
};

export const Circle = Template.bind({});
Circle.args = {
  icon: 'pen',
  circle: true,
};

export const Contrast = Template.bind({});
Contrast.args = {
  icon: 'trash',
  contrast: true,
};

export const ContrastCircle = Template.bind({});
ContrastCircle.args = {
  icon: 'arrow-circle-bottom',
  contrast: true,
  circle: true,
};
