import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Icon } from '.';

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'circle-success',
  fontSize: '10rem',
  textColor: 'green',
};
