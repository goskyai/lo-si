import { cloneElement, FunctionComponent, SVGProps } from 'react';
import { IconType } from '.';
import Delete from '../../assets/icons/delete.svg';
import Tip from '../../assets/icons/tip.svg';

export interface InlinSVGIconProps extends SVGProps<SVGSVGElement> {
  scale?: number;
  icon: IconType;
}

// @ts-ignore
const Icons: {
  [key in IconType]: JSX.Element;
} = {
  trash: <Delete />,
  'question-circle': <Tip />,
};

export const Icon: FunctionComponent<InlinSVGIconProps> = ({
  icon,
  scale = 1,
  ...props
}) => {
  const elm = Icons[icon];
  if (elm) {
    return cloneElement(elm, {
      width: 16 * scale,
      height: 16 * scale,
      ...props,
    });
  }
  return null;
};
