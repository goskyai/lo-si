import {
  Checkbox as AntdCheckbox,
  CheckboxProps as AntdCheckboxProps,
} from 'antd';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { MainColorType } from '../../assets/theme/global';
import { getColorKey } from '../../utils/styled/color';

interface StyledCheckboxProps {
  color: MainColorType;
}

/* eslint-disable indent */
const StyledCheckbox = styled(AntdCheckbox)<StyledCheckboxProps>`
  && {
    align-items: center;
    line-height: 1;
  }

  &.ant-checkbox-wrapper:hover .ant-checkbox-inner {
    border-color: ${({ theme, color }) =>
      theme.colors[getColorKey(color, '500')]} !important;
  }

  .ant-checkbox {
    top: 0;

    .ant-checkbox-input:focus + .ant-checkbox-inner,
    .ant-checkbox-inner {
      border-color: ${({ theme, color }) =>
        theme.colors[getColorKey(color, '400')]};
    }

    .ant-checkbox-inner {
      background-color: ${({ theme, color }) =>
        theme.colors[getColorKey(color, '200')]};

      &:after {
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

    &.ant-checkbox-checked {
      .ant-checkbox-inner {
        background-color: ${({ theme, color }) =>
          theme.colors[getColorKey(color, '500')]};
        border-color: rgba(0, 0, 0, 0);
      }

      .ant-checkbox-input:focus + .ant-checkbox-inner,
      &:after {
        border-color: ${({ theme, color }) =>
          theme.colors[getColorKey(color, '500')]};
      }

      &:after {
        border-width: 0.125rem;
      }
    }

    &.ant-checkbox-disabled {
      .ant-checkbox-inner {
        background-color: ${({ theme }) => theme.colors['grey-100']};
        border-color: ${({ theme }) => theme.colors['grey-300']} !important;
      }
      &.ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${({ theme }) => theme.colors['grey-300']};
      }
    }
  }
`;
/* eslint-enable indent */

export interface CheckboxProps extends AntdCheckboxProps {
  color?: MainColorType;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  color = 'gosky-blue',
  ...props
}) => {
  return <StyledCheckbox color={color} {...props} />;
};
