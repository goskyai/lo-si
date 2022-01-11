import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled from 'styled-components';
import {
  compose,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';
import { Icon, IconType } from '.';

interface StyledIconButtonProps extends SpaceProps, PositionProps {
  /**
   * 按鈕一般狀態 -> Hover 的顏色是否高對比
   */
  contrast?: boolean;
  /**
   * 圓形外觀
   */
  circle?: boolean;
}

/* eslint-disable indent */
const StyledIconButton = styled.button<StyledIconButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: ${({ contrast, theme }) =>
    contrast ? theme.colors['grey-400'] : 'white'};
  background: ${({ contrast, theme }) =>
    contrast ? theme.colors.transparent : theme.colors['grey-200']};
  border: none;
  border-radius: ${({ circle }) => (circle ? '50%' : '0.25rem')};
  padding: 0.375rem;
  cursor: pointer;
  transition: all 200ms ease;
  transition-property: color, background-color;

  ${compose(space, position)};

  :hover {
    color: ${({ contrast, theme }) =>
      contrast ? theme.colors['gosky-blue'] : 'white'};
    background: ${({ contrast, theme }) =>
      contrast ? theme.colors['grey-200'] : theme.colors['grey-400']};
  }
`;
/* eslint-enable indent */

export interface IconButtonProps
  extends StyledIconButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

export const IconButton: FunctionComponent<IconButtonProps> = ({
  icon,
  ...props
}) => {
  return (
    <StyledIconButton {...props}>
      <Icon icon={icon} />
    </StyledIconButton>
  );
};
