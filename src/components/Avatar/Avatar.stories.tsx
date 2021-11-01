import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from '.';
import logo from '../../assets/images/GoSky-white.svg';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} />;
};

export const WithImage = Template.bind({});
WithImage.args = {
  alt: 'GoSky',
  img: logo,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  alt: 'GoSky',
};
