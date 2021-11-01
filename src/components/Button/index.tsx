import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled from 'styled-components';
import {
  border,
  compose,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

import globalTheme, { ColorType } from '../../assets/theme/global';
import { CommonButtonProps } from '../../assets/types/ElementTypes';
import { color, ColorProps } from '../../utils/styled/color';
import { exceptionList } from '../../utils/styled/exceptionList';

type SizeType = 'small' | undefined;

interface StyledButtonProps extends CommonButtonProps, ColorProps {
  hoverColor: string;
  activeColor: string;
  outline: boolean;
  block: boolean;
}

export interface ButtonProps
  extends CommonButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  as?: string | React.ComponentType<Record<string, unknown>>;
  /**
   * 中空樣式
   */
  outline?: boolean;
  /**
   * 按鈕寬度 100%
   */
  block?: boolean;
  /**
   * 改變按鈕顏色，支援所有 Primary, Secondary Color
   */
  color?: ColorType;
  /**
   * 改變按鈕大小，default 大小不需輸入
   */
  size?: SizeType;
}

/* eslint-disable indent */
const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop, validator) =>
    !exceptionList.includes(prop) && validator(prop),
})<StyledButtonProps>`
  line-height: 1.4;
  border-style: solid;
  border-radius: 0.25rem;
  transition: all 0.2s;
  cursor: pointer;
  word-break: keep-all;
  ${({ block }) => block && 'display: block; width: 100%;'};
  &:hover {
    background-color: ${({ theme, outline, hoverColor }) =>
      outline ? theme.colors.transparent : theme.colors[hoverColor]};
    color: ${({ theme, outline, hoverColor }) =>
      outline ? theme.colors[hoverColor] : 'white'};
    border-color: ${({ theme, hoverColor }) => theme.colors[hoverColor]};
  }
  &:active {
    background-color: ${({ theme, outline, activeColor }) =>
      outline ? theme.colors.transparent : theme.colors[activeColor]};
    color: ${({ theme, outline, activeColor }) =>
      outline ? theme.colors[activeColor] : 'white'};
    border-color: ${({ theme, activeColor }) => theme.colors[activeColor]};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.grey};
    color: white;
    border-color: ${({ theme }) => theme.colors.grey};
  }
  ${compose(border, layout, position, space, typography, color)}
`;
/* eslint-enable indent */

export const Button: FunctionComponent<ButtonProps> = ({
  disabled = false,
  outline = false,
  block = false,
  color = 'blue',
  size = undefined,
  children,
  ...props
}) => {
  const { transparent } = globalTheme.colors;
  const fontSize = size === 'small' ? 'body' : 'h3';
  const textColor = outline ? color : 'white';
  const bg = disabled ? 'grey' : outline ? transparent : color;
  const borderColor = disabled ? 'grey' : color;
  const borderWidth = size === 'small' ? 1 : 2;
  const px = size === 'small' ? 12 : 15;
  const py = size === 'small' ? 3 : 5;
  const hoverColor = `${color}-600`;
  const activeColor = `${color}-400`;
  return (
    <StyledButton
      fontSize={fontSize}
      textColor={textColor}
      bg={bg}
      borderColor={borderColor}
      borderWidth={borderWidth}
      px={px}
      py={py}
      hoverColor={hoverColor}
      activeColor={activeColor}
      outline={outline}
      block={block}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
