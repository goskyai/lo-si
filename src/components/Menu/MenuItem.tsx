import { Menu as AntdMenu, MenuItemProps as AntdMenuItemProps } from 'antd';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

export interface MenuItemProps extends AntdMenuItemProps {}

const StyledMenuItem = styled(AntdMenu.Item)<MenuItemProps>`
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.4;
  padding: 0.5rem 0.75rem;
`;

export const MenuItem: FunctionComponent<MenuItemProps> = (props) => {
  return <StyledMenuItem {...props} />;
};
