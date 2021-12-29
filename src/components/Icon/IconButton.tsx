import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled from 'styled-components';
import {
  compose,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';
import { Icon, IconTypes } from '.';
import { MainColorType, NeutralColorType } from '../../assets/theme/global';
import { getColorKey } from '../../utils/styled/color';

interface StyledIconButtonProps extends SpaceProps {
  fontSize: string;
  textColor: MainColorType | NeutralColorType;
}

const StyledIconButton = styled.button<StyledIconButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0.15625rem;
  cursor: pointer;
  width: fit-content;
  ${compose(space, position)}

  i {
    font-size: ${({ fontSize }) => fontSize};
    line-height: 1;
    color: ${({ theme, textColor }) => theme.colors[textColor]};
    transition: color 0.2s;
  }
  &:hover i {
    color: ${({ theme, textColor }) =>
      theme.colors[getColorKey(textColor, '600')]};
  }
`;

export interface IconButtonProps
  extends SpaceProps,
    PositionProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconTypes;
  fontSize?: string;
  textColor?: MainColorType | NeutralColorType;
}

export const IconButton: FunctionComponent<IconButtonProps> = ({
  icon,
  fontSize = '0.9375rem',
  textColor = 'grey',
  ...props
}) => {
  return (
    <StyledIconButton fontSize={fontSize} textColor={textColor} {...props}>
      <Icon icon={icon} />
    </StyledIconButton>
  );
};
