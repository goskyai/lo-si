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
import { ColorType } from '../../assets/theme/global';
import { CommonButtonProps } from '../../assets/types/ElementTypes';
import { exceptionList } from '../../utils/styled/exceptionList';

export type ButtonSizeType = 'small' | 'normal';
export type ButtonStyleType = 'primary' | 'secondary';
export type ButtonColorType =
  | 'gosky-blue'
  | 'gosky-orange'
  | 'gosky-green'
  | 'red'
  | 'green';

const colorProp = (
  baseColor: ButtonColorType | 'grey',
  level?: '200' | '300' | '400' | '500' | '600',
): ColorType => {
  return level ? (`${baseColor}-${level}` as ColorType) : baseColor;
};

interface StyledButtonProps extends CommonButtonProps {
  size: ButtonSizeType;
  styleType: ButtonStyleType;
  color: ButtonColorType;
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
  color?: ButtonColorType;
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
    border-color: ${({ theme, color }) =>
      theme.colors[colorProp(color, '300')]};
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors[colorProp('grey', '200')]};
  }

  ${({ color }) =>
    variant({
      prop: 'styleType',
      variants: {
        primary: {
          color: 'white',
          backgroundColor: color,
          borderColor: color,
          '&:hover': {
            backgroundColor: colorProp(color, '300'),
          },
          '&:active': {
            backgroundColor: colorProp(color, '400'),
            borderColor: colorProp(color, '400'),
          },
          '&:disabled': {
            backgroundColor: colorProp('grey', '200'),
          },
        },
        secondary: {
          backgroundColor: 'white',
          color: colorProp(color, '400'),
          borderColor: colorProp(color, '400'),
          '&:hover': {
            color: colorProp(color, '300'),
          },
          '&:active': {
            color: color,
            borderColor: color,
          },
          '&:disabled': {
            color: colorProp('grey', '300'),
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
  color = 'gosky-blue',
  block = false,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <StyledButton
      size={size}
      styleType={styleType}
      color={color}
      block={block}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
