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
import {
  color as colorUtil,
  ColorProps,
  getColorValue,
} from '../../utils/styled/color';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
`;

interface StyledCounterProps {
  exceeded: boolean;
  bg: ColorType;
  displayCounter: boolean;
}

const StyledCounter = styled.div<StyledCounterProps>`
  position: absolute;
  bottom: 0.625rem;
  right: 0.625rem;
  font-size: ${({ theme }) => theme.fontSizes.h4};
  line-height: 1.4;
  color: ${({ exceeded }) =>
    exceeded ? getColorValue('red') : getColorValue('grey-500')};
  background-color: ${({ bg }) => rgba(getColorValue(bg), 0.8)};
  transition: 0.5s opacity ease-in-out;
  opacity: ${({ displayCounter }) => (displayCounter ? 1 : 0)};
`;

interface StyledTextareaProps extends ColorProps {
  hoverBorderColor: ColorType;
}

const borderProp = (colors: DefaultTheme['colors']) =>
  `1px solid ${colors['grey-400']}`;

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
    color: ${getColorValue('grey')};
    font-weight: 300;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${getColorValue('grey')};
  }
  &:hover,
  &:focus {
    border-color: ${({ hoverBorderColor }) => getColorValue(hoverBorderColor)};
  }
`;

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

  const hoverBorderColor = disabled
    ? 'grey-400'
    : (`${color}-600` as ColorType);
  const bgColor = disabled ? 'grey-200' : 'grey-100';

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
