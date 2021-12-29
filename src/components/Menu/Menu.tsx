import { Menu as AntdMenu, MenuProps as AntdMenuProps } from 'antd';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

export interface MenuProps extends Omit<AntdMenuProps, 'theme'> {}

const StyledMenu = styled(AntdMenu)<MenuProps>`
  &.ant-dropdown-menu {
    font-size: ${({ theme }) => theme.fontSizes.h4};
    line-height: 1.4;
    padding: 1rem 0.5rem;
    box-shadow: none;
    border: 1px solid var(--grey-4);
    border-radius: 0.25rem;
  }
`;

export const Menu: FunctionComponent<MenuProps> = (props) => {
  return <StyledMenu {...props} />;
};
