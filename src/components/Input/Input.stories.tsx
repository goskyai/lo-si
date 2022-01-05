import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Input } from '.';

export default {
  title: 'Components/Inputs/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const { value = '' } = args;
  const [text, setText] = useState<string | number | readonly string[]>(value);
  return (
    <Input
      {...args}
      value={text}
      onChange={(e) => setText(e.currentTarget.value)}
    />
  );
};

const PrefixElement = () => <code>Title</code>;
const SuffixElement = () => <code style={{ color: 'green' }}>√</code>;

export const Default = Template.bind({});
Default.args = {};

export const Color = Template.bind({});
Color.args = { color: 'red', value: 'Color Text' };

export const Disabled = Template.bind({});
Disabled.args = { color: 'gosky-blue', value: 'Disabled Text', disabled: true };

export const WithStringPrefix = Template.bind({});
WithStringPrefix.args = {
  prefix: 'Title',
  color: 'gosky-blue',
  value: 'Value',
};

export const WithStringSuffix = Template.bind({});
WithStringSuffix.args = {
  suffix: '/month',
  color: 'gosky-blue',
  value: 'Value',
};

export const WithStringPrefixAndSuffix = Template.bind({});
WithStringPrefixAndSuffix.args = { prefix: 'Title', suffix: '/month' };

export const WithComponentPrefix = Template.bind({});
WithComponentPrefix.args = {
  prefix: <PrefixElement />,
  color: 'gosky-blue',
  value: 'Value',
};

export const WithComponentSuffix = Template.bind({});
WithComponentSuffix.args = {
  suffix: <SuffixElement />,
  color: 'gosky-blue',
  value: 'Value',
};

export const WithComponentPrefixAndSuffix = Template.bind({});
WithComponentPrefixAndSuffix.args = {
  prefix: <PrefixElement />,
  suffix: <SuffixElement />,
  color: 'gosky-blue',
  value: 'Value',
};

export const BlurEvent = Template.bind({});
BlurEvent.args = {
  color: 'gosky-blue',
  value: 'Hello World',
  onBlur: (e) => alert(e.target.value),
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  color: 'gosky-blue',
  value: 'Readonly Text',
  readOnly: true,
};

export const PasswordType = Template.bind({});
PasswordType.args = {
  color: 'gosky-blue',
  value: 'Password',
  type: 'password',
};

export const NumericInputMode = Template.bind({});
NumericInputMode.args = {
  color: 'gosky-blue',
  value: '123',
  inputMode: 'numeric',
};
