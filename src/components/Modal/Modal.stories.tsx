import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import { Modal } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    persistent: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button onClick={() => setOpen(true)}>OPEN MODAL</button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        <Text as="h2" fontSize="h2">
          This is a basic modal
        </Text>
        <Text>You can put whatever you want.</Text>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
