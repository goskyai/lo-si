import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { compose, fontSize, FontSizeProps } from 'styled-system';

import { color, ColorProps } from '../../utils/styled/color';
import { exceptionList } from '../../utils/styled/exceptionList';

export type IconTypes =
  | 'exit'
  | 'copy'
  | 'chevron-down'
  | 'calendar'
  | 'plane'
  | 'store'
  | 'ellipsis-h'
  | 'circle-error-solid'
  | 'check'
  | 'circle-error'
  | 'circle-success'
  | 'circle-warning'
  | 'select'
  | 'pen'
  | 'trash'
  | 'info'
  | 'circle-close-solid';

interface StyledProps extends FontSizeProps, ColorProps {
  rotate?: number;
}

export interface IconProps extends StyledProps {
  icon: IconTypes;
  rotate?: number;
}

const rotating = (deg: number) => `rotate(${deg}deg)`;

const StyledIcon = styled.i.withConfig<StyledProps>({
  shouldForwardProp: (prop, validator) =>
    !exceptionList.includes(prop) && validator(prop),
})`
  transition: transform 0.25s;
  ${compose(color, fontSize)}
  transform: ${({ rotate = 0 }) => rotating(rotate)};
`;

export const Icon: FunctionComponent<IconProps> = ({ icon, ...props }) => {
  return <StyledIcon className={`gsif-${icon}`} {...props} />;
};
