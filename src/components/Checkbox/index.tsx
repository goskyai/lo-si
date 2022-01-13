import { Checkbox as AntdCheckbox } from 'antd';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

// const CheckboxGroup = Checkbox.Group;

// export interface CheckboxProps {};

const StyledCheckbox = styled(AntdCheckbox)`
  && {
    align-items: center;
    line-height: 1;
  }

  .ant-checkbox {
    top: 0;

    .ant-checkbox-inner:after {
      top: 50%;
      left: 50%;
      font-family: 'GoSky-icon';
      font-size: 0.875rem;
      color: white;
      border: none;
      transform: scale(1) translate(-50%, -50%);
      content: '\\e903';
    }
  }
`;

export const Checkbox: FunctionComponent = (props) => {
  return <StyledCheckbox defaultChecked {...props} />;
};
