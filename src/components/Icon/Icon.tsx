import { default as AntdIcon } from '@ant-design/icons';
import { ComponentProps, FunctionComponent } from 'react';
import { StyledIcon } from './styles';

export type IconType =
  | 'check'
  | 'times'
  | 'arrow-top'
  | 'arrow-right'
  | 'arrow-bottom'
  | 'arrow-left'
  | 'chevron-top'
  | 'chevron-right'
  | 'chevron-bottom'
  | 'chevron-left'
  | 'arrow-circle-top'
  | 'arrow-circle-right'
  | 'arrow-circle-bottom'
  | 'arrow-circle-left'
  | 'plus-circle'
  | 'minus-circle'
  | 'star-circle'
  | 'exclamation-triangle'
  | 'facebook-circle'
  | 'sort'
  | 'caret-down'
  | 'triangle'
  | 'tag'
  | 'dashboard'
  | 'cog'
  | 'bullhorn'
  | 'store'
  | 'users'
  | 'redo'
  | 'link'
  | 'question-circle'
  | 'search'
  | 'cloud-upload'
  | 'gift'
  | 'receipt'
  | 'plane'
  | 'ellipsis-h'
  | 'copy'
  | 'pen'
  | 'trash';

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
