import {
  BorderProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

import { ColorProps } from '../../utils/styled/color';

export interface CommonButtonProps
  extends BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps {}

export interface CommonTextFieldProps
  extends BorderProps,
    PositionProps,
    SpaceProps,
    TypographyProps,
    ColorProps {}

export type TextFieldInputModeTypes =
  | 'none'
  | 'text'
  | 'decimal'
  | 'numeric'
  | 'tel'
  | 'search'
  | 'email'
  | 'url';
export type TextFieldTypes =
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';
