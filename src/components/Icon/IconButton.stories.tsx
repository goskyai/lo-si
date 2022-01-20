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

export const CustomColor = Template.bind({});
CustomColor.args = {
  icon: 'dashboard',
  iconColor: {
    standard: 'gosky-blue-400',
    hover: 'gosky-green-500',
  },
  bgColor: {
    standard: 'gosky-green-400',
    hover: 'gosky-blue-500',
  },
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

export const CustomContrastColor = Template.bind({});
CustomContrastColor.args = {
  icon: 'cloud-upload',
  contrast: true,
  iconColor: {
    standard: 'gosky-orange-400',
    hover: 'gosky-blue-500',
  },
  bgColor: {
    standard: 'gosky-blue-400',
    hover: 'gosky-orange-500',
  },
};
