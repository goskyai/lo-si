import * as CSS from 'csstype';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import {
  border,
  BorderProps,
  compose,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  textStyle,
  TextStyleProps,
  typography,
  TypographyProps,
} from 'styled-system';

import { color, ColorProps } from '../../utils/styled/color';
import { exceptionList } from '../../utils/styled/exceptionList';

export interface TextProps
  extends SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    BorderProps,
    PositionProps,
    TextStyleProps {
  as?: string | React.ComponentType<Record<string, unknown>>;
  htmlFor?: string;
  whiteSpace?: CSS.Property.WhiteSpace;
}

const StyledText = styled.p.withConfig<TextProps>({
  shouldForwardProp: (prop, validator) =>
    !exceptionList.includes(prop) && validator(prop),
})`
  line-height: 1.4;
  font-size: ${({ theme }) => theme.fontSizes.body};
  margin: 0;
  display: block;
  white-space: ${({ whiteSpace }) => whiteSpace || 'pre-line'};
  ${compose(border, layout, position, space, typography, color, textStyle)}
`;

export const Text: FunctionComponent<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};
