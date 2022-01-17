import CSS from 'csstype';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getColorValue } from '../../utils/styled/color';

export interface AvatarProps {
  img?: string;
  alt?: string;
}

const StyledContainer = styled.div`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  background-color: ${getColorValue('gosky-blue')};
  object-fit: cover;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.h2};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const Avatar: FunctionComponent<AvatarProps> = ({
  img,
  alt = 'User',
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [fit, setFit] = useState<CSS.Property.ObjectFit>('cover');

  useEffect(() => {
    if (imgRef.current) {
      const { current } = imgRef;
      if (Math.abs(current.naturalWidth / current.height - 1) > 0.25) {
        setFit('contain');
      }
    }
  }, []);

  if (!img) {
    return (
      <StyledContainer title={alt}>{alt.split('').shift()}</StyledContainer>
    );
  }
  return (
    <StyledContainer>
      <img src={img} alt={alt} ref={imgRef} style={{ objectFit: fit }} />
    </StyledContainer>
  );
};
