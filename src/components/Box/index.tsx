import * as CSS from 'csstype';
import styled from 'styled-components';
import {
  border,
  BorderProps,
  compose,
  display,
  DisplayProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  opacity,
  OpacityProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';

import { color, ColorProps } from '../../utils/styled/color';
import { exceptionList } from '../../utils/styled/exceptionList';

export interface BoxProps
  extends BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    DisplayProps,
    OpacityProps,
    FlexboxProps,
    TextAlignProps,
    ColorProps {
  visibility?: CSS.Property.Visibility;
}

export const Box = styled.div.withConfig({
  shouldForwardProp: (prop, validator) =>
    !exceptionList.includes(prop) && validator(prop),
})<BoxProps>`
  ${({ visibility }) => (!visibility ? null : `visibility: ${visibility}`)};
  ${compose(
    border,
    layout,
    space,
    position,
    display,
    opacity,
    flexbox,
    color,
    textAlign,
  )}
`;
