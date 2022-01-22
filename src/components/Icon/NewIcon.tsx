import { FunctionComponent, SVGProps } from 'react';
import { IconType } from '.';
import sprite from '../../assets/icons/symbol/svg/sprite.symbol.svg';

export interface IconInterface extends SVGProps<SVGSVGElement> {
  icon: IconType;
  scale?: number;
}

export const Icon: FunctionComponent<IconInterface> = ({
  icon,
  scale = 1,
  ...props
}) => {
  return (
    <svg height={16 * scale} width={16 * scale} {...props}>
      <use xlinkHref={`${sprite}#${icon}`} />
    </svg>
  );
};
