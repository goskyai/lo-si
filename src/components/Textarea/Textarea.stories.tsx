import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import { Textarea } from '.';

export default {
  title: 'Components/Inputs/Textarea',
  component: Textarea,
  argTypes: {},
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  const { value = '' } = args;
  const [text, setText] = useState<string | number | readonly string[]>(value);
  return (
    <Textarea
      {...args}
      value={text}
      onChange={(e) => setText(e.currentTarget.value)}
    />
  );
};

export const Default = Template.bind({});

export const HasCounter = Template.bind({});
HasCounter.args = { maxLength: 10 };

export const CustomColor = Template.bind({});
CustomColor.args = { color: 'green' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, value: 'textarea' };
