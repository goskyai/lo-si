import { Meta, Story } from '@storybook/react';
import { TabPanel, Tabs } from '.';
import { Box } from '../Box';
import { Icon, IconType } from '../Icon';
import { Text } from '../Text';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {},
} as Meta;

const tabs: {
  tab: string;
  label: string;
  icon: IconType;
}[] = [
  {
    tab: 'FIRST',
    label: 'First Pane',
    icon: 'pen',
  },
  {
    tab: 'SECOND',
    label: 'Second Pane',
    icon: 'plane',
  },
  {
    tab: 'THIRD',
    label: 'Third Pane',
    icon: 'store',
  },
];

const Template: Story = (args) => {
  return (
    <Tabs {...args}>
      {tabs.map((tab, index) => (
        <TabPanel
          tab={
            <Box display="flex" alignItems="center">
              {tab.tab}
              <Icon icon={tab.icon} />
            </Box>
          }
          key={index}
        >
          <Text>
            {tab.label} <Icon icon={tab.icon} />
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            labore!
          </Text>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export const Default = Template.bind({});
Default.args = {};
