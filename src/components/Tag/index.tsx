import { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { color, ColorProps } from '../../utils/styled/color';

type Variants = 'blue' | 'green' | 'red' | 'grey';
interface StyledSpanProps extends Omit<ColorProps, 'backgroundColor'> {
  variant?: Variants;
}

const StyledSpan = styled.span<StyledSpanProps>`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.body};
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`};
  border-radius: 2rem;
  ${variant({
    variants: {
      blue: {
        backgroundColor: 'blue-200',
        color: 'blue',
      },
      red: {
        backgroundColor: 'red-200',
        color: 'red',
      },
      green: {
        backgroundColor: 'green-200',
        color: 'green',
      },
      grey: {
        backgroundColor: 'grey-400',
        color: 'grey-600',
      },
    },
  })}
  ${color}
`;

export interface TagProps
  extends StyledSpanProps,
    HTMLAttributes<HTMLSpanElement> {}

export const Tag: FunctionComponent<TagProps> = ({
  children,
  bg,
  textColor,
  opacity,
  variant,
  ...props
}) => (
  <StyledSpan
    bg={bg}
    textColor={textColor}
    opacity={opacity}
    variant={variant}
    {...props}
  >
    {children}
  </StyledSpan>
);
