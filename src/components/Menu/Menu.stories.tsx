import { Box } from '../Box';
import { Meta, Story } from '@storybook/react';

import { Menu, MenuItem, MenuItemProps, MenuProps } from '.';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

interface StoryMenuItemProps extends MenuItemProps {
  label: string;
  onClick?: () => void;
}

interface StoryMenuProps extends MenuProps {
  items?: StoryMenuItemProps[];
}

const Template: Story<StoryMenuProps> = (args) => {
  const { items } = args;

  return (
    <Box border="1px solid var(--grey-4)">
      <Menu {...args}>
        {items?.map(({ label, ...props }, index) => {
          return (
            <MenuItem key={index} {...props}>
              {label}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'One', onClick: () => alert('One Click!') },
    { label: 'Two' },
    { label: 'Three' },
  ],
};
