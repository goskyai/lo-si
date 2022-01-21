import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Breadcrumb as ABreadcrumb } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { Breadcrumb } from '.';
import { Icon } from '../Icon';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  decorators: [withDesign],
} as ComponentMeta<typeof Breadcrumb>;

const breads = ['Home', 'First', 'Second'];
const iconBreads = [
  <Icon icon="store" />,
  <Icon icon="cog" />,
  <Icon icon="plane" />,
];

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args}>
    {breads.map((bread, index) => (
      <ABreadcrumb.Item key={index}>
        <a href="">{bread}</a>
      </ABreadcrumb.Item>
    ))}
  </Breadcrumb>
);

const IconTemplate: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args}>
    {iconBreads.map((bread, index) => (
      <Breadcrumb.Item key={index}>
        <a href="">{bread}</a>
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);

export const Default = Template.bind({});
export const WithIcon = IconTemplate.bind({});
