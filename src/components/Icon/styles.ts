import styled from 'styled-components';
import { rotate as rotateKeyframes } from '../../utils/animation';

const rotateValue = (deg: number) => `rotate(${deg}deg)`;

export interface StyledIconProps {
  rotate?: number;
  spin?: boolean;
}

export const StyledIcon = styled.i<StyledIconProps>`
  display: inline-block;
  animation: infinite linear 1s;
  animation-name: ${({ spin }) => (spin ? rotateKeyframes : 'none')};
  transform: ${({ rotate }) => (rotate ? rotateValue(rotate) : 'none')};
`;
