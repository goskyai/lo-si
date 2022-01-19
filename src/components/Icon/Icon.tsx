import { default as AntdIcon } from '@ant-design/icons';
import { ComponentProps, FunctionComponent } from 'react';
import { StyledIcon } from './styles';

export type IconType =
  | 'exit'
  | 'copy'
  | 'chevron-down'
  | 'plane'
  | 'store'
  | 'ellipsis-h'
  | 'pen'
  | 'trash'
  | 'select'
  | 'circle-error-solid'
  | 'check'
  | 'circle-error'
  | 'circle-success'
  | 'circle-warning'
  | 'calendar'
  | 'info'
  | 'circle-close-solid'
  | 'close'
  | 'arrow-left'
  | 'arrow-right'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up';

type AntdIconType = ComponentProps<typeof AntdIcon>;

export interface IconProps extends AntdIconType {
  icon?: IconType;
}

export const Icon: FunctionComponent<IconProps> = ({ icon, ...props }) => {
  if (icon) {
    const { spin, rotate, style } = props;

    return (
      <AntdIcon
        component={() => (
          <StyledIcon className={`gsif-${icon}`} {...{ spin, rotate, style }} />
        )}
      />
    );
  }
  return <AntdIcon {...props} />;
};
