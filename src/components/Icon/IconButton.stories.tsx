import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconButton } from './IconButton';

export default {
  title: 'Components/Icon Button',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: 'pen',
};
