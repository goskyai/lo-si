import { FunctionComponent } from 'react';
import styled from 'styled-components';
import {
  compose,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
} from 'styled-system';

import loading from '../../assets/images/placeholder/loading.svg';

const StyledLoadingPlaceholder = styled.img`
  max-width: 100%;
`;

const StyledLoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  ${compose(space, flexbox)}
`;

export interface LoadingWrapperProps extends SpaceProps, FlexboxProps {}

export const LoadingPlaceholder: FunctionComponent<LoadingWrapperProps> = ({
  ...props
}) => {
  return (
    <StyledLoadingWrapper {...props}>
      <StyledLoadingPlaceholder src={loading} />
    </StyledLoadingWrapper>
  );
};
