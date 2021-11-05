import {
  Dropdown as AntdDropdown,
  DropDownProps as AntdDropDownProps,
} from 'antd';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

export interface DropdownProps extends AntdDropDownProps {}

const StyledDropdown = styled(AntdDropdown)<DropdownProps>`
  & .ant-dropdown-menu {
    box-shadow: none;
  }
`;

export const Dropdown: FunctionComponent<DropdownProps> = (props) => {
  return <StyledDropdown {...props} />;
};
