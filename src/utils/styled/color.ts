// Ref: https://github.com/styled-system/styled-system/issues/1206#issuecomment-699640562
import {
  color as ssColor,
  ColorProps as SSColorProps,
  compose,
  system,
  TextColorProps,
} from 'styled-system';
import {
  ColorLevelType,
  ColorType,
  MainColorType,
  NeutralColorType,
} from '../../assets/theme/global';

export const getColorKey = (
  base: MainColorType | NeutralColorType,
  level?: ColorLevelType,
): ColorType => {
  return level ? (`${base}-${level}` as ColorType) : base;
};

// Styled-system patch for the color prop fixing "Types of property 'color' are incompatible"
// when applying props to component that extend ColorProps.
export interface ColorProps extends Omit<SSColorProps, 'color'> {
  textColor?: TextColorProps['color'];
}

export const color = compose(
  ssColor,
  system({
    // Alias color as textColor
    textColor: {
      property: 'color',
      scale: 'colors',
    },
  }),
);
