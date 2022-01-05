import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextProps } from '.';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {},
} as ComponentMeta<TextProps>;

const Template: ComponentStory<TextProps> = (args) => (
  <Text {...args}>Hello World!</Text>
);

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary' };

export const Success = Template.bind({});
Success.args = { type: 'success' };

export const Warning = Template.bind({});
Warning.args = { type: 'warning' };

export const Danger = Template.bind({});
Danger.args = { type: 'danger' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Mark = Template.bind({});
Mark.args = { mark: true };

export const Code = Template.bind({});
Code.args = { code: true };

export const Keyboard = Template.bind({});
Keyboard.args = { keyboard: true };

export const Underline = Template.bind({});
Underline.args = { underline: true };

export const Delete = Template.bind({});
Delete.args = { delete: true };

export const Strong = Template.bind({});
Strong.args = { strong: true };

export const Italic = Template.bind({});
Italic.args = { italic: true };
