import { css } from 'styled-components';
import { FontSizeType } from '../../assets/theme/global';

/**
 * Utility function to using DefaultTheme's fontsize
 * @param size : string, keyof `fontSizes`;
 * @returns fontSizes[string]
 */
export const FontSize = (size: FontSizeType) => css`
  ${({ theme: { fontSizes } }) => fontSizes[size]}
`;
