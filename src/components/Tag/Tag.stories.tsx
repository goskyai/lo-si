import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tag } from '.';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
  <Tag {...args}>HELLO</Tag>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Hello',
  opacity: 1,
  bg: 'green-300',
  textColor: 'green',
};
