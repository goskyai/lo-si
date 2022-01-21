import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '../Icon';
import { Tag } from './Tag';

export default {
  title: 'Components/Tag/Regular',
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
  color: 'gosky-blue',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  color: 'gosky-blue',
  icon: <Icon icon="star-circle" />,
};

export const Closeable = Template.bind({});
Closeable.args = {
  color: 'gosky-blue',
  closable: true,
};

export const Visibility = Template.bind({});
Visibility.args = {
  color: 'gosky-blue',
  visible: false,
};
