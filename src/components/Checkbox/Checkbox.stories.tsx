import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from '.';

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}>Text</Checkbox>
);

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = {
  defaultChecked: true,
};

export const Color = Template.bind({});
Color.args = {
  color: 'red',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  defaultChecked: true,
  disabled: true,
};
