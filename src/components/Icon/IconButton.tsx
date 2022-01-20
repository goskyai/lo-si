import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled from 'styled-components';
import {
  compose,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';
import { Icon, IconType } from '.';
import { ColorType } from '../../assets/theme/global';
import { getColorValue } from '../../utils/styled/color';

interface StatusColorInterface {
  standard?: ColorType;
  hover?: ColorType;
}
interface StyledIconButtonProps extends SpaceProps, PositionProps {
  /**
   * 按鈕一般狀態 -> Hover 的顏色是否高對比
   */
  contrast?: boolean;
  /**
   * 圓形外觀
   */
  circle?: boolean;
  /**
   * Icon 顏色
   */
  iconColor?: StatusColorInterface;
  /**
   * 按鈕背景顏色
   */
  bgColor?: StatusColorInterface;
}

const DefaultStandardColor = (contrast?: boolean): string =>
  contrast ? getColorValue('grey-400') : 'white';
const DefaultStandardBgColor = (contrast?: boolean): string =>
  getColorValue(contrast ? 'transparent' : 'grey-200');
const DefaultHoverColor = (contrast?: boolean): string =>
  contrast ? getColorValue('gosky-blue') : 'white';
const DefaultHoverBgColor = (contrast?: boolean): string =>
  getColorValue('grey', contrast ? '200' : '400');

/* eslint-disable indent */
const StyledIconButton = styled.button<StyledIconButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: none;
  border-radius: ${({ circle }) => (circle ? '50%' : '0.25rem')};
  padding: 0.375rem;
  cursor: pointer;
  transition: all 200ms ease;
  transition-property: color, background-color;

  color: ${({ iconColor, contrast }) =>
    iconColor?.standard
      ? getColorValue(iconColor.standard)
      : DefaultStandardColor(contrast)};
  background-color: ${({ bgColor, contrast }) =>
    bgColor?.standard
      ? getColorValue(bgColor.standard)
      : DefaultStandardBgColor(contrast)};

  ${compose(space, position)};

  :hover {
    color: ${({ iconColor, contrast }) =>
      iconColor?.hover
        ? getColorValue(iconColor.hover)
        : DefaultHoverColor(contrast)};
    background-color: ${({ bgColor, contrast }) =>
      bgColor?.hover
        ? getColorValue(bgColor.hover)
        : DefaultHoverBgColor(contrast)};
  }
`;
/* eslint-enable indent */

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    StyledIconButtonProps {
  icon: IconType;
}

export const IconButton: FunctionComponent<IconButtonProps> = ({
  icon,
  ...props
}) => {
  return (
    <StyledIconButton {...props}>
      <Icon icon={icon} />
    </StyledIconButton>
  );
};
