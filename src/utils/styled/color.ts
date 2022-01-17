// Ref: https://github.com/styled-system/styled-system/issues/1206#issuecomment-699640562
import {
  color as ssColor,
  ColorProps as SSColorProps,
  compose,
  system,
  TextColorProps,
} from 'styled-system';
import globalTheme, {
  ColorLevelType,
  ColorType,
} from '../../assets/theme/global';

export const getColorValue = (
  base: ColorType,
  level?: ColorLevelType,
): string => {
  if (!level) return globalTheme.colors[base];

  const colorRegex = /(.+)-\d00$/;
  const match = base.match(colorRegex);
  if (match) {
    // `base` includes level
    return globalTheme.colors[`${match[1]}-${level}` as ColorType];
  }
  return globalTheme.colors[`${base}-${level}` as ColorType];
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
