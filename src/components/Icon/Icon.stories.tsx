import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CSSProperties } from 'react';
import { Icon } from '.';
import RotateRight from './RotateRight';

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

const style: CSSProperties = {
  color: 'blue',
  fontSize: '2rem',
};

export const Default = Template.bind({});
Default.args = {
  icon: 'plane',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  icon: 'plane',
  style,
};

export const Spin = Template.bind({});
Spin.args = {
  icon: 'plane',
  spin: true,
};

export const Rotate = Template.bind({});
Rotate.args = {
  icon: 'plane',
  rotate: 60,
};

export const CustomComponent = Template.bind({});
CustomComponent.args = {
  component: RotateRight,
};
