import { ComponentMeta, ComponentStory } from '@storybook/react';

import { File } from '.';

export default {
  title: 'Components/Inputs/File',
  component: File,
  argTypes: {},
} as ComponentMeta<typeof File>;

const Template: ComponentStory<typeof File> = (args) => (
  <File buttonText="瀏覽" {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Acceptable = Template.bind({});
Acceptable.args = { accept: '.jpg,.pdf' };
