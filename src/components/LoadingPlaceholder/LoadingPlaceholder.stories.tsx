import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoadingPlaceholder } from '.';

export default {
  title: 'Components/Loading-Placeholder',
  component: LoadingPlaceholder,
} as ComponentMeta<typeof LoadingPlaceholder>;

const Template: ComponentStory<typeof LoadingPlaceholder> = (args) => (
  <LoadingPlaceholder {...args} />
);

export const Default = Template.bind({});
Default.args = {
  mt: 10,
};

export const Left = Template.bind({});
Left.args = {
  justifyContent: 'flex-start',
};

export const MoreMargin = Template.bind({});
MoreMargin.args = {
  mt: 50,
};
