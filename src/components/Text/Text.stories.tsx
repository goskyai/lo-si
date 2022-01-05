import { ComponentMeta, ComponentStory } from '@storybook/react';
import faker from 'faker';
import { Text } from '.';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({
  children = 'Hello World!',
  ...args
}) => <Text {...args}>{children}</Text>;

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

export const Copyable = Template.bind({});
Copyable.args = { copyable: true };

export const Editable = Template.bind({});
Editable.args = { editable: true };

export const Ellipsis = Template.bind({});
Ellipsis.args = { ellipsis: true, children: faker.lorem.paragraphs(20) };
