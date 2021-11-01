import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PhysicsPNG } from '.';
import emoji1 from '../../assets/images/emoji/emoji1.svg';
import emoji2 from '../../assets/images/emoji/emoji2.svg';
import emoji3 from '../../assets/images/emoji/emoji3.svg';
import emoji4 from '../../assets/images/emoji/emoji4.svg';
import emoji5 from '../../assets/images/emoji/emoji5.svg';
import emoji6 from '../../assets/images/emoji/emoji6.svg';
import emoji7 from '../../assets/images/emoji/emoji7.svg';
import emoji8 from '../../assets/images/emoji/emoji8.svg';
import emoji9 from '../../assets/images/emoji/emoji9.svg';

const circle = [
  emoji1,
  emoji2,
  emoji3,
  emoji4,
  emoji5,
  emoji6,
  emoji7,
  emoji8,
  emoji9,
];

export default {
  title: 'Components/PhysicsPNG',
  component: PhysicsPNG,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PhysicsPNG>;

const Template: ComponentStory<typeof PhysicsPNG> = (args) => (
  <div style={{ border: 'solid 1px rgba(0, 0, 0, 0.3)' }}>
    <PhysicsPNG {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  canvasHeight: 500,
  canvasWidth: window.innerWidth,
  circle,
};

export const Enhancement = Template.bind({});
Enhancement.args = {
  canvasHeight: 500,
  canvasWidth: window.innerWidth,
  circle,
  scaleRange: [0.7, 1.5],
  dropDelay: 1000,
  isRandomAngle: true,
  frictionAir: 0.00002,
  restitution: 0.5,
};
