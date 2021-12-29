import { forwardRef, FunctionComponent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  borderColor,
  BorderColorProps,
  compose,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { ColorType, FontSizeType } from '../../assets/theme/global';
import { color as colorUtil, ColorProps } from '../../utils/styled/color';

interface StyledCheckboxProps extends SpaceProps, TypographyProps, ColorProps {}
interface StyledCheckboxInputProps {
  checkedColor: ColorType;
}
interface StyledCheckmarkWrapperProps extends BorderColorProps, ColorProps {}

const StyledCheckbox = styled.label<StyledCheckboxProps>`
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  cursor: pointer;
  ${compose(colorUtil, space, typography)}
`;

/* eslint-disable */
const StyledCheckboxInput = styled.input<StyledCheckboxInputProps>`
  display: none;
  &:not(:checked) {
    & ~ .checkmark-wrapper > .checkmark {
      opacity: 0;
    }
  }
  &:checked {
    & ~ .checkmark-wrapper {
      background-color: ${({ theme, checkedColor }) =>
        theme.colors[checkedColor]};
      border-color: ${({ theme, checkedColor }) => theme.colors[checkedColor]};
    }
  }
  &:disabled {
    & ~ .checkmark-wrapper {
      border-color: ${({ theme }) => theme.colors['grey-500']};
      background-color: ${({ theme }) => theme.colors['grey-400']};
    }
    &:checked {
      & ~ .checkmark-wrapper {
        background-color: ${({ theme }) => theme.colors['grey-500']};
      }
    }
    & ~ .checkbox-label {
      color: ${({ theme }) => theme.colors['grey-500']};
    }
  }
`;
/* eslint-enable */

const StyledCheckmarkWrapper = styled.span<StyledCheckmarkWrapperProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1.2em;
  height: 1.2em;
  border-radius: 0.2em;
  border: 1px solid;
  margin-right: 0.5rem;
  position: relative;
  overflow: hidden;
  ${compose(borderColor, colorUtil)}
  & > .checkmark {
    color: white;
  }
`;

export interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement>,
    SpaceProps {
  /**
   * Default check status of checkbox input
   */
  defaultChecked: boolean;
  /**
   * 是否限制輸入
   */
  disabled: boolean;
  /**
   * 文字大小
   */
  fontSize: FontSizeType;
  /**
   * 文字、Checkbox 主題顏色
   */
  color: ColorType;
  /**
   * onChenage Callback
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FunctionComponent<CheckboxProps> = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(
  (
    {
      children,
      id,
      name,
      defaultChecked = false,
      disabled = false,
      fontSize = 'body',
      color = 'gosky-blue',
      onChange,
      mt,
      mb,
      ...props
    },
    ref,
  ) => {
    return (
      <StyledCheckbox fontSize={fontSize} textColor={color} mt={mt} mb={mb}>
        <StyledCheckboxInput
          id={id}
          name={name}
          defaultChecked={defaultChecked}
          disabled={disabled}
          type="checkbox"
          checkedColor={color}
          onChange={onChange}
          ref={ref}
          {...props}
        />
        <StyledCheckmarkWrapper
          className="checkmark-wrapper"
          bg={`${color}-200`}
          borderColor={`${color}-400`}
        >
          <i className="checkmark gsif-check" />
        </StyledCheckmarkWrapper>
        <span className="checkbox-label">{children}</span>
      </StyledCheckbox>
    );
  },
);
