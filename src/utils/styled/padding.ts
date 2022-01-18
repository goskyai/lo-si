import { css } from 'styled-components';

/**
 * Utility function to generate CSS padding string base on DefaultTheme's spaces
 * @param padding : number[];
 * @returns space[number]...
 */
export const Padding = (...padding: number[]) => css`
  ${({ theme: { space } }) => padding.map((p) => space[p]).join(' ')};
`;
