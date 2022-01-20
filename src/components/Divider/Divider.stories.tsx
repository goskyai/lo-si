import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Divider } from '.';

export default {
  title: 'Components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Default = Template.bind({});
Default.args = {};
