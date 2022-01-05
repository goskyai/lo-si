import { ComponentMeta, ComponentStory } from '@storybook/react';
import faker from 'faker';
import { Title, TitleType } from '.';
import { tupleNumber } from '../../utils/type/tuple';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {},
} as ComponentMeta<TitleType>;

const levels = tupleNumber(2, 3, 4, 5);

const Template: ComponentStory<TitleType> = ({
  children = 'Hello World!',
  ...args
}) => {
  return (
    <>
      {levels.map((val) => (
        <Title level={val} {...args}>
          {children}
        </Title>
      ))}
    </>
  );
};

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
