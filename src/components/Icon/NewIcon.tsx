import { FunctionComponent, SVGProps } from 'react';
import { IconType } from '.';
import sprite from '../../assets/icons/symbol/svg/sprite.symbol.svg';
import { ColorType } from '../../assets/theme/global';
import { getColorValue } from '../../utils/styled/color';

export interface IconInterface extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  icon: IconType;
  scale?: number;
  color?: ColorType;
}

export const Icon: FunctionComponent<IconInterface> = ({
  icon,
  scale = 1,
  color,
  style,
  ...props
}) => {
  const svgStyle = {
    ...style,
    ...(color && { color: getColorValue(color) }),
  };
  return (
    <svg height={16 * scale} width={16 * scale} style={svgStyle} {...props}>
      <use xlinkHref={`${sprite}#${icon}`} />
    </svg>
  );
};
