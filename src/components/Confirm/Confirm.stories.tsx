import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Confirm } from '.';

export default {
  title: 'Components/Confirm',
  component: Confirm,
  argTypes: {},
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button onClick={() => setOpen(true)}>Show Confirm</button>
      <Confirm {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Normal = Template.bind({});
Normal.args = {
  open: true,
  title: '標題 Title',
  content:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor suntaliquid maiores!',
  cancelLabel: '取消',
  confirmLabel: '確認',
  persistent: true,
  confirmButtonColor: 'red',
  onConfirm: () => alert('Confirm!'),
};
