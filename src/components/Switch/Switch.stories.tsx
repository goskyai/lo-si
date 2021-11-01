import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import { Switch } from '.';

export default {
  title: 'Components/Inputs/Switch',
  component: Switch,
  argTypes: {},
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  const [status, setStatus] = useState(false);

  return (
    <>
      <Switch
        {...args}
        checked={status}
        onChange={(e) => setStatus(e.target.checked)}
      />
      {JSON.stringify(status)}
    </>
  );
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
