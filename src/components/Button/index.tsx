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
import { MainColorType } from '../../assets/theme/global';
import { CommonButtonProps } from '../../assets/types/ElementTypes';
import { getColorKey } from '../../utils/styled/color';
import { exceptionList } from '../../utils/styled/exceptionList';
import { buttonSizeVariant, buttonStyleTypeVariant } from './buttonVariant';

export type ButtonSizeType = 'small' | 'normal';
export type ButtonStyleType = 'primary' | 'secondary';

interface StyledButtonProps extends CommonButtonProps {
  size: ButtonSizeType;
  styleType: ButtonStyleType;
  themeColor: MainColorType;
  block: boolean;
}

export interface ButtonProps
  extends CommonButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  as?: string | React.ComponentType<Record<string, unknown>>;
  /**
   * 改變按鈕大小，default 大小不需輸入
   */
  size?: ButtonSizeType;
  /**
   * Primary 或 Secondary 按鈕
   */
  styleType?: ButtonStyleType;
  /**
   * 按鈕顏色
   */
  themeColor?: MainColorType;
  /**
   * 切換按鈕 display 為 block，預設為 inline
   */
  block?: boolean;
}

/* eslint-disable indent */
const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop, validator) =>
    !exceptionList.includes(prop) && validator(prop),
})<StyledButtonProps>`
  border-style: solid;
  border-width: 0.125rem;
  border-radius: 0.25rem;
  line-height: 1.3;
  cursor: pointer;
  word-break: keep-all;
  transition: all 0.2s;
  display: ${({ block }) => (block ? 'block' : 'inline')};
  width: ${({ block }) => (block ? '100%' : 'auto')};

  &:hover {
    border-color: ${({ theme, themeColor }) =>
      theme.colors[getColorKey(themeColor, '300')]};
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors[getColorKey('grey', '200')]};
  }

  ${({ themeColor }) => buttonStyleTypeVariant(themeColor)}
  ${buttonSizeVariant()}
  ${compose(border, layout, position, space, typography)}
`;
/* eslint-enable indent */

export const Button: FunctionComponent<ButtonProps> = ({
  size = 'normal',
  styleType = 'primary',
  themeColor = 'gosky-blue',
  block = false,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <StyledButton
      size={size}
      styleType={styleType}
      themeColor={themeColor}
      block={block}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
