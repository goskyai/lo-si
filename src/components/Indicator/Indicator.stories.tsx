import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Indicator } from '.';

export default {
  title: 'Components/Indicator',
  component: Indicator,
} as ComponentMeta<typeof Indicator>;

const Template: ComponentStory<typeof Indicator> = (args) => (
  <Indicator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default Color',
};

export const Success = Template.bind({});
Success.args = {
  title: 'Success indicator',
  status: 'success',
};

export const Failed = Template.bind({});
Failed.args = {
  title: 'Failed indicator',
  status: 'failed',
};

export const Loading = Template.bind({});
Loading.args = {
  title: 'Loading indicator',
  status: 'loading',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  title: 'Blue indicator',
  color: 'blue',
};

export const DoubleSize = Template.bind({});
DoubleSize.args = {
  title: '2rem',
  size: '2rem',
};
