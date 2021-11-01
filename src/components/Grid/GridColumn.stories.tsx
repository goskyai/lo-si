import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Column, Row } from '.';
import { Box } from '../Box';

export default {
  title: 'Components/Grid/Column',
  component: Column,
  argTypes: {},
} as ComponentMeta<typeof Column>;

const Template: ComponentStory<typeof Column> = (args) => (
  <Row flexWrap="wrap" gutterX={0} gutterY={0}>
    <Column {...args}>
      <Box bg="green">col-setting</Box>
    </Column>
    <Column col={4}>
      <Box bg="grey">col-4</Box>
    </Column>
    <Column col>
      <Box bg="yellow">col</Box>
    </Column>
  </Row>
);

export const Default = Template.bind({});

export const Auto = Template.bind({});
Auto.args = { col: true };

export const Col6 = Template.bind({});
Col6.args = { col: 6 };

export const Col10 = Template.bind({});
Col10.args = { col: 10 };

export const Responsive = Template.bind({});
Responsive.args = { col: 12, colSm: 8, colMd: 6, colLg: 4 };
