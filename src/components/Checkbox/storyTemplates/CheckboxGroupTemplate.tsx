import { ComponentStory } from '@storybook/react';
import { Divider } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { useState } from 'react';
import { Checkbox, CheckboxGroup } from '..';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

export const CheckboxGroupTemplate: ComponentStory<typeof Checkbox> = ({
  color = 'gosky-blue',
  ...args
}) => {
  const [checkedList, setCheckedList] =
    useState<Array<CheckboxValueType>>(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState<boolean>(true);
  const [checkAll, setCheckAll] = useState<boolean>(false);

  const onChange = (list: Array<CheckboxValueType>) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
        color={color}
      >
        Check all
      </Checkbox>
      <Divider style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }} />
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        {...args}
        onChange={onChange}
      />
    </>
  );
};
