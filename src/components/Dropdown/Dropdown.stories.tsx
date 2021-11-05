import { Box } from '../Box';
import { Menu, MenuItem } from '../Menu';
import { Meta, Story } from '@storybook/react';

import { Dropdown, DropdownProps } from '.';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const OverlayTemplate = () => (
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
);
const Template: Story<Omit<DropdownProps, 'overlay'>> = (args) => {
  return (
    <Box>
      <Dropdown overlay={OverlayTemplate} {...args}>
        <button>Button</button>
      </Dropdown>
    </Box>
  );
};

const MenuOverlayTemplate = () => (
  <Menu>
    <MenuItem onClick={() => alert('One')}>One</MenuItem>
    <MenuItem onClick={() => alert('Two')} danger>
      Two
    </MenuItem>
    <MenuItem disabled>Three</MenuItem>
  </Menu>
);
const MenuTemplate: Story<Omit<DropdownProps, 'overlay'>> = (args) => {
  return (
    <Box>
      <Dropdown overlay={MenuOverlayTemplate} {...args}>
        <button>Hover me!</button>
      </Dropdown>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Click = Template.bind({});
Click.args = { trigger: ['click'] };

export const WithMenu = MenuTemplate.bind({});
WithMenu.args = {};
