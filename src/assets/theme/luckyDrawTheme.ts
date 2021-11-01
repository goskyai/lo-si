import defaultStyled, {
  DefaultTheme,
  ThemedStyledInterface,
} from 'styled-components';

import globalTheme from './global';

interface LuckyDrawType {
  luckyDraw: {
    backgroundColor: {
      start: string;
      end: string;
    };
    titleColor: string;
    wheelBackgroundColor: string;
    rivetColor: string;
    wheelTextColor: string;
    sliceColor: {
      odd: string;
      even: string;
    };
    sliceBorderColor: {
      odd: string;
      even: string;
    };
    buttonColor: string;
    modalBackgroundColor: string;
    modalTextColor: string;
    errorColor: string;
  };
}

const darkThemeConfig: LuckyDrawType = {
  luckyDraw: {
    backgroundColor: {
      start: '#1E203F',
      end: '#121829',
    },
    titleColor: '#CDCED4',
    wheelBackgroundColor: '#E0E3E9',
    rivetColor: '#5364FF',
    wheelTextColor: '#F3F5F8',
    sliceColor: {
      odd: '#8B9EB7',
      even: '#273B5B',
    },
    sliceBorderColor: {
      odd: '#40546F',
      even: '#9199A7',
    },
    buttonColor: '#5364FF',
    modalBackgroundColor: '#3A3A3A',
    modalTextColor: '#B0B0B0',
    errorColor: '#CC797F',
  },
};

const lightThemeConfig: LuckyDrawType = {
  luckyDraw: {
    backgroundColor: {
      start: '#F7FDFF',
      end: '#DBF4FF',
    },
    titleColor: '#1F76FF',
    wheelBackgroundColor: '#FFFFFF',
    rivetColor: '#C8EA00',
    wheelTextColor: '#00244F',
    sliceColor: {
      odd: '#D9E8FF',
      even: '#B2D0FF',
    },
    sliceBorderColor: {
      odd: '#2D69C5',
      even: '#012152',
    },
    buttonColor: '#0062FF',
    modalBackgroundColor: '#FFFFFF',
    modalTextColor: '#4C5357',
    errorColor: '#AA2029',
  },
};

export interface LuckyDrawThemeInterface extends LuckyDrawType, DefaultTheme {}

export const darkTheme: LuckyDrawThemeInterface = Object.assign(
  {},
  globalTheme,
  darkThemeConfig,
);
export const lightTheme: LuckyDrawThemeInterface = Object.assign(
  {},
  globalTheme,
  lightThemeConfig,
);

export const LuckyDrawThemes = {
  dark: darkTheme,
  light: lightTheme,
};

export const styled = (defaultStyled as unknown) as ThemedStyledInterface<LuckyDrawThemeInterface>;
