import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from './NewIcon';

export default {
  title: 'Components/NewIcon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  scale: 10,
  icon: 'trash',
};
