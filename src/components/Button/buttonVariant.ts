import { variant } from 'styled-system';
import { MainColorType } from '../../assets/theme/global';
import { getColorKey } from '../../utils/styled/color';

export const buttonStyleTypeVariant = (themeColor: MainColorType) =>
  variant({
    prop: 'styleType',
    variants: {
      primary: {
        color: 'white',
        backgroundColor: themeColor,
        borderColor: themeColor,
        '&:hover': {
          backgroundColor: getColorKey(themeColor, '300'),
        },
        '&:active': {
          backgroundColor: getColorKey(themeColor, '400'),
          borderColor: getColorKey(themeColor, '400'),
        },
        '&:disabled': {
          backgroundColor: getColorKey('grey', '200'),
        },
      },
      secondary: {
        backgroundColor: 'white',
        color: getColorKey(themeColor, '400'),
        borderColor: getColorKey(themeColor, '400'),
        '&:hover': {
          color: getColorKey(themeColor, '300'),
        },
        '&:active': {
          color: themeColor,
          borderColor: themeColor,
        },
        '&:disabled': {
          color: getColorKey('grey', '300'),
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
