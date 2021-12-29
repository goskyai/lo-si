import { forwardRef, FunctionComponent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  border,
  BorderProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { ColorType } from '../../assets/theme/global';
import { CommonTextFieldProps } from '../../assets/types/ElementTypes';
import { color as colorUtil } from '../../utils/styled/color';
import { exceptionList } from '../../utils/styled/exceptionList';

export interface InputProps
  extends CommonTextFieldProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'as'> {
  /**
   * 框線顏色
   */
  color?: ColorType;
  /**
   * 欄位中前綴，允許純文字或 React Node
   */
  prefix?: React.ReactNode | string;
  /**
   * 欄位中後綴，允許純文字或 React Node
   */
  suffix?: React.ReactNode | string;
}
interface StyledWrapperProps
  extends CommonTextFieldProps,
    FlexboxProps,
    LayoutProps {
  disabled: boolean;
  hoverColor: ColorType;
}

const StyledWrapper = styled.div.withConfig({
  shouldForwardProp: (prop, validator) =>
    !exceptionList.includes(prop) && validator(prop),
})<StyledWrapperProps>`
  ${compose(border, flexbox, layout, position, space, typography, colorUtil)}
  cursor: ${({ disabled }) => (disabled ? 'not-allowed	' : 'default')};
  &:hover,
  &:focus-within {
    border-color: ${({ theme, hoverColor }) => theme.colors[hoverColor]};
  }
`;

const StyledPrefix = styled.div<BorderProps & SpaceProps>`
  display: flex;
  align-items: center;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.grey};
  ${compose(border, space)}
`;

const StyledSuffix = styled.div<SpaceProps>`
  display: flex;
  align-items: center;
  font-weight: 300;
  ${space}
`;

const StyledInput = styled.input<TypographyProps & SpaceProps>`
  all: unset;
  flex: 1;
  min-width: 3rem;
  outline: none;
  cursor: text;
  font-size: ${({ theme }) => theme.fontSizes.h3};
  line-height: 1.4;
  color: black;
  ${compose(typography, space)}
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 300;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.grey};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Input: FunctionComponent<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      color = 'blue',
      prefix,
      suffix,
      mt = 0,
      mb = 0,
      mr = 0,
      ml = 0,
      ...props
    },
    ref,
  ) => {
    const { disabled = false } = props;
    const wrapperBackgroundColor = disabled ? 'grey-400' : 'grey-200';
    const wrapperHoverBorderColor = disabled
      ? 'grey-400'
      : (`${color}-600` as ColorType);

    return (
      <StyledWrapper
        width={1}
        border="1px solid"
        borderRadius="0.25rem"
        borderColor="grey-400"
        flexWrap="nowrap"
        display="flex"
        p="6"
        fontSize="h3"
        bg={wrapperBackgroundColor}
        hoverColor={wrapperHoverBorderColor}
        disabled={disabled}
        mt={mt}
        mb={mb}
        mr={mr}
        ml={ml}
      >
        {prefix && (
          <StyledPrefix
            borderRight="1px solid"
            borderColor="grey-400"
            pr="6"
            mr="6"
          >
            {prefix}
          </StyledPrefix>
        )}
        <StyledInput textAlign="left" ref={ref} {...props} />
        {suffix && <StyledSuffix pl="6">{suffix}</StyledSuffix>}
      </StyledWrapper>
    );
  },
);
