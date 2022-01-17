import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Breadcrumb } from '.';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [{ label: 'Parents', to: '../' }, { label: 'Child' }],
};
