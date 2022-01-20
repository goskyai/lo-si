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
  MainColorType,
  NeutralColorType,
} from '../../assets/theme/global';

function getColorValue(base: ColorType): string;
function getColorValue(
  base: MainColorType | NeutralColorType,
  level?: ColorLevelType,
): string;
function getColorValue(base: ColorType, level?: ColorLevelType): string {
  if (!level) return globalTheme.colors[base];
  return globalTheme.colors[`${base}-${level}` as ColorType];
}

export { getColorValue };

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
