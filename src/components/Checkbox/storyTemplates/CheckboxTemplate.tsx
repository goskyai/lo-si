import { ComponentStory } from '@storybook/react';
import { Checkbox } from '../';

export const CheckboxTemplate: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}>Text</Checkbox>
);
