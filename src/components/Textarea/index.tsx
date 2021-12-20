import _ from 'lodash';
import { rgba } from 'polished';
import {
  forwardRef,
  FunctionComponent,
  TextareaHTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled, { DefaultTheme } from 'styled-components';
import {
  border,
  BorderProps,
  compose,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

import { ColorType } from '../../assets/theme/global';
import { color as colorUtil, ColorProps } from '../../utils/styled/color';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
`;

interface StyledCounterProps {
  exceeded: boolean;
  bg: 'grey-400' | 'grey-200';
  displayCounter: boolean;
}

const StyledCounter = styled.div<StyledCounterProps>`
  position: absolute;
  bottom: 0.625rem;
  right: 0.625rem;
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.4;
  color: ${({ theme, exceeded }) =>
    exceeded ? theme.colors['red-500'] : theme.colors['grey-500']};
  background-color: ${({ theme, bg }) => rgba(theme.colors[bg], 0.8)};
  transition: 0.5s opacity ease-in-out;
  opacity: ${({ displayCounter }) => (displayCounter ? 1 : 0)};
`;

interface StyledTextareaProps extends ColorProps {
  hoverBorderColor: string;
}

const borderProp = (colors: DefaultTheme['colors']) =>
  `1px solid ${colors['grey-400']}`;

/* eslint-disable indent */
const StyledTextarea = styled.textarea<StyledTextareaProps>`
  width: 100%;
  padding: 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.h3};
  line-height: 1.4;
  color: black;
  border: ${({ theme: { colors } }) => borderProp(colors)};
  border-radius: 0.25rem;
  resize: vertical;
  outline: none;
  ${compose(border, position, space, typography, colorUtil)}
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 300;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.grey};
  }
  &:hover,
  &:focus {
    border-color: ${({ theme, hoverBorderColor }) =>
      theme.colors[hoverBorderColor]};
  }
`;
/* eslint-enable indent */

export interface TextareaProps
  extends BorderProps,
    PositionProps,
    SpaceProps,
    TypographyProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * 文字、框線顏色
   */
  color?: ColorType;
}

export const Textarea: FunctionComponent<TextareaProps> = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ color = 'blue', ...props }, ref) => {
  const { maxLength, disabled, value } = props;
  const timeout = useRef<number>();
  const [displayCounter, setDisplayCounter] = useState(false);

  const exceeded = useMemo(() => {
    if (maxLength) {
      return _.toString(value).length >= maxLength;
    }
    return false;
  }, [value]);

  const showCounter = () => {
    clearTimeout(timeout.current);
    setDisplayCounter(true);
    timeout.current = window.setTimeout(() => {
      setDisplayCounter(false);
    }, 3000);
  };
  useEffect(() => {
    showCounter();
    return () => clearTimeout(timeout.current);
  }, [value]);

  const hoverBorderColor = disabled ? 'grey-400' : `${color}-600`;
  const bgColor = disabled ? 'grey-400' : 'grey-200';

  return (
    <StyledWrapper>
      <StyledTextarea
        ref={ref}
        hoverBorderColor={hoverBorderColor}
        bg={bgColor}
        {...props}
      />
      {maxLength && value && (
        <StyledCounter
          exceeded={exceeded}
          displayCounter={displayCounter}
          bg={bgColor}
        >
          {_.toString(value).length}/{maxLength}
        </StyledCounter>
      )}
    </StyledWrapper>
  );
});
