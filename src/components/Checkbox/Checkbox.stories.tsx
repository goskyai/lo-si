import { ComponentMeta } from '@storybook/react';
import { Checkbox } from '.';
import { CheckboxGroupTemplate, CheckboxTemplate } from './storyTemplates';

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

export const Default = CheckboxTemplate.bind({});
Default.args = {};

export const Checked = CheckboxTemplate.bind({});
Checked.args = {
  defaultChecked: true,
};

export const Color = CheckboxTemplate.bind({});
Color.args = {
  color: 'red',
};

export const Disabled = CheckboxTemplate.bind({});
Disabled.args = {
  disabled: true,
};

export const CheckedDisabled = CheckboxTemplate.bind({});
CheckedDisabled.args = {
  defaultChecked: true,
  disabled: true,
};

export const CheckAll = CheckboxGroupTemplate.bind({});
CheckAll.args = {};
