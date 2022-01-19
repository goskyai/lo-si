import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { CheckableTag } from './CheckableTag';

export default {
  title: 'Components/Tag/Checkable',
  component: CheckableTag,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof CheckableTag>;

const Tags = {
  Apple: true,
  Banana: false,
  Orange: true,
};

const Template: ComponentStory<typeof CheckableTag> = (args) => {
  const [check, setCheck] = useState(Tags);

  return (
    <ul>
      {Object.keys(check).map((tag, index) => (
        <CheckableTag
          key={index}
          {...args}
          checked={check[tag as keyof typeof Tags]}
          onClick={() =>
            setCheck({ ...check, [tag]: !check[tag as keyof typeof Tags] })
          }
        >
          {tag}
        </CheckableTag>
      ))}
    </ul>
  );
};

export const Default = Template.bind({});
Default.args = {};
