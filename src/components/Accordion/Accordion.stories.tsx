import { Meta, Story } from '@storybook/react';
import faker from 'faker';

import { Accordion, AccordionPanel, AccordionProps } from '.';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {},
} as Meta;

const fields = () =>
  Array.from(Array(3).keys()).map(() => ({
    title: faker.name.findName(),
    content: faker.lorem.paragraphs(faker.datatype.number({ min: 1, max: 10 })),
  }));

const DefaultTemplate: Story<AccordionProps> = (args) => {
  return (
    <Accordion {...args}>
      {fields().map((field, index) => (
        <AccordionPanel key={index + 1} header={field.title}>
          <div>{field.content}</div>
        </AccordionPanel>
      ))}
    </Accordion>
  );
};

const CustomHeaderTemplate: Story<AccordionProps> = (args) => {
  return (
    <Accordion {...args}>
      {fields().map((field, index) => (
        <AccordionPanel key={index + 1} header={<code>{field.title}</code>}>
          <div>{field.content}</div>
        </AccordionPanel>
      ))}
    </Accordion>
  );
};

const NestedTemplate: Story<AccordionProps> = (args) => {
  return (
    <Accordion {...args}>
      {fields().map((field, index) => (
        <AccordionPanel key={index + 1} header={field.title}>
          <p
            style={{
              border: '1px solid black',
              borderRadius: '0.25rem',
              backgroundColor: 'var(--grey-2)',
              padding: '1rem',
              margin: '2rem',
            }}
          >
            Nested Content
          </p>
          <Accordion hideLastDivider borderStyle="dashed">
            {fields().map((childField, childIndex) => (
              <AccordionPanel key={childIndex + 1} header={childField.title}>
                <div>{childField.content}</div>
              </AccordionPanel>
            ))}
          </Accordion>
        </AccordionPanel>
      ))}
    </Accordion>
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {};

export const CustomHeader = CustomHeaderTemplate.bind({});
CustomHeader.args = {
  headerColor: 'red',
};

export const Nested = NestedTemplate.bind({});
Nested.args = { headerColor: 'blue' };
