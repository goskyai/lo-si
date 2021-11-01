import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Column, Row } from '.';
import { Box } from '../Box';

export default {
  title: 'Components/Grid/Row',
  component: Row,
  argTypes: {},
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args) => (
  <Row {...args}>
    <Column col={6}>
      <Box bg="green">col-6</Box>
    </Column>
    <Column col={4}>
      <Box bg="grey">col-4</Box>
    </Column>
    <Column col={3}>
      <Box bg="yellow">col-3</Box>
    </Column>
  </Row>
);

export const Default = Template.bind({});

export const Wrap = Template.bind({});
Wrap.args = { flexWrap: 'wrap' };

export const NoGutter = Template.bind({});
NoGutter.args = { flexWrap: 'wrap', gutterX: 0, gutterY: 0 };

export const MoreGutter = Template.bind({});
MoreGutter.args = { flexWrap: 'wrap', gutterX: 50, gutterY: 30 };

export const HorizontalAlign = Template.bind({});
HorizontalAlign.args = { flexWrap: 'wrap', justifyContent: 'center' };
