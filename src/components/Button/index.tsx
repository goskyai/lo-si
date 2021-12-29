import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled from 'styled-components';
import {
  border,
  compose,
  layout,
  position,
  space,
  typography,
  variant,
} from 'styled-system';
import { MainColorType } from '../../assets/theme/global';
import { CommonButtonProps } from '../../assets/types/ElementTypes';
import { getColorKey } from '../../utils/styled/color';
import { exceptionList } from '../../utils/styled/exceptionList';

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

  ${({ themeColor }) =>
    variant({
      prop: 'styleType',
      variants: {
        primary: {
          color: 'white',
          backgroundColor: themeColor,
          borderColor: themeColor,
          '&:hover': {
            backgroundColor: getColorKey(themeColor, '300'),
          },
          '&:active': {
            backgroundColor: getColorKey(themeColor, '400'),
            borderColor: getColorKey(themeColor, '400'),
          },
          '&:disabled': {
            backgroundColor: getColorKey('grey', '200'),
          },
        },
        secondary: {
          backgroundColor: 'white',
          color: getColorKey(themeColor, '400'),
          borderColor: getColorKey(themeColor, '400'),
          '&:hover': {
            color: getColorKey(themeColor, '300'),
          },
          '&:active': {
            color: themeColor,
            borderColor: themeColor,
          },
          '&:disabled': {
            color: getColorKey('grey', '300'),
          },
        },
      },
    })}
  ${variant({
    prop: 'size',
    variants: {
      normal: {
        px: '1.25rem',
        py: '0.5rem',
      },
      small: {
        px: '1rem',
        py: '0.5rem',
        fontSize: '0.75rem',
      },
    },
  })}
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
