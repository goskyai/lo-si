import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Link } from '.';
import { Box } from '../Box';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => {
  return (
    <Box>
      <Link {...args}>Link</Link>
    </Box>
  );
};

export const ExternalLink = Template.bind({});
ExternalLink.args = { to: 'https://google.com', target: '_blank' };

export const ActionLink = Template.bind({});
ActionLink.args = { to: '#', onClick: () => alert('Click!') };

export const Disabled = Template.bind({});
Disabled.args = {
  to: 'https://google.com',
  target: '_blank',
  onClick: () => alert('Click!'),
  disabled: true,
};
