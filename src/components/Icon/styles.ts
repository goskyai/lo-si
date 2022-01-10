import styled from 'styled-components';

const rotateValue = (deg: number) => `rotate(${deg}deg)`;

export interface StyledIconProps {
  rotate?: number;
  spin?: boolean;
}

export const StyledIcon = styled.i<StyledIconProps>`
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  display: inline-block;
  animation: ${({ spin }) => (spin ? '1s linear infinite spin' : 'none')};
  transform: ${({ rotate }) => (rotate ? rotateValue(rotate) : 'none')};
`;
