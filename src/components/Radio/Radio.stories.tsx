import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Radio } from '.';
import { Box } from '../Box';

export default {
  title: 'Components/Inputs/Radio',
  component: Radio,
  argTypes: {},
} as ComponentMeta<typeof Radio>;

const RadioArr = [1, 2, 3, 4, 5];

const Template: ComponentStory<typeof Radio> = (args) => {
  return (
    <>
      {RadioArr.map((radio) => (
        <Box display="flex">
          <Radio {...args} value={radio} id={String(radio)} />
          <label htmlFor={String(radio)}>Label for {radio}</label>
        </Box>
      ))}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  name: 'test',
  mb: 5,
  mr: 5,
};
