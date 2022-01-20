import { variant } from 'styled-system';
import { MainColorType, NeutralColorType } from '../../assets/theme/global';
import { getColorValue } from '../../utils/styled/color';

export const buttonVariant = (color: MainColorType | NeutralColorType) =>
  variant({
    variants: {
      primary: {
        color: 'white',
        backgroundColor: color,
        borderColor: color,
        '&:hover': {
          backgroundColor: getColorValue(color, '300'),
        },
        '&:active': {
          backgroundColor: getColorValue(color, '400'),
          borderColor: getColorValue(color, '400'),
        },
        '&:disabled': {
          backgroundColor: getColorValue('grey-200'),
        },
      },
      secondary: {
        backgroundColor: 'white',
        color: getColorValue(color, '400'),
        borderColor: getColorValue(color, '400'),
        '&:hover': {
          color: getColorValue(color, '300'),
        },
        '&:active': {
          color: color,
          borderColor: color,
        },
        '&:disabled': {
          color: getColorValue('grey-300'),
        },
      },
    },
  });

export const buttonSizeVariant = () =>
  variant({
    prop: 'size',
    variants: {
      normal: {
        px: '1.25rem',
        py: '0.5rem',
      },
      small: {
        px: '1rem',
        py: '0.5rem',
        fontSize: '0.75rem',
      },
    },
  });
